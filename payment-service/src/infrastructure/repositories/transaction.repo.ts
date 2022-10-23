import axios from 'axios';
import { NotFoundError } from '../../errors';
import { ITransactionRepository } from '../interfaces/index';
import { Transaction, CreateTransactionDto, UpdateTransactionDto } from '../models';

class TransactionRepository implements ITransactionRepository {
  async getTransactions(): Promise<any> {
    const existingTransactions = await Transaction.find({});
    return existingTransactions;
  }

  async getTransaction(userId): Promise<any> {
    const existingTransaction = await Transaction.findOne({ _id: userId });
    if (!existingTransaction) {
      throw new NotFoundError('User with the given ID not found');
    }
    return existingTransaction;
  }

  async createTransaction(createTransactionDto: CreateTransactionDto): Promise<any> {
    const transaction = await Transaction.build({ ...createTransactionDto }).save();
    return transaction;
  }

  async updateTransaction(updateTransactionDto: UpdateTransactionDto): Promise<any> {
    const transaction = this.getTransaction(updateTransactionDto.transactionId);
    await Transaction.updateOne({ _id: updateTransactionDto.transactionId }, updateTransactionDto);
    return transaction;
  }

  async deleteTransaction(transactionId): Promise<any> {
    const transaction = this.getTransaction(transactionId);
    await Transaction.remove(transaction);
    return transactionId;
  }
}

export const transactionRepository = new TransactionRepository();
