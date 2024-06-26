"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const reception_1 = __importDefault(require("./../machines/reception"));
const machineSurvey_1 = __importDefault(require("../machines/machineSurvey"));
const SurveySchema = new mongoose_1.default.Schema({
    clientId: { type: String, required: true },
    reception: { type: reception_1.default, required: true },
    machineSurvey: { type: machineSurvey_1.default }, // Make sure machineSurveySchema is defined
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret.__v;
            delete ret._id;
            delete ret.createdAt;
            delete ret.updatedAt;
        }
    },
    timestamps: false
});
exports.default = SurveySchema;
//# sourceMappingURL=machine.js.map