import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { connectToDatabase } from "./config/database";
import { transactionRoute } from './routes/transaction.route';
import { errorHandler } from './middlewares/index';
import { NotFoundError } from './errors/not-found-error'

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', transactionRoute());

app.get('/', (req, res) => {
  return res.json({ message: 'Welcome to Yandit transaction API' });
});

app.all('*', () => {
  throw new NotFoundError('Route Not Found')
})

app.use(errorHandler)
connectToDatabase();

export { app };

