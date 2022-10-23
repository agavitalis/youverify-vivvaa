var amqp = require('amqplib/callback_api');
import dotenv from 'dotenv';
import { Customer } from '../../infrastructure/models/index';
dotenv.config();

const rabbitmqUrl = process.env.RABBITMQ_URI;
const queue = {
  customerCreated: 'customerCreated',
};

export async function customerEventListner() {
  amqp.connect(rabbitmqUrl, function (err, connection) {
    if (err) {
      throw err;
    }
    connection.createChannel(function (error, channel) {
      if (error) {
        throw error;
      }

      channel.assertQueue(queue.customerCreated, {
        durable: true,
      });

      console.log(`---> Waiting for messages in ${queue.customerCreated} queue. To exit press CTRL+C`);
      channel.consume(
        queue.customerCreated,
        async function (msg) {
          console.log(`--->  Message received from ${queue.customerCreated} queue: Data processing started`);

          const customer = JSON.parse(msg.content);
          const existingCustomer = await Customer.findOne({ _id: customer._id });
          if (!existingCustomer) {
            await Customer.build({ ...customer }).save();
            console.log(`--->  New Customer processing done`);
          } else {
            console.log(`--->  Customer not received---> Not Processed`);
          }

          channel.ack(msg);
        },
        {
          noAck: false,
        },
      );

        /*
            Todo: Implement events for update and delete customer
        */
    });
  });
}
