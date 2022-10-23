import {trackOrderEvents} from './order.publisher'

export async function publishEvents() {
    await trackOrderEvents()
}