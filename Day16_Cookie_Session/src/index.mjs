import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());
import indexRoute from './routes/indexRoute.mjs';

const PORT = process.env.PORT || 3000;

//all routes
app.use(indexRoute);

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
