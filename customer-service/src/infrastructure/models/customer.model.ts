import mongoose, { Date } from 'mongoose';
const Schema = mongoose.Schema;

interface CreateCustomerDto {
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
}

interface UpdateCustomerDto extends CreateCustomerDto {
  customerId: String;
}

interface CustomerModel extends mongoose.Model<CustomerDoc> {
  build(attrs: CreateCustomerDto): CustomerDoc;
}

interface CustomerDoc extends mongoose.Document {
  firstName: Date;
  lastName: Number;
  email: String;
  phone: Number;
  createdAt: Date;
  updatedAt: Date;
}

const CustomerSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
  }
}, {
  timestamps: true
});

CustomerSchema.statics.build = (attrs: CreateCustomerDto) => {
  return new Customer(attrs)
}

const Customer = mongoose.model<CustomerDoc, CustomerModel>("Customer", CustomerSchema);
export { Customer, CustomerDoc, CreateCustomerDto, UpdateCustomerDto };
