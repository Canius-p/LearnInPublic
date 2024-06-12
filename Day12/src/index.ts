import { graphqlHTTP } from 'express-graphql';
import { PORT } from './secrets';
import express, { Request, Response } from 'express';
import schema from './Schema/schema';

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
