var amqp = require('amqplib/callback_api');
import dotenv from 'dotenv';
import { Transaction } from '../../infrastructure/models/index';
dotenv.config();

const rabbitmqUrl = process.env.RABBITMQ_URI;
const queue = {
  transactionCreated: 'transactionCreated',
};

export async function transactionEventListner() {
  amqp.connect(rabbitmqUrl, function (err, connection) {
    if (err) {
      throw err;
    }
    connection.createChannel(function (error, channel) {
      if (error) {
        throw error;
      }

      channel.assertQueue(queue.transactionCreated, {
        durable: true,
      });

      console.log(`---> Waiting for messages in ${queue.transactionCreated} queue. To exit press CTRL+C`);
      channel.consume(
        queue.transactionCreated,
        async function (msg) {
          console.log(`--->  Message received from ${queue.transactionCreated} queue: Data processing started`);

          const transaction = JSON.parse(msg.content);
          const existingTransaction = await Transaction.findOne({ _id: transaction._id });
          if (existingTransaction) {
            existingTransaction.status = "Paid"
            existingTransaction.save();
            console.log(`--->  Transaction processing done and marked as paid`);
          } else {
            console.log(`--->  Transaction not received---> Not Processed`);
          }

          channel.ack(msg);
        },
        {
          noAck: false,
        },
      );

        /*
            Todo: Implement events for update and delete transaction
        */
    });
  });
}
