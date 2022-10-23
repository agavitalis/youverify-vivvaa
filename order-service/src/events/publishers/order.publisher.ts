import { Order } from 'src/infrastructure/models';
import { SendMessageViaRabbit } from './sender.rabbitmq'
const queue = {
    orderCreated: "orderCreated",
    orderUpdated: "orderUpdated",
    orderDeleted: "orderDeleted"
}

export function trackOrderEvents() {

    Order.watch().
        on('change', async (data) => {

            let orderId: any;
            let order: any;

            switch (data.operationType) {
                case "insert":
                    //@ts-ignore
                    orderId = data.documentKey._id
                    order = await Order.findById(orderId)
                    await SendMessageViaRabbit(JSON.stringify(order), queue.orderCreated)
                    break;
                case "update":
                    //@ts-ignore
                    orderId = data.documentKey._id
                    order = await Order.findById(orderId)
                    await SendMessageViaRabbit(JSON.stringify(order), queue.orderUpdated)
                    break;
                case "delete":
                    //@ts-ignore
                    orderId = data.documentKey._id.toString()
                    await SendMessageViaRabbit(orderId, queue.orderDeleted)
                    break;
                default:
                // code block
            }

            //console.log(new Date(), data)
        });
}