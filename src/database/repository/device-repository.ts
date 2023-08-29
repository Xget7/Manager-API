import mongoose from 'mongoose';
import { DeviceSchema } from '../../database/models/device';

export const DeviceModel = mongoose.model('Device', DeviceSchema);

class DeviceRepository {

     
     async CreateDevice(values: Record<string, any>) {
          try {
               const Device = DeviceModel.create(values).then((Device) => Device.toObject());
               return Device
          } catch (err) {
               console.log("Error creating Device:", err);
          }
     }


     async FindDeviceById(id: string) {
          return DeviceModel.findById(id);
     }

     
     async GetDevicesByStoreId(storeId: string) {
          return DeviceModel.find({ store_id: storeId });
     }
     
     async DeleteDevice(id : String){
          try{
              DeviceModel.findByIdAndDelete(id);
          }catch(err){
               console.log("Error deleting Device:", err);
          }
     }

     async UpdateDevice(id: String , values : Record<string,any>){
          try{
               return DeviceModel.findByIdAndUpdate(id, values);
          }catch(err){
                console.log("Error deleting Device:", err);
           }
     }


}

export default DeviceRepository