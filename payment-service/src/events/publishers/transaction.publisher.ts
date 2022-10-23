import { Transaction } from '../../infrastructure/models';
import { SendMessageViaRabbit } from './sender.rabbitmq'

const queue = {
    transactionCreated: "transactionCreated",
    transactionUpdated: "transactionUpdated",
    transactionDeleted: "transactionDeleted"
}

export function trackTransactionEvents() {

    Transaction.watch().
        on('change', async (data) => {

            let transactionId: any;
            let transaction: any;

            switch (data.operationType) {
                case "insert":
                    //@ts-ignore
                    transactionId = data.documentKey._id
                    transaction = await Transaction.findById(transactionId)
                    await SendMessageViaRabbit(JSON.stringify(transaction), queue.transactionCreated)
                    break;
                case "update":
                    //@ts-ignore
                    transactionId = data.documentKey._id
                    transaction = await Transaction.findById(transactionId)
                    await SendMessageViaRabbit(JSON.stringify(transaction), queue.transactionUpdated)
                    break;
                case "delete":
                    //@ts-ignore
                    transactionId = data.documentKey._id.toString()
                    await SendMessageViaRabbit(transactionId, queue.transactionDeleted)
                    break;
                default:
                // code block
            }

            //console.log(new Date(), data)
        });
}