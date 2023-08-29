import  express  from "express";
import { SignUp,SingIn } from '../controllers/auth';

export default (router: express.Router) => {
     router.post('/auth/register', SignUp);
     router.post('/auth/login', SingIn)
};