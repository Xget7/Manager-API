"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const device_repository_1 = __importDefault(require("../database/repository/device-repository"));
const app_errors_1 = require("../utils/app-errors");
class DeviceService {
    repository;
    constructor() {
        this.repository = new device_repository_1.default();
    }
    async CreateDevice(values) {
        try {
            const newStore = await this.repository.CreateDevice(values);
            return newStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error creating Device', err);
        }
    }
    async GetDeviceById(id) {
        try {
            const existingStore = await this.repository.FindDeviceById(id);
            return existingStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Device not found', err);
        }
    }
    async GetDevicesByStoreId(id) {
        try {
            const existingStore = await this.repository.GetDevicesByStoreId(id);
            return existingStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Device not found', err);
        }
    }
    async DeleteStoreById(id) {
        try {
            const deletedStore = await this.repository.DeleteDevice(id);
            return deletedStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error deleting device', err);
        }
    }
    async UpdateDeviceeById(id, values) {
        try {
            const updatedStore = await this.repository.UpdateDevice(id, values);
            return updatedStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error updating device', err);
        }
    }
}
exports.default = DeviceService;
//# sourceMappingURL=devices-service.js.map