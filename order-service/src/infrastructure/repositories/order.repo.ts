import axios from 'axios';
import { NotFoundError } from '../../errors';
import { IOrderRepository } from '../interfaces/index';
import { Order, CreateOrderDto, UpdateOrderDto, CreateTransactionDto } from '../models';
import dotenv from 'dotenv';
dotenv.config();

class OrderRepository implements IOrderRepository {
  async getOrders(): Promise<any> {
    const existingOrders = await Order.find({});
    return existingOrders;
  }

  async getOrder(userId): Promise<any> {
    const existingOrder = await Order.findOne({ _id: userId });
    if (!existingOrder) {
      throw new NotFoundError('User with the given ID not found');
    }
    return existingOrder;
  }

  async createOrder(createOrderDto: CreateOrderDto): Promise<any> {
    const order = await Order.build({ ...createOrderDto }).save();
   
    await this.sendOrderToPayment({
      customerId: createOrderDto.customerId,
      amount: createOrderDto.amount,
      productId: createOrderDto.productId,
      orderId: order._id
    });
    
    return order;
  }

  async updateOrder(updateOrderDto: UpdateOrderDto): Promise<any> {
    const order = this.getOrder(updateOrderDto.orderId);
    await Order.updateOne({ _id: updateOrderDto.orderId }, updateOrderDto);
    return order;
  }

  async deleteOrder(orderId): Promise<any> {
    const order = this.getOrder(orderId);
    await Order.remove(order);
    return order;
  }

  async sendOrderToPayment(createTransactionDto: CreateTransactionDto): Promise<any> {
    //call the payment service to initiate payment
    const { PAYMENT_SERVICE } = process.env;
    console.log(PAYMENT_SERVICE);
    const paymentServiceURL = `${PAYMENT_SERVICE}/transaction`;
   
    const initiateTransaction = await axios({
      method: 'post',
      url: paymentServiceURL,
      data: createTransactionDto,
    });

    return initiateTransaction.data;
  }
}

export const orderRepository = new OrderRepository();
