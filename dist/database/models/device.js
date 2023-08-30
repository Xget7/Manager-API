"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.DeviceSchema = new mongoose_1.default.Schema({
    device_id: { type: String, required: true },
    store_id: { type: String, required: true },
    devices: { type: { String } },
    name: { type: String },
    type: { type: String },
});
//# sourceMappingURL=device.js.map