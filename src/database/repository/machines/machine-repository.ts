import mongoose from 'mongoose';
import MachineSchema from '../../models/machines/machine';
import machineSurveySchema from '../../models/machines/machineSurvey';

export const MachineModel = mongoose.model('Machine', MachineSchema);
export const MachineSurveyModel = mongoose.model('MachineSurvey', machineSurveySchema)


class MachineRepository {

     
     async CreateMachine(values: Record<string, any>) {
          try {
               const Machine = MachineModel.create(values).then((Machine) => Machine.toObject());


               return Machine
          } catch (err) {
               console.log("Error creating Device:", err);
          }
     }

     async FindMachineById(id: string) {
          return MachineModel.findById(id);
     }

     async changeMachineState(id: string, newState: string) {
        try {
          const updatedMachine = await MachineModel.findByIdAndUpdate(
            id,
            { $set: { 'reception.machineStatus': newState } },
            { new: true } 
          );
    
          return updatedMachine ? updatedMachine.toObject() : null;
        } catch (err) {
          console.error("Error changing machine state:", err);
          throw err;
        }
      }
     
     async GetMachinesByClientId(clientId: string) {
          return MachineModel.find({ uid: clientId });
     }
     
     async DeleteMachine(id : String){
        try{
            MachineModel.findByIdAndDelete(id);
        }catch(err){
            console.log("Error deleting Machine:", err);
        }
     }

     async UpdateMachine(id: String , values : Record<string,any>){
        try{
            return MachineModel.findByIdAndUpdate(id, values);
        }catch(err){
            console.log("Error updating Machine:", err);
        }
     }


}

export default MachineRepository