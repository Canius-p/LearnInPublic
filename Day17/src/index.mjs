import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';

export const app = express();

import indexRoute from './routes/indexRoute.mjs';

app.use(express.json());
app.use(cookieParser('hello'));
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

const PORT = process.env.PORT || 3000;

//all routes
await app.use(indexRoute);

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
