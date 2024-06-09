import express, { Request, Response, Application } from 'express';
import { PORT } from './secrets';
import rootrouter from './routes/index.route';
import { PrismaClient } from '@prisma/client';

const app: Application = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api', rootrouter);
export const prisma = new PrismaClient({
  log: ['query'],
});

app.listen(PORT, () => {
  console.log(`Example app listening on port !http://127.0.0.1:${PORT}`);
});
