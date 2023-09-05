"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = __importDefault(require("../database/repository/users/user-repository"));
const workshop_user_repository_1 = require("../database/repository/users/workshop-user-repository");
const app_errors_1 = require("../utils/app-errors");
class UserService {
    repository;
    workerRepo;
    constructor() {
        this.workerRepo = new workshop_user_repository_1.WorkshopUserRepository();
        this.repository = new user_repository_1.default();
    }
    async CreateUser(values) {
        try {
            const existingUser = await this.repository.Createuser(values);
            return existingUser;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error al intentar crear usuario.', err);
        }
    }
    async FindUserById(id) {
        try {
            const existingUser = await this.repository.FindUserById(id);
            return existingUser;
        }
        catch (err) {
            throw new app_errors_1.APIError('Usuario no encontrado', err);
        }
    }
    async DeleteUserById(id) {
        try {
            const existingUser = await this.repository.deleteUserById(id);
            return existingUser;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error al intentar eliminar el usuario.', err);
        }
    }
    async UpdateUserById(id, values) {
        try {
            const existingUser = await this.repository.updateUserById(id, values);
            return existingUser;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error al intentar actualizar los datos del usuario.', err);
        }
    }
    async AddSurveyToUser(userId, machineUid) {
        try {
            const result = await this.workerRepo.assingSurveyToWorker(machineUid, userId);
            return result;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error al asignar planilla.', err);
        }
    }
    async GetUserByEmail(email) {
        try {
            const existingUser = await this.repository.getUserByEmail(email);
            return existingUser;
        }
        catch (err) {
            throw new app_errors_1.APIError('Usuario no encontrado', err);
        }
    }
}
exports.default = UserService;
//# sourceMappingURL=user-service.js.map