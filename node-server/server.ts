import express from 'express';
import dotenv from 'dotenv';
import morgran from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './src/routes/index';

dotenv.config();
const app = express();

async function connect() {
  if (process.env.MONGODB_CONNECTION_STRING) {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log('Successfully connected to database');
  } else {
    console.error(
      'Connection string not specified. Please specify connection string in an environment variable MONGODB_CONNECTION_STRING in .env file in root folder'
    );
  }
}
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgran('dev'));
app.use(cors());
app.use(router);

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
