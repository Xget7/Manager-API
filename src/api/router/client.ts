import  express  from "express";
import {GetAllClients} from '../controllers/client';

export default (router: express.Router) => {
     router.get('/clients', GetAllClients);
};