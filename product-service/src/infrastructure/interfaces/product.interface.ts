import { CreateProductDto, UpdateProductDto } from "../models";

export interface IProductRepository {
    getProducts(): Promise<any>;
    getProduct(userId: string): Promise<any>;
    createProduct(createProductDto: CreateProductDto): Promise<any>;
    updateProduct(updateProductDto: UpdateProductDto): Promise<any>;
    deleteProduct(productId: string): Promise<any>;
}