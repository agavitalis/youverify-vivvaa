import { Router } from 'express';
import { validateRequest } from '../middlewares/index';
import * as v from '../validators/index';
import * as c from "../controllers/index";

const transactionRoute = () => {
  const router = Router();

  router.post('/transaction', v.createTransactionValidator, validateRequest, c.createTransaction);
  router.get('/transaction', c.getTransactions);
  router.get('/transaction/:transactionId', v.getTransactionValidator, validateRequest, c.getTransaction);
  router.patch('/transaction', v.updateTransactionValidator, validateRequest, c.updateTransaction);
  router.delete('/transaction/:transactionId', v.deleteTransactionValidator, validateRequest, c.deleteTransaction);

  return router;
};

export { transactionRoute };
