import * as u from './customer.listener'

export async function listenToEvents() {
    await u.customerEventListner();
}