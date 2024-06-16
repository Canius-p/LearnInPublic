import { Router } from 'express';

const router = Router();

router.get('/api/products', (req, res) => {
  res.send([{ id: 123, name: 'chicken breast', price: 12.99 }]);
});

export default router;
