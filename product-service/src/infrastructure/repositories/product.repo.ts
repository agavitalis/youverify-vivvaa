import { NotFoundError } from '../../errors/index';
import { IProductRepository } from '../interfaces/index';
import { Product, CreateProductDto, UpdateProductDto } from '../models';

class ProductRepository implements IProductRepository {
  async getProducts(): Promise<any> {
    const existingProducts = await Product.find({});
    return existingProducts;
  }

  async getProduct(userId): Promise<any> {
    const existingProduct = await Product.findOne({ _id: userId });
    if (!existingProduct) {
      throw new NotFoundError('User with the given ID not found');
    }
    return existingProduct;
  }

  async createProduct(createProductDto: CreateProductDto): Promise<any> {
    const product = Product.build({ ...createProductDto }).save();
    return product;
  }

  async updateProduct(updateProductDto: UpdateProductDto): Promise<any> {
    const product = this.getProduct(updateProductDto.productId);
    await Product.updateOne({ _id: updateProductDto.productId }, updateProductDto);
    return product;
  }

  async deleteProduct(productId): Promise<any> {
    const product = this.getProduct(productId);
    await Product.remove(product);
    return product;
  }
}

export const productRepository = new ProductRepository();
