"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const device_1 = require("../../database/models/device");
exports.DeviceModel = mongoose_1.default.model('Device', device_1.DeviceSchema);
class DeviceRepository {
    async CreateDevice(values) {
        try {
            const Device = exports.DeviceModel.create(values).then((Device) => Device.toObject());
            return Device;
        }
        catch (err) {
            console.log("Error creating Device:", err);
        }
    }
    async FindDeviceById(id) {
        return exports.DeviceModel.findById(id);
    }
    async GetDevicesByStoreId(storeId) {
        return exports.DeviceModel.find({ store_id: storeId });
    }
    async DeleteDevice(id) {
        try {
            exports.DeviceModel.findByIdAndDelete(id);
        }
        catch (err) {
            console.log("Error deleting Device:", err);
        }
    }
    async UpdateDevice(id, values) {
        try {
            return exports.DeviceModel.findByIdAndUpdate(id, values);
        }
        catch (err) {
            console.log("Error deleting Device:", err);
        }
    }
}
exports.default = DeviceRepository;
//# sourceMappingURL=device-repository.js.map