const mongoose = require('mongoose');
import { publishEvents } from '../events/publishers/index';
import dotenv from 'dotenv';

dotenv.config();

const { DBURI } = process.env;

const connectToDatabase = async () => {

  try {
    const options = {useNewUrlParser: true, useUnifiedTopology: true };
    mongoose.connect(DBURI, options);
    mongoose.connection.once('open', async function () {
      console.log('Database connection was successful');
      publishEvents();
    })
  } catch (error) {
    console.error(error)
  }
};

export { connectToDatabase };
