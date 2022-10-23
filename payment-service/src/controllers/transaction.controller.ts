import { Request, Response } from 'express';
import { createResponse } from '../config/index';
import { transactionRepository } from '../infrastructure/repositories/index';

const createTransaction = async (req: Request, res: Response) => {
  const createTransaction = await transactionRepository.createTransaction(req.body);
  return createResponse(res, 201, 'Transaction created', createTransaction);
};

const getTransactions = async (req: Request, res: Response) => {
  const getTransactions = await transactionRepository.getTransactions();
  return createResponse(res, 200, 'Transactions', getTransactions);
};

const getTransaction = async (req: Request, res: Response) => {
  const getTransaction = await transactionRepository.getTransaction(req.params.transactionId);
  return createResponse(res, 200, 'Transaction', getTransaction);
};

const updateTransaction = async (req: Request, res: Response) => {
  const updateTransaction = await transactionRepository.updateTransaction(req.body);
  return createResponse(res, 200, 'Transaction updated', updateTransaction);
};

const deleteTransaction = async (req: Request, res: Response) => {
  const deleteTransaction = await transactionRepository.deleteTransaction(req.params.transactionId);
  return createResponse(res, 200, 'Transaction deleted', deleteTransaction);
};

export { createTransaction, getTransactions, getTransaction, updateTransaction, deleteTransaction };
