import express  from 'express';
import authentication  from './auth';
import user  from './user';
import survey  from './survey';
import client  from './client';

const router = express.Router();

export default (): express.Router => {
     authentication(router);
     user(router);
     survey(router);
     client(router);
     return router;
}