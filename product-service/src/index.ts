import { app } from "./app";
import {listenToEvents} from './events/listeners/index'
const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '5002');

app.listen(PORT, async () => {
  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
  listenToEvents();
});