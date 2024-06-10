import express, { Request, Response, Application } from 'express';
import { PORT } from './secrets';
import rootrouter from './routes/index.route';
import { PrismaClient } from '@prisma/client';
import { errorHandler } from './middleware/error';
import { signupSchema } from './schema/user.schema';

const app: Application = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api', rootrouter);
export const prisma = new PrismaClient({
  log: ['query'],
}).$extends({
  query: {
    user: {
      /**
       * Override the create method of the Prisma client for the user model.
       * This method is called when a new user is created.
       * It parses the data using the signupSchema and then delegates the creation to the query method.
       *
       * @param {object} args - The arguments passed to the create method.
       * @param {function} query - The query method of the Prisma client.
       * @returns {Promise} - A promise that resolves to the created user.
       */
      create({ args, query }) {
        // Parse the data using the signupSchema
        args.data = signupSchema.parse(args.data);
        // Delegate the creation to the query method
        return query(args);
      },
    },
  },
});
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Example app listening on port !http://127.0.0.1:${PORT}`);
});
