import {trackCustomerEvents} from './customer.publisher'

export async function publishEvents() {
    await trackCustomerEvents()
}