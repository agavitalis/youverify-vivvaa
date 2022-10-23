import {trackTransactionEvents} from './transaction.publisher'

export async function publishEvents() {
    await trackTransactionEvents()
}