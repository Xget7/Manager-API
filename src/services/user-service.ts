

import UserRepository from '../database/repository/user-repository';
import { APIError, BadRequestError } from '../utils/app-errors';

class UserService {
  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }


  async CreateUser(values: Record<string, any>) {
    try {
      const existingUser = await this.repository.Createuser(values);
      return existingUser;
    } catch (err) {
      throw new APIError('Data Not found', err);
    }
  }


  async FindUserById(id: string) {
    try {
      const existingUser = await this.repository.FindUserById(id);
      return existingUser;
    } catch (err) {
      throw new APIError('Data Not found', err);
    }
  }

  async DeleteUserById(id: string) {
    try {
      const existingUser = await this.repository.deleteUserById(id);
      return existingUser;
    } catch (err) {
      throw new APIError('Data Not found', err);
    }
  }

  async UpdateUserById(id: string,  values: Record<string, any> ) {
    try {
      const existingUser = await this.repository.updateUserById(id,values);
      return existingUser;
    } catch (err) {
      throw new APIError('Data Not found', err);
    }
  }

  async AddStoreToUser(userId: string, storeId: string) {
    try {
      const result = await this.repository.addStoreToUser(userId,storeId);
      return result
    } catch (err) {
      console.log("error adding store to user");
    }
}


  async GetUserByEmail(email: string) {
    try {
      const existingUser = await this.repository.getUserByEmail(email);
      return existingUser;
    } catch (err) {
      throw new APIError('Data Not found', err);
    }
  }

}

export default UserService;
