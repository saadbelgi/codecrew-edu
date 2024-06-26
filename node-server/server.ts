import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgran from 'morgan';
import cors, { CorsOptions } from 'cors';
import mongoose from 'mongoose';
import router from './src/routes/index';


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

const corsOptions: CorsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
  };
  
  app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgran('dev'));
app.use(router);



const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
