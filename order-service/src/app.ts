import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import { connectToDatabase } from "./config/database";
import { orderRoute } from './routes/order.route';
import { errorHandler } from './middlewares/index';
import { NotFoundError } from './errors/not-found-error'

dotenv.config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', orderRoute());

app.get('/', (req, res) => {
  return res.json({ message: 'Welcome to YouVerify Order-Service API' });
});

app.all('*', () => {
  throw new NotFoundError('Route Not Found')
})

app.use(errorHandler)
connectToDatabase();

export { app };

