import mongoose from 'mongoose';
import { StoreSchema } from '../../database/models/store';

export const StoreModel = mongoose.model('Store', StoreSchema);

class StoreRepository {


  async CreateStore(values: Record<string, any>) {
    try {
      const store = StoreModel.create(values).then((store) => store.toObject());
      return store
    } catch (err) {
      console.log("Error creating store:", err);
    }
  }

  async findStoreById(id: string) {
    return StoreModel.findById(id);
  }

  async addUserToStore(userId: string, storeId: string) {
    try {
      const store = await StoreModel.findById(storeId);
      if (store) {
          store.users.push(userId);
        await store.save();
        return store.toObject();
      }
    } catch (err) {
      console.log("Error adding user to store :", err);
    }
  }

  async addDeviceToStore(deviceId: string, storeId: string) {
     try {
       const store = await StoreModel.findById(storeId);
       if (store) {
           store.devices.push(deviceId);
         await store.save();
         return store.toObject();
       }
     } catch (err) {
       console.log("Error adding device to store:", err);
     }
   }

  async deleteStore(id: string) {
    return StoreModel.findByIdAndDelete(id);
  }

  async updateStore(id: string, values: Record<string, any>) {
    return StoreModel.findByIdAndUpdate(id, values);
  }
}

export default StoreRepository;
