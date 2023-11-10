import express from 'npm:express@4';
import { duplicator } from './duplicator.ts';

const app = express();

app.get('/', (request, response) => {
  response.send('Hello from Express!');
});

app.post('/', async (request, response) => {
  await duplicator();
  response.send('Hello from Express!');
});

app.listen(8080);
