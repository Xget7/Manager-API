import mongoose from 'mongoose';
import { UserSchema } from '../../database/models/user';
export const UserModel = mongoose.model('User', UserSchema);

class UserRepository {
     
     async Createuser(values: Record<string, any>) {
          try {
               const user = UserModel.create(values).then((user) => user.toObject());
               return user;
          } catch (err) {
               console.log("errorCreating User");
          }
     }

     async getUserByEmail(email: string) {
          return UserModel.findOne({ email });
     }

     async FindUserById(id: string) {
          return UserModel.findById(id);
     }

     async addStoreToUser(userId: string, storeId: string) {
          try {
            const user = await UserModel.findById(userId);
     
            if (user) {
               console.log("we have user");
              user.stores.push(storeId);
              await user.save();
              return true
            }
          } catch (err) {
            console.log("error adding store to user");
          }
          return false
     }


     async deleteUserById(id: string) {
           return UserModel.findByIdAndDelete(id);
     }
     
     async updateUserById(id: string, values: Record<string, any>) {
          return UserModel.findByIdAndUpdate(id, values);
     }
     
}

export default UserRepository;