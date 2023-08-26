import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.json({ message: 'Working Fine!' });
});

server.post('/', (req, res) => {
  res.json({ message: 'Posting Works Fine too ;)' });
});

export { server };
