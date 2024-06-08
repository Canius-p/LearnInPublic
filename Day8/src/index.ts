import express, { Request, Response, Application } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

const Port = 8848;
app.listen(8848, () => {
  console.log(`Example app listening on port !http://127.0.0.1:${Port}`);
});
