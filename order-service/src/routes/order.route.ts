import { Router } from 'express';
import { validateRequest } from '../middlewares/index';
import * as v from '../validators/index';
import * as c from "../controllers/index";

const orderRoute = () => {
  const router = Router();

  router.post('/order', v.createOrderValidator, validateRequest, c.createOrder);
  router.get('/order', c.getOrders);
  router.get('/order/:orderId', v.getOrderValidator, validateRequest, c.getOrder);
  router.patch('/order', v.updateOrderValidator, validateRequest, c.updateOrder);
  router.delete('/order/:orderId', v.deleteOrderValidator, validateRequest, c.deleteOrder);

  return router;
};

export { orderRoute };
