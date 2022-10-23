import { body, check } from 'express-validator';

export const createProductValidator = [
  body('productName').isString().withMessage('productName is required'),
  body('productDescription').isString().withMessage('productDescription is required'),
  body('amount').isNumeric().withMessage('amount is required'),
  body('imageURI').isURL().withMessage('imageURI is required and must be valid'),
];

export const getProductValidator = [check('productId').isMongoId().withMessage('ProductId is required')];

export const updateProductValidator = [body('productId').isMongoId().withMessage('productId is required')];

export const deleteProductValidator = [check('productId').isMongoId().withMessage('productId is required')];
