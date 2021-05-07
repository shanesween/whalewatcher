import express from 'express';
import loadData from '../db/loadData';
import router from './routes';

// rest of the code remains same
const createApp = () => {
  const app = express();
  const PORT = 8000;

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  });

  app.use('/api', router);
};

const bootApp = async () => {
  await loadData();
  createApp();
};
bootApp().then(() => { }, () => { });
