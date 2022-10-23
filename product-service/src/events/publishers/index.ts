import {trackProductEvents} from './product.publisher'

export async function publishEvents() {
    await trackProductEvents()
}