import  express  from "express";
import {GetUser, DeleteUser, UpdateUser} from '../controllers/user';

export default (router: express.Router) => {
     router.get('/user/:id', GetUser);
     router.put('/user/:id', UpdateUser);
     router.delete('/user/:id', DeleteUser);
};