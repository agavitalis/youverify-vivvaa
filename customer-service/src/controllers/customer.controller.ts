import { Request, Response } from 'express';
import { NotFoundError } from '../errors';
import { createResponse } from '../config/index';
import { customerRepository } from '../infrastructure/repositories/index';
import { Customer } from '../infrastructure/models';

const createCustomer = async (req: Request, res: Response) => {
  const createCustomer = await customerRepository.createCustomer(req.body);
  return createResponse(res, 201, 'Customer created', createCustomer);
};

const getCustomers = async (req: Request, res: Response) => {
  const getCustomers = await customerRepository.getCustomers();
  return createResponse(res, 200, 'Customers', getCustomers);
};

const getCustomer = async (req: Request, res: Response) => {
  const customer =  await customerRepository.getCustomer(req.params.customerId);
  return createResponse(res, 200, 'Customer', customer);
};

const updateCustomer = async (req: Request, res: Response) => {
  const updateCustomer = await customerRepository.updateCustomer(req.body);
  return createResponse(res, 200, 'Customer updated', updateCustomer);
};

const deleteCustomer = async (req: Request, res: Response) => {
  const deleteCustomer = await customerRepository.deleteCustomer(req.params.customerId);
  return createResponse(res, 200, 'Customer deleted', deleteCustomer);
};

export { createCustomer, getCustomers, getCustomer as d, updateCustomer, deleteCustomer };
