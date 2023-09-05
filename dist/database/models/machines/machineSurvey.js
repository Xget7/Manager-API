"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const partSurvey_1 = __importDefault(require("./parts/partSurvey"));
const machineSurveySchema = new mongoose_1.default.Schema({
    model: { type: String, required: true },
    newMachine: { type: Boolean, required: true },
    repair: { type: Boolean, required: true },
    machineStatus: { type: String, enum: ['Clean', 'Regular', 'Dirty'], required: true },
    startTime: { type: Date, required: true },
    electricalPart: { type: partSurvey_1.default },
    mechanicalPart: { type: partSurvey_1.default },
    structuralPart: { type: partSurvey_1.default },
    generalObservation: { type: String },
    endTime: { type: Date, required: true },
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.__v;
            delete ret.createdAt;
            delete ret.updatedAt;
        }
    },
    timestamps: false
});
exports.default = machineSurveySchema;
//# sourceMappingURL=machineSurvey.js.map