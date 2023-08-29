import  express  from "express";
import { CreateStore,GetStore , UpdateStore} from '../controllers/store';

export default (router: express.Router) => {
     router.post('/store', CreateStore);
     router.get('/store/:id', GetStore);
     router.put('/store/:id', UpdateStore); // Add this line for the update route
};