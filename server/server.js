import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import {Configuration, OpenAIApi} from 'openai';

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.VITE_REACT_APP_RAPID_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from Mars 1',
  });
});

app.listen(3000, () =>
  console.log('Server is running on port http://localhost:3000')
);
