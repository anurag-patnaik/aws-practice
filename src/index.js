import express from 'express';
import {DbService} from "./db-service/dbService.js";

const app = express();
const router = express.Router();

const dbService = new DbService();

router.get('/api/ping', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(ip);

  res.json({
    ip,
  });
});

router.get('/api/greetings/:id', async (req, res) => {
  const id = req.params.id;

  let greeting;
  if (!id) {
    greeting = 'Invalid country id. '
  } else {
    greeting = await dbService.getCountry(id);
  }

  res.json({
    greeting
  });
});

app.use('/', router);
app.listen(3000, () => {
  console.log('[server]: AWS express app is running on port 3000.');
});

