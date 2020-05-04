const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log('[server]: AWS express app is running on port 3000.');
});

app.get('/api/1', (req, res) => {
  const respObj = {
    'data': 1
  };

  res.json(respObj);
});

app.get('/api/2', (req, res) => {
  const respObj = {
    'data': 2
  };

  res.json(respObj);
});
