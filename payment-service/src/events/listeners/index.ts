import * as u from './transaction.listener'
import { connectToDatabase } from "../../config/database";

async function listenToEvents() {
    connectToDatabase();
    await u.transactionEventListner();
}

//call this event as a background service
listenToEvents();