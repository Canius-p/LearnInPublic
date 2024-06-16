import express from 'express';

const app = express();

app.use(express.json());

import indexRoute from './routes/indexRoute.mjs';

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(201).send({ msg: 'Hello' });
});

//all routes
app.use(indexRoute);

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
