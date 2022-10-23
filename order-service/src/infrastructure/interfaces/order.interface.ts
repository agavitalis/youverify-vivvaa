import { CreateOrderDto, UpdateOrderDto } from "../models";

export interface IOrderRepository {
    getOrders(): Promise<any>;
    getOrder(userId: string): Promise<any>;
    createOrder(createOrderDto: CreateOrderDto): Promise<any>;
    updateOrder(updateOrderDto: UpdateOrderDto): Promise<any>;
    deleteOrder(orderId: string): Promise<any>;
}