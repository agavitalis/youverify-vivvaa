import { CreateOrderDto } from "../models";

export interface IOrderRepository {
    createOrder(createOrderDto: CreateOrderDto): Promise<any>;
}