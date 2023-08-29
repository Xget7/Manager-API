"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const store_1 = require("../../database/models/store");
exports.StoreModel = mongoose_1.default.model('Store', store_1.StoreSchema);
class StoreRepository {
    async CreateStore(values) {
        try {
            const store = exports.StoreModel.create(values).then((store) => store.toObject());
            return store;
        }
        catch (err) {
            console.log("Error creating store:", err);
        }
    }
    async findStoreById(id) {
        return exports.StoreModel.findById(id);
    }
    async addUserToStore(userId, storeId) {
        try {
            const store = await exports.StoreModel.findById(storeId);
            if (store) {
                store.users.push(userId);
                await store.save();
                return store.toObject();
            }
        }
        catch (err) {
            console.log("Error adding user to store :", err);
        }
    }
    async addDeviceToStore(deviceId, storeId) {
        try {
            const store = await exports.StoreModel.findById(storeId);
            if (store) {
                store.devices.push(deviceId);
                await store.save();
                return store.toObject();
            }
        }
        catch (err) {
            console.log("Error adding device to store:", err);
        }
    }
    async deleteStore(id) {
        return exports.StoreModel.findByIdAndDelete(id);
    }
    async updateStore(id, values) {
        return exports.StoreModel.findByIdAndUpdate(id, values);
    }
}
exports.default = StoreRepository;
//# sourceMappingURL=store-repository.js.map