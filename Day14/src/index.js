import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello World!' });
});

const Mocuser = [
  { id: 1, username: 'Mocha', name: 'mocha' },
  { id: 2, username: 'John', name: 'John' },
  { id: 3, username: 'Jane', name: 'Jane' },
  { id: 4, username: 'Bob', name: 'Bob' },
  { id: 5, username: 'Alice', name: 'Alice' },
];
app.get('/api/users', (req, res) => {
  const {
    query: { filter, value },
  } = req;
  if (!filter && !value) return res.send(Mocuser);

  if (filter && value) {
    return res.send(Mocuser.filter(user => user[filter].includes(value)));
  }
  return res.send(Mocuser);
});

app.get('/api/users/:id', (req, res) => {
  console.log(req.params.id);
  const parsedId = parseInt(req.params.id);
  console.log(parsedId);
  if (isNaN(parsedId)) {
    res.status(404).send({ message: 'User not found' });
    return;
  }
  const findUser = Mocuser.find(user => user.id === parsedId);
  if (!findUser) {
    res.status(404).send({ message: 'User not found' });
    return;
  }
  res.status(200).send(findUser);
});

//post request

app.post('/api/users', (req, res) => {
  const { body } = req;
  const newUser = { id: Mocuser[Mocuser.length - 1].id + 1, ...req.body };
  Mocuser.push(newUser);
  return res.status(201).send(newUser);
});

//put request
app.put('/api/users/:id', (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const parsedid = parseInt(id);

  if (isNaN(parsedid)) return res.sendStatus(404);

  const finduserIndex = Mocuser.findIndex(user => user.id === parsedid);
  if (finduserIndex === -1) return res.sendStatus(404);

  Mocuser[finduserIndex] = { id: parsedid, ...body };
  return res.sendStatus(200);
});

app.patch('/api/users/:id', (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const parsedid = parseInt(id);
  if (isNaN(parsedid)) return res.sendStatus(404);
  const finduserIndex = Mocuser.findIndex(user => user.id === parsedid);
  if (finduserIndex === -1) return res.sendStatus(404);
  Mocuser[finduserIndex] = { ...Mocuser[finduserIndex], ...body };
  return res.sendStatus(200);
});

//delete request

app.delete('/api/users/:id', (req, res) => {
  const {
    params: { id },
  } = req;
  const parsedid = parseInt(id);
  if (isNaN(parsedid)) return res.sendStatus(404);
  const finduserIndex = Mocuser.findIndex(user => user.id === parsedid);
  if (finduserIndex === -1) return res.sendStatus(404);
  Mocuser.splice(finduserIndex);
  return res.sendStatus(200);
});
app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});
