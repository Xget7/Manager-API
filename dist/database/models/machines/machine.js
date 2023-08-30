"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const reception_1 = __importDefault(require("./../machines/reception"));
const machineSurvey_1 = __importDefault(require("../machines/machineSurvey"));
const MachineSchema = new mongoose_1.default.Schema({
    uid: { type: String, required: true },
    clientId: { type: String, required: true },
    reception: { type: reception_1.default, required: true },
    machineSurvey: { type: machineSurvey_1.default }, // Make sure machineSurveySchema is defined
}, {
    timestamps: true
});
exports.default = MachineSchema;
//# sourceMappingURL=machine.js.map