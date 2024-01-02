import 'dotenv/config';
import express, { json } from 'express';
import { routes } from './routes';
import { setupMongo } from './database';

setupMongo().then(() => {
  const app = express();

  app.use(routes);

  app.use(json());

  app.listen(3033, () => {
    console.log(`Server is running 🚀 http://localhost:3033`);
  });
});
