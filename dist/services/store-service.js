"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const store_repository_1 = __importDefault(require("../database/repository/store-repository"));
const app_errors_1 = require("../utils/app-errors");
class StoreService {
    repository;
    constructor() {
        this.repository = new store_repository_1.default();
    }
    async CreateStore(values) {
        try {
            const newStore = await this.repository.CreateStore(values);
            return newStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error creating store', err);
        }
    }
    async GetStoreById(id) {
        try {
            const existingStore = await this.repository.findStoreById(id);
            return existingStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Store not found', err);
        }
    }
    async DeleteStoreById(id) {
        try {
            const deletedStore = await this.repository.deleteStore(id);
            return deletedStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error deleting store', err);
        }
    }
    async AddDeviceToStore(deviceId, storeId) {
        try {
            const updatedStore = await this.repository.addDeviceToStore(deviceId, storeId);
            return updatedStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error adding device to Store', err);
        }
    }
    async UpdateStoreById(id, values) {
        try {
            const updatedStore = await this.repository.updateStore(id, values);
            return updatedStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error updating store', err);
        }
    }
}
exports.default = StoreService;
//# sourceMappingURL=store-service.js.map