import { Router } from 'express';
import userRoutes from './userRoute.mjs';
import productRoutes from './productRoute.mjs';

const router = Router();

router.get('/', (req, res) => {
  res.cookie('mycookie', 'nabin', { maxAge: 60000 });
  res.status(201).send({ msg: 'Hello' });
});

router.use(userRoutes);
router.use(productRoutes);

export default router;
