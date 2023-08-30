import UserRepository from "./user-repository"
import mongoose from 'mongoose';
import { UserSchema } from '../../models/user';


export const UserModel = mongoose.model('User', UserSchema);


export class WorkshopUserRepository extends UserRepository {

    async assingToMachineSurvey(machineUid: string, userId : String) {
      // Implement your workshop-specific logic here
    
    try {
        const user = await UserModel.findById(userId);

        if (user) {
            user.pendingMachines.push(machineUid);
            await user.save();
            return true
        }
        } catch (err) {
            console.log("error adding store to user");
        }
        return false

    }
}