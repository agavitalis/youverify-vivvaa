import mongoose, { Date } from 'mongoose';
const Schema = mongoose.Schema;

interface CreateTransactionDto {
  customerId: String;
  productId: String;
  orderId: String;
  amount: Number;
  status?: String;
}

interface UpdateTransactionDto extends CreateTransactionDto {
  transactionId: String;
}

interface TransactionModel extends mongoose.Model<TransactionDoc> {
  build(attrs: CreateTransactionDto): TransactionDoc;
}

interface TransactionDoc extends mongoose.Document {
  customerId: String;
  productId: String;
  orderId: String;
  amount: Number;
  status: String;
  createdAt: Date;
  updatedAt: Date;
}

const TransactionSchema = new Schema({
  customerId: {
    type: String,
    default: null
  },
  productId: {
    type: String,
    default: null
  },
  orderId: {
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

TransactionSchema.statics.build = (attrs: CreateTransactionDto) => {
  return new Transaction(attrs)
}

const Transaction = mongoose.model<TransactionDoc, TransactionModel>("Transaction", TransactionSchema);
export { Transaction, TransactionDoc, CreateTransactionDto, UpdateTransactionDto };
