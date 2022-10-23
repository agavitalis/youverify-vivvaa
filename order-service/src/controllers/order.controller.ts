import { Request, Response } from 'express';
import { createResponse } from '../config/index';
import { orderRepository } from '../infrastructure/repositories/index';

const createOrder = async (req: Request, res: Response) => {
  const createOrder = await orderRepository.createOrder(req.body);
  return createResponse(res, 201, 'Order created', createOrder);
};

const getOrders = async (req: Request, res: Response) => {
  const getOrders = await orderRepository.getOrders();
  return createResponse(res, 200, 'Orders', getOrders);
};

const getOrder = async (req: Request, res: Response) => {
  const getOrder = await orderRepository.getOrder(req.params.orderId);
  return createResponse(res, 200, 'Order', getOrder);
};

const updateOrder = async (req: Request, res: Response) => {
  const updateOrder = await orderRepository.updateOrder(req.body);
  return createResponse(res, 200, 'Order updated', updateOrder);
};

const deleteOrder = async (req: Request, res: Response) => {
  const deleteOrder = await orderRepository.deleteOrder(req.params.orderId);
  return createResponse(res, 200, 'Order deleted', deleteOrder);
};

export { createOrder, getOrders, getOrder, updateOrder, deleteOrder };
