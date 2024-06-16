import { Router } from 'express';
import { mockUser } from '..';
const router = Router();

router.get('/api/users', (req, res) => {
  return res.status(200).json({
    message: 'Data fetched successfully',
    data: mockUser,
  });
});

router.post('/api/users', (req, res) => {
  return res.status(201).json({
    message: 'Data created successfully',
    data: req.body,
  });
});

router.put('/api/users/:id', (req, res) => {
  return res.status(200).json({
    message: 'Data updated successfully',
    data: req.body,
  });
});
router.delete('/api/users/:id', (req, res) => {
  return res.status(200).json({
    message: 'Data deleted successfully',
    data: req.body,
  });
});

export default router;
