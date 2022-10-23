import { Customer } from '../infrastructure/models';

export async function seedData() {
  let firstName = 'Vitalis';
  let lastName = 'Ogbonna';
  let phone = '+2348163922749';
  let email = `agavitalisogbonna@gmail.com`;

  const existingCustomer = await Customer.findOne({ email });
  if (!existingCustomer) {
    await Customer.build({ firstName, lastName, phone, email }).save();
  }
}
