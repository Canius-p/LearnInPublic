import express, { Request, Response, Application } from 'express';
import { PORT } from './secrets';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port !http://127.0.0.1:${PORT}`);
});
