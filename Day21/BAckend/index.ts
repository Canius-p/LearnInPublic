import express from 'express';
import { createServer } from 'http';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(import.meta.url);

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.get('/api/v1/hello', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 3000;

createServer(app).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
