import MachineRepository from '../database/repository/machines/machine-repository';
import { APIError, BadRequestError } from '../utils/app-errors';

class MachinService {
     private repository: MachineRepository;
   
     constructor() {
       this.repository = new MachineRepository();
     }

     async CreateMachine(values: Record<string, any>) {
          try {
            const newStore = await this.repository.CreateMachine(values);
            return newStore;
          } catch (err) {
            throw new APIError('Error creando planilla', err);
          }
     }
      
     async GetMachineById(id: string) {
          try {
            const existingStore = await this.repository.FindMachineById(id);
            return existingStore;
          } catch (err) {
            throw new APIError('Planilla no encontrada.', err);
          }
     }

     async ChangeMachineState(id: string , newState : string){
          try {
               const existingStore = await this.repository.changeMachineState(id, newState);
               return existingStore;
          } catch (err) {
               throw new APIError('Error intentando cambiar estado de la planilla', err);
          }
     }

     async GetMachinesByClientId(id: string) {
          try {
               const existingStore = await this.repository.GetMachinesByClientId(id);
               return existingStore;
          } catch (err) {
               throw new APIError('Planillas/cliente no encontrado', err);
          }
     }
     
      
     async DeleteMachineById(id: string) {
          try {
               const deletedStore = await this.repository.DeleteMachine(id);
               return deletedStore;
          } catch (err) {
               throw new APIError('Error al intentar eliminar planilla', err);
          }
     }
     
     async UpdateMachineById(id: string, values: Record<string, any>) {
          try {
               const updatedStore = await this.repository.UpdateMachine(id, values);
               return updatedStore;
          } catch (err) {
               throw new APIError('Error al intentar actualizar planilla.', err);
          }
     }



}

export default MachinService