import { Request, Response } from 'express';
import { createResponse } from '../config/index';
import { productRepository } from '../infrastructure/repositories/index';

const createProduct = async (req: Request, res: Response) => {
  const createProduct = await productRepository.createProduct(req.body);
  return createResponse(res, 201, 'Product created', createProduct);
};

const getProducts = async (req: Request, res: Response) => {
  const getProducts = await productRepository.getProducts();
  return createResponse(res, 200, 'Products', getProducts);
};

const getProduct = async (req: Request, res: Response) => {
  const getProduct = await productRepository.getProduct(req.params.productId);
  return createResponse(res, 200, 'Product', getProduct);
};

const updateProduct = async (req: Request, res: Response) => {
  const updateProduct = await productRepository.updateProduct(req.body);
  return createResponse(res, 200, 'Product updated', updateProduct);
};

const deleteProduct = async (req: Request, res: Response) => {
  const deleteProduct = await productRepository.deleteProduct(req.params.productId);
  return createResponse(res, 200, 'Product deleted', deleteProduct);
};

export { createProduct, getProducts, getProduct, updateProduct, deleteProduct };
