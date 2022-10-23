import { body, check } from 'express-validator';

export const createTransactionValidator = [
  body('customerId').isMongoId().withMessage('firstName is required and must be valid'),
  body('productId').isMongoId().withMessage('lastName is required and must be valid'),
  body('orderId').isMongoId().withMessage('phone is required and must be valid'),
  body('amount').isNumeric().trim().withMessage('amount is required and must be valid'),
];

export const getTransactionValidator = [check('transactionId').isString().withMessage('TransactionId is required')];

export const updateTransactionValidator = [body('transactionId').isString().withMessage('transactionId is required')];

export const deleteTransactionValidator = [check('transactionId').isString().withMessage('transactionId is required')];
