import { CreateCustomerDto, UpdateCustomerDto } from "../models";

export interface ICustomerRepository {
    getCustomers(): Promise<any>;
    getCustomer(userId: string): Promise<any>;
    createCustomer(createCustomerDto: CreateCustomerDto): Promise<any>;
    updateCustomer(updateCustomerDto: UpdateCustomerDto): Promise<any>;
    deleteCustomer(customerId: string): Promise<any>;
}