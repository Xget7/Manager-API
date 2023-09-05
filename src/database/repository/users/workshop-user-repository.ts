import UserRepository from "./user-repository"
import mongoose from 'mongoose';
import { UserSchema } from '../../models/user';


export const UserModel = mongoose.model('User', UserSchema);


export class WorkshopUserRepository extends UserRepository {

    async assingSurveyToWorker(machineUid: string, userId : String) {
        try {
            const user = await UserModel.findById(userId);
            if (user) {
                user.pendingSurveys.push(machineUid);
                await user.save();
                return true
            }
            } catch (err) {
                console.log("error adding store to user");
            }
        return false

    }
}