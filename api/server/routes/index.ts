import { Router } from 'express';

const router = Router();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

router.use('/sightings', require('./sightings'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  next(error);
});

export default router;
