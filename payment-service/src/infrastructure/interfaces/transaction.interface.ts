import { CreateTransactionDto, UpdateTransactionDto } from "../models";

export interface ITransactionRepository {
    getTransactions(): Promise<any>;
    getTransaction(userId: string): Promise<any>;
    createTransaction(createTransactionDto: CreateTransactionDto): Promise<any>;
    updateTransaction(updateTransactionDto: UpdateTransactionDto): Promise<any>;
    deleteTransaction(transactionId: string): Promise<any>;
}