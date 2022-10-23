import { Router } from 'express';
import { validateRequest } from '../middlewares/index';
import * as v from '../validators/index';
import * as c from "../controllers/index";

const orderRoute = () => {
  const router = Router();

  router.post('/product', v.createOrderValidator, validateRequest, c.createOrder);

  return router;
};

export { orderRoute };
