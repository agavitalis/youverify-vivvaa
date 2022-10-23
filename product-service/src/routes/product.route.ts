import { Router } from 'express';
import { validateRequest } from '../middlewares/index';
import * as v from '../validators/index';
import * as c from "../controllers/index";

const productRoute = () => {
  const router = Router();

  router.post('/product', v.createProductValidator, validateRequest, c.createProduct);
  router.get('/product', c.getProducts);
  router.get('/product/:productId', v.getProductValidator, validateRequest, c.getProduct);
  router.patch('/product', v.updateProductValidator, validateRequest, c.updateProduct);
  router.delete('/product/:productId', v.deleteProductValidator, validateRequest, c.deleteProduct);

  return router;
};

export { productRoute };
