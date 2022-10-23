import { body, check } from 'express-validator';

export const createCustomerValidator = [
  body('firstName').isString().withMessage('firstName is required'),
  body('lastName').isString().withMessage('lastName is required'),
  body('phone').trim().isLength({ min: 14 }).withMessage('phone is required'),
  body('email').isEmail().trim().withMessage('email is required and must be valid'),
];

export const getCustomerValidator = [check('customerId').isMongoId().withMessage('CustomerId is required and must be valid')];

export const updateCustomerValidator = [body('customerId').isMongoId().withMessage('customerId is required and must be valid')];

export const deleteCustomerValidator = [check('customerId').isMongoId().withMessage('customerId is required and must be valid')];
