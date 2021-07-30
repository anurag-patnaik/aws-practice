// const express = require('express');
import express from 'express';

const app = express();
const router = express.Router();

router.get('/api/ping', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(ip);

  res.json({
    ip,
  });
});

app.use('/', router);
app.listen(3000, () => {
  console.log('[server]: AWS express app is running on port 3000.');
});

// app.get('/api/1', (req, res) => {
//   const respObj = {
//     'data': 1
//   };
//
//   res.json(respObj);
// });
//
// app.get('/api/2', (req, res) => {
//   const respObj = {
//     'data': 2
//   };
//
//   res.json(respObj);
// });
