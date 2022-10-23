import { NotFoundError } from '../../errors/index';
import { ICustomerRepository } from '../interfaces/index';
import { Customer, CreateCustomerDto, UpdateCustomerDto } from '../models';

class CustomerRepository implements ICustomerRepository {
  async getCustomers(): Promise<any> {
    const existingCustomers = await Customer.find({});
    return existingCustomers;
  }

  async getCustomer(userId): Promise<any> {
    const existingCustomer = await Customer.findOne({ _id: userId });
    if (!existingCustomer) {
      throw new NotFoundError('User with the given ID not found');
    }
    return existingCustomer;
  }

  async getCustomerByEmail(email) {
    const existingCustomer = await Customer.findOne({ email });
    return existingCustomer;
  }

  async createCustomer(createCustomerDto: CreateCustomerDto): Promise<any> {
    const customer = await Customer.build({ ...createCustomerDto }).save();
    return customer;
  }

  async updateCustomer(updateCustomerDto: UpdateCustomerDto): Promise<any> {
    const customer = this.getCustomer(updateCustomerDto.customerId);
    await Customer.updateOne({ _id: updateCustomerDto.customerId }, updateCustomerDto);
    return customer;
  }

  async deleteCustomer(customerId): Promise<any> {
    const customer = this.getCustomer(customerId);
    await Customer.remove(customer);
    return customerId;
  }
}

export const customerRepository = new CustomerRepository();
