const amqp = require('amqplib/callback_api');
import dotenv from "dotenv";
dotenv.config();

const rabbitmqUrl = process.env.RABBITMQ_URI;

export async function SendMessageViaRabbit(message: any, queue: any) {
    if(!rabbitmqUrl) return;
    amqp.connect(rabbitmqUrl, function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error, channel) {
            if (error) {
                throw error;
            }

            channel.assertQueue(queue, {
                durable: true
            });

            channel.sendToQueue(queue, Buffer.from(message), {
                persistent: true
            });

            console.log(`Message sent to ${queue} queue from transaction service`);
        });

        setTimeout(function () {
            connection.close();
        }, 1000);

    });
}

