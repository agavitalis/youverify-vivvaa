import { Customer } from '../..//infrastructure/models';
import { SendMessageViaRabbit } from './sender.rabbitmq'
const queue = {
    customerCreated: "customerCreated",
    customerUpdated: "customerUpdated",
    customerDeleted: "customerDeleted"
}

export function trackCustomerEvents() {

    Customer.watch().
        on('change', async (data) => {

            let customerId: any;
            let customer: any;

            switch (data.operationType) {
                case "insert":
                    //@ts-ignore
                    customerId = data.documentKey._id
                    customer = await Customer.findById(customerId)
                    await SendMessageViaRabbit(JSON.stringify(customer), queue.customerCreated)
                    break;
                case "update":
                    //@ts-ignore
                    customerId = data.documentKey._id
                    customer = await Customer.findById(customerId)
                    await SendMessageViaRabbit(JSON.stringify(customer), queue.customerUpdated)
                    break;
                case "delete":
                    //@ts-ignore
                    customerId = data.documentKey._id.toString()
                    await SendMessageViaRabbit(customerId, queue.customerDeleted)
                    break;
                default:
                // code block
            }

            //console.log(new Date(), data)
        });
}