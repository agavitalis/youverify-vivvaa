import { Request, Response } from 'express';
import { createResponse } from '../config/index';
import { orderRepository } from '../infrastructure/repositories/index';

const createOrder = async (req: Request, res: Response) => {
  const createOrder = await orderRepository.createOrder(req.body);
  return createResponse(res, 201, 'Order created', createOrder);
};

export { createOrder };