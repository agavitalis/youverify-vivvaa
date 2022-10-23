import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import helmet from 'helmet';
import cors from 'cors';
import { connectToDatabase } from "./config/database";
import { errorHandler } from './middlewares/index';
import { NotFoundError } from './errors/not-found-error'
import { productRoute, orderRoute } from './routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', productRoute());
app.use('/api/v1/order', orderRoute());


app.get('/', (req, res) => {
  return res.json({ message: 'Welcome to YouVerify Product-Service API' });
});

app.all('*', () => {
  throw new NotFoundError('Route Not Found')
})

app.use(errorHandler)
connectToDatabase();

export { app };

