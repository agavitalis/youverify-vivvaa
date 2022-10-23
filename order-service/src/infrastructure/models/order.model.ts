import mongoose, { Date } from 'mongoose';
const Schema = mongoose.Schema;

interface CreateTransactionDto {
  customerId: String;
  productId: String;
  orderId: String;
  amount: Number;
  status?: String;
}

interface CreateOrderDto {
  customerId: String;
  customerName: String;
  productId: String;
  productName: String;
  instructions?: String;
  amount: Number;
}

interface UpdateOrderDto extends CreateOrderDto {
  orderId: String;
}

interface OrderModel extends mongoose.Model<OrderDoc> {
  build(attrs: CreateOrderDto): OrderDoc;
}

interface OrderDoc extends mongoose.Document {
  customerId: String;
  customerName: String;
  productId: String;
  productName: String;
  instructions: String;
  amount: Number;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema({
  customerId: {
    type: String,
    default: null
  },
  customerName: {
    type: String,
    default: null
  },
  productId: {
    type: String,
    default: null
  },
  productName: {
    type: String,
    default: null
  },
  instructions: {
    type: String,
    default: null
  },
  amount: {
    type: Number,
    default: null
  },
  status: {
    type: String,
    default: 'pending'
  }
}, {
  timestamps: true
});

OrderSchema.statics.build = (attrs: CreateOrderDto) => {
  return new Order(attrs)
}

const Order = mongoose.model<OrderDoc, OrderModel>("Order", OrderSchema);
export { Order, OrderDoc, CreateOrderDto, UpdateOrderDto, CreateTransactionDto };
