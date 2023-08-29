"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = __importDefault(require("../database/repository/user-repository"));
const app_errors_1 = require("../utils/app-errors");
class UserService {
    repository;
    constructor() {
        this.repository = new user_repository_1.default();
    }
    async CreateUser(values) {
        try {
            const existingUser = await this.repository.Createuser(values);
            return existingUser;
        }
        catch (err) {
            throw new app_errors_1.APIError('Data Not found', err);
        }
    }
    async FindUserById(id) {
        try {
            const existingUser = await this.repository.FindUserById(id);
            return existingUser;
        }
        catch (err) {
            throw new app_errors_1.APIError('Data Not found', err);
        }
    }
    async DeleteUserById(id) {
        try {
            const existingUser = await this.repository.deleteUserById(id);
            return existingUser;
        }
        catch (err) {
            throw new app_errors_1.APIError('Data Not found', err);
        }
    }
    async UpdateUserById(id, values) {
        try {
            const existingUser = await this.repository.updateUserById(id, values);
            return existingUser;
        }
        catch (err) {
            throw new app_errors_1.APIError('Data Not found', err);
        }
    }
    async AddStoreToUser(userId, storeId) {
        try {
            const result = await this.repository.addStoreToUser(userId, storeId);
            return result;
        }
        catch (err) {
            console.log("error adding store to user");
        }
    }
    async GetUserByEmail(email) {
        try {
            const existingUser = await this.repository.getUserByEmail(email);
            return existingUser;
        }
        catch (err) {
            throw new app_errors_1.APIError('Data Not found', err);
        }
    }
}
exports.default = UserService;
//# sourceMappingURL=user-service.js.map