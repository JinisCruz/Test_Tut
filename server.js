// server.js
const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.send('<h1>Test server is running!</h1>');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));