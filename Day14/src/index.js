import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello World!' });
});

const Mocuser = [
  { id: 1, name: 'John Doe' },
  { id: 2, username: 'Jd', name: 'Jane Doe' },
  { id: 3, username: 'Bs', name: 'Bob Smith' },
  { id: 4, username: 'Aj', name: 'Alice Johnson' },
  { id: 5, username: 'Bj', name: 'Bob Johnson' },
  { id: 6, username: 'Ab', name: 'Alice Smith' },
];
app.get('/api/users', (req, res) => {
  res.status(200).send(Mocuser);
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
app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});
