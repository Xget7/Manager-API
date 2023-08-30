import express  from 'express';
import authentication  from './auth';
import user  from './user';
import store  from './machines';


const router = express.Router();

export default (): express.Router => {
     authentication(router);
     user(router);
     store(router);
     return router;
}