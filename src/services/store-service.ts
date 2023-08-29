import StoreRepository from '../database/repository/store-repository';
import { APIError, BadRequestError } from '../utils/app-errors';

class StoreService {
     private repository: StoreRepository;
   
     constructor() {
       this.repository = new StoreRepository();
     }
   
     async CreateStore(values: Record<string, any>) {
       try {
         const newStore = await this.repository.CreateStore(values);
         return newStore;
       } catch (err) {
         throw new APIError('Error creating store', err);
       }
     }
   
     async GetStoreById(id: string) {
       try {
         const existingStore = await this.repository.findStoreById(id);
         return existingStore;
       } catch (err) {
         throw new APIError('Store not found', err);
       }
     }
   
     async DeleteStoreById(id: string) {
       try {
         const deletedStore = await this.repository.deleteStore(id);
         return deletedStore;
       } catch (err) {
         throw new APIError('Error deleting store', err);
       }
     }

     async AddDeviceToStore(deviceId: string, storeId: string) {
      try {
        const updatedStore = await this.repository.addDeviceToStore(deviceId,storeId);
        return updatedStore;
      } catch (err) {
        throw new APIError('Error adding device to Store', err);
      }
    }
   
     async UpdateStoreById(id: string, values: Record<string, any>) {
       try {
         const updatedStore = await this.repository.updateStore(id, values);
         return updatedStore;
       } catch (err) {
         throw new APIError('Error updating store', err);
       }
     }
   
   }
   
   export default StoreService;
   