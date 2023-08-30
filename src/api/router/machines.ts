import  express  from "express";
import {GetMachine , UpdateMachine , CreateMachine , GetMachinesByClientId} from '../controllers/machines';

export default (router: express.Router) => {
     router.post('/machine', CreateMachine); //create machine
     router.get('/machine/:id', GetMachine); // get machine
     router.put('/machine/:id', UpdateMachine); // Add this line for the update route
     router.get('/machine/client/:id', GetMachinesByClientId); // Add this line for the update route

};