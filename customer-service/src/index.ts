import { app } from "./app";
const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '5001');

app.listen(PORT, async () => {
  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});