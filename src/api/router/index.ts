import express  from 'express';
import authentication  from './auth';
import user  from './user';
import store  from './store';


const router = express.Router();

export default (): express.Router => {
     authentication(router);
     user(router);
     store(router);
     return router;
}