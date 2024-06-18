import express, { Router } from 'express';
import session from 'express-session';

import {
  query,
  validationResult,
  body,
  matchedData,
  checkSchema,
} from 'express-validator';
import { mockUsers } from '../utils/constants.mjs';
import { createUserValidationSchema } from '../utils/validationSchemas.mjs';
import { resolveIndexByUserId } from '../utils/middleware.mjs';
const router = Router();
const app = express();

app.use(
  session({
    secret: 'new_Secret',
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60,
    },
  })
);

router.get(
  '/api/users',
  query('filter')
    .isString()
    .notEmpty()
    .withMessage('Must not be empty')
    .isLength({ min: 3, max: 10 })
    .withMessage('Must be at least 3-10 characters'),
  (req, res) => {
    const result = validationResult(req);
    console.log(result);
    console.log(req.session);
    console.log(req.session.id);
    const {
      query: { filter, value },
    } = req;
    if (filter && value)
      return res.send(mockUsers.filter(user => user[filter].includes(value)));
    return res.send(mockUsers);
  }
);

router.post(
  '/api/users',
  checkSchema(createUserValidationSchema),
  (req, res) => {
    const result = validationResult(req);
    console.log(result);

    if (!result.isEmpty())
      return res.status(400).send({ errors: result.array() });
    const data = matchedData(req);
    const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...data };
    mockUsers.push(newUser);
    return res.status(201).send(newUser);
  }
);

router.get('/api/users/:id', resolveIndexByUserId, (req, res) => {
  const { findUserIndex } = req;
  const findUser = mockUsers[findUserIndex];
  if (!findUser) return res.sendStatus(404);
  return res.send(findUser);
});

router.put('/api/users/:id', resolveIndexByUserId, (req, res) => {
  const { body, findUserIndex } = req;
  mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };
  return res.sendStatus(200);
});

router.patch('/api/users/:id', resolveIndexByUserId, (req, res) => {
  const { body, findUserIndex } = req;
  mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
  return res.sendStatus(200);
});

router.delete('/api/users/:id', resolveIndexByUserId, (req, res) => {
  const { findUserIndex } = req;
  mockUsers.splice(findUserIndex, 1);
  return res.sendStatus(200);
});

router.post('/api/auth', (req, res) => {
  const {
    body: { username, password },
  } = req;

  const findUser = mockUsers.find(user => user.username === username);
  if (!findUser) return res.sendStatus(401);
  if (findUser.password !== password)
    return res.status(401).send('Invalid password');

  req.session.user = findUser;
  return res.status(200).send('Authenticated');
});

router.get('/api/auth/status', (req, res) => {
  return req.session.user
    ? res.status(200).send(req.session.user)
    : res.status(401).send({ message: 'Not Authenticated' });
});
export default router;
