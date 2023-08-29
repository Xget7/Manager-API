"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.StoreSchema = new mongoose_1.default.Schema({
    // store_id: { type: String, required: true, default: () => uuidv4() },
    user_admin_id: { type: String, required: true },
    name: { type: String, required: true },
    devices: { type: [String] },
    users: { type: [String] }
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.__v;
        }
    }
});
//# sourceMappingURL=store.js.map