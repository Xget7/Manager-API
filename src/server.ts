import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import { connectToDatabase } from './database/connection';
import router from './api/router/index';
import {config} from './config/index'
import AWS from 'aws-sdk';
import RulesService from './services/rules-service';


const app = express();
app.use(cors({
     credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

AWS.config.update({
  accessKeyId: config.AWS_ACCESS_KEY,
  secretAccessKey: config.AWS_PRIVATE_ACCESS_KEY,
  region: config.REGION,
  apiVersion: 'latest',
});


connectToDatabase()
  .then(() => {
    app.use('/', router());
    server.listen(config.PORT, () => {
      console.log('Server running on http://localhost:' + config.PORT);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });


