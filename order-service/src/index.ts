import { app } from "./app";
const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '5003');

app.listen(PORT, async () => {
  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});