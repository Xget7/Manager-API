"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDeviceById = exports.deleteDeviceById = exports.createDevice = exports.getDeviceById = exports.getDevice = exports.DeviceModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DeviceSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    device_id: { type: String, required: true },
    store_id: { type: String, required: true },
    devices: { type: { String } },
});
exports.DeviceModel = mongoose_1.default.model('Device', DeviceSchema);
const getDevice = () => exports.DeviceModel.find();
exports.getDevice = getDevice;
const getDeviceById = (id) => exports.DeviceModel.findById(id);
exports.getDeviceById = getDeviceById;
const createDevice = (values) => exports.DeviceModel.create(values).then((Device) => Device.toObject());
exports.createDevice = createDevice;
const deleteDeviceById = (id) => exports.DeviceModel.findByIdAndDelete(id);
exports.deleteDeviceById = deleteDeviceById;
const updateDeviceById = (id, values) => exports.DeviceModel.findByIdAndUpdate(id, values);
exports.updateDeviceById = updateDeviceById;
//# sourceMappingURL=device.js.map