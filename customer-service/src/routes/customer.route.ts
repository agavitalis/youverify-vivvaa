import { Router } from 'express';
import { validateRequest } from '../middlewares/index';
import * as v from '../validators/index';
import * as c from "../controllers/index";


  const router = Router();

  router.post('/customer', v.createCustomerValidator, validateRequest, c.createCustomer);
  router.get('/customer', c.getCustomers);
  router.get('/customer/:customerId', v.getCustomerValidator, validateRequest, c.d);
  router.patch('/customer', v.updateCustomerValidator, validateRequest, c.updateCustomer);
  router.delete('customer/:customerId', v.deleteCustomerValidator, validateRequest, c.deleteCustomer);

export {router as customerRoute };
