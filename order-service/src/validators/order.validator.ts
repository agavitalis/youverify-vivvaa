import { body, check } from 'express-validator';

export const createOrderValidator = [
  body('customerId').isMongoId().withMessage('customerId is required  and must be valid'),
  body('customerName').isString().withMessage('customerName is required'),
  body('productId').isMongoId().withMessage('productId is required and must be valid'),
  body('productName').isString().trim().withMessage('productName is required and must be valid'),
  body('instructions').optional().isString().trim().withMessage('instructions if provided must be valid'),
  body('amount').isNumeric().trim().withMessage('amount is required and must be valid'),
];


export const getOrderValidator = [check('orderId').isString().withMessage('OrderId is required')];

export const updateOrderValidator = [body('orderId').isString().withMessage('orderId is required')];

export const deleteOrderValidator = [check('orderId').isString().withMessage('orderId is required')];
