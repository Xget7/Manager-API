import DevicesRepository from '../database/repository/device-repository';
import { APIError, BadRequestError } from '../utils/app-errors';

class DeviceService {
     private repository: DevicesRepository;
   
     constructor() {
       this.repository = new DevicesRepository();
     }

     async CreateDevice(values: Record<string, any>) {
          try {
            const newStore = await this.repository.CreateDevice(values);
            return newStore;
          } catch (err) {
            throw new APIError('Error creating Device', err);
          }
     }
      

     
     async GetDeviceById(id: string) {
          try {
            const existingStore = await this.repository.FindDeviceById(id);
            return existingStore;
          } catch (err) {
            throw new APIError('Device not found', err);
          }
     }


     async GetDevicesByStoreId(id: string) {
          try {
               const existingStore = await this.repository.GetDevicesByStoreId(id);
               return existingStore;
          } catch (err) {
               throw new APIError('Device not found', err);
          }
     }
     
      
     async DeleteStoreById(id: string) {
          try {
               const deletedStore = await this.repository.DeleteDevice(id);
               return deletedStore;
          } catch (err) {
               throw new APIError('Error deleting device', err);
          }
     }
     
     async UpdateDeviceeById(id: string, values: Record<string, any>) {
          try {
               const updatedStore = await this.repository.UpdateDevice(id, values);
               return updatedStore;
          } catch (err) {
               throw new APIError('Error updating device', err);
          }
     }



}

export default DeviceService