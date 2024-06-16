import express from 'express';

const app = express();

app.use(express.json());

export const mockUser = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 40 },
  { id: 4, name: 'Alice', age: 35 },
  { id: 5, name: 'Bob', age: 40 },
  { id: 6, name: 'Alice', age: 35 },
];

import userroute from './router/routerUser.js';

app.use(userroute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
