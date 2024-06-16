import { Router } from 'express';
import { mockUser } from '..';
const router = Router();

router.get('/api/users', (req, res) => {
  return res.status(200).json({
    message: 'Data fetched successfully',
    data: mockUser,
  });
});

export default router;
