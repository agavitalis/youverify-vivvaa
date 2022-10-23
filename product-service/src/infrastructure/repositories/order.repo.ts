import axios from 'axios';
import { IOrderRepository } from '../interfaces/index';
import { CreateOrderDto } from '../models';
import dotenv from 'dotenv';
dotenv.config();

class OrderRepository implements IOrderRepository {
  async createOrder(createOrderDto: CreateOrderDto): Promise<any> {
    //call the order service to create an order
    const { ORDER_SERVICE } = process.env;
    console.log(ORDER_SERVICE);
    const orderServiceURL = `${ORDER_SERVICE}/order`;
    const createOrder = await axios({
      method: 'post',
      url: orderServiceURL,
      data: createOrderDto,
    });

    return createOrder.data;
  }
}

export const orderRepository = new OrderRepository();
