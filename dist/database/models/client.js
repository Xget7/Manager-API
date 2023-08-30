"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ClientSchema = new mongoose_1.default.Schema({
    uid: { type: String, required: true },
    machines: { type: [String] },
}, { timestamps: true });
//# sourceMappingURL=client.js.map