import mongoose, { Date } from 'mongoose';
const Schema = mongoose.Schema;

interface CreateOrderDto {
  customerId: String;
  customerName: String;
  productId: String;
  productName: String;
  instructions?: String;
  amount: Number;
}

interface CreateProductDto {
  productName: String;
  productDescription: String;
  amount: Number;
  imageURI: String;
}

interface UpdateProductDto extends CreateProductDto {
  productId: String;
}

interface ProductModel extends mongoose.Model<ProductDoc> {
  build(attrs: CreateProductDto): ProductDoc;
}

interface ProductDoc extends mongoose.Document {
  productName: String;
  productDescription: String;
  amount: Number;
  imageURI: String;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      default: null,
    },
    amount: {
      type: Number,
      default: null,
    },
    imageURI: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

ProductSchema.statics.build = (attrs: CreateProductDto) => {
  return new Product(attrs);
};

const Product = mongoose.model<ProductDoc, ProductModel>('Product', ProductSchema);
export { Product, ProductDoc, CreateProductDto, UpdateProductDto, CreateOrderDto };
