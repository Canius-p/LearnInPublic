import express from 'express';
import { query, validationResult, body } from 'express-validator';

const app = express();

const PORT = process.env.PORT || 3000;

const loggingMiddleware = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

const resolveIndexById = (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return res.sendStatus(400);
  const findUserIndex = mockData.findIndex(user => user.id === parsedId);
  if (findUserIndex === -1) return res.sendStatus(404);
  req.findIndex = findUserIndex;
  next();
};
const mockData = [
  {
    id: 1,
    name: 'John',
    age: 30,
    city: 'New York',
  },
  {
    id: 2,
    name: 'Jane',
    age: 25,
    city: 'San Francisco',
  },
  {
    id: 3,
    name: 'Bob',
    age: 40,
    city: 'Los Angeles',
  },
];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(loggingMiddleware);

app.get(
  '/api/users',
  query('filter').isString().notEmpty().isLength({ min: 1, max: 3 }),
  (req, res) => {
    const {
      query: { filter, value },
    } = req;
    if (filter && value)
      return res.send(mockData.filter(user => user[filter].includes(value)));
    return res.send(mockData);
  }
);

app.get('/api/users/:id', resolveIndexById, (req, res) => {
  const { findIndex } = req;
  return res.status(200).json({
    message: 'Data fetched successfully',
    data: mockData[findIndex],
  });
});

app.post('/api/users', body(), (req, res) => {
  const { name, age, city } = req.body;
  const newUser = {
    id: mockData.length + 1,
    name,
    age,
    city,
  };
  mockData.push(newUser);
  return res.status(201).json({
    message: 'Data created successfully',
    data: newUser,
  });
});

app.put('/api/users/:id', resolveIndexById, (req, res) => {
  const { name, age, city } = req.body;
  const { findIndex } = req;
  mockData[findIndex] = {
    ...mockData[findIndex],
    name,
    age,
    city,
  };
  return res.status(200).json({
    message: 'Data updated successfully',
    data: mockData[findIndex],
  });
});

app.delete('/api/users/:id', resolveIndexById, (req, res) => {
  const { findIndex } = req;
  mockData.splice(findIndex, 1);
  return res.status(200).json({
    message: 'Data deleted successfully',
    data: mockData[findIndex],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});
