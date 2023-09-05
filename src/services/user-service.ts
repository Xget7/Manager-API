

import UserRepository from '../database/repository/users/user-repository';
import {WorkshopUserRepository} from '../database/repository/users/workshop-user-repository';
import { APIError, BadRequestError } from '../utils/app-errors';

class UserService {
  private repository: UserRepository;
  private workerRepo : WorkshopUserRepository;

  constructor() {
    this.workerRepo = new WorkshopUserRepository();
    this.repository = new UserRepository();
  }


  async CreateUser(values: Record<string, any>) {
    try {
      const existingUser = await this.repository.Createuser(values);
      return existingUser;
    } catch (err) {
      throw new APIError('Error al intentar crear usuario.', err);
    }
  }


  async FindUserById(id: string) {
    try {
      const existingUser = await this.repository.FindUserById(id);
      return existingUser;
    } catch (err) {
      throw new APIError('Usuario no encontrado', err);
    }
  }

  async DeleteUserById(id: string) {
    try {
      const existingUser = await this.repository.deleteUserById(id);
      return existingUser;
    } catch (err) {
      throw new APIError('Error al intentar eliminar el usuario.', err);
    }
  }

  async UpdateUserById(id: string,  values: Record<string, any> ) {
    try {
      const existingUser = await this.repository.updateUserById(id,values);
      return existingUser;
    } catch (err) {
      throw new APIError('Error al intentar actualizar los datos del usuario.', err);
    }
  }

  async AddSurveyToUser(userId: string, machineUid: string) {
    try {
      const result = await this.workerRepo.assingSurveyToWorker(machineUid,userId)
      return result
    } catch (err) {
      throw new APIError('Error al asignar planilla.', err);
    }
}


  async GetUserByEmail(email: string) {
    try {
      const existingUser = await this.repository.getUserByEmail(email);
      return existingUser;
    } catch (err) {
      throw new APIError('Usuario no encontrado', err);
    }
  }

}

export default UserService;
