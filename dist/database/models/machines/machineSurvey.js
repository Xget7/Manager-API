"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const partSurvey_1 = __importDefault(require("./parts/partSurvey"));
var MachineType;
(function (MachineType) {
    MachineType["FillingMachine"] = "FillingMachine";
    MachineType["BagSealingMachine"] = "BagSealingMachine";
    MachineType["InductionSealingMachine"] = "InductionSealingMachine";
    MachineType["CappingMachine"] = "CappingMachine";
    MachineType["DosingMachine"] = "DosingMachine";
    MachineType["BagFormingMachine"] = "BagFormingMachine";
    MachineType["LabelingMachine"] = "LabelingMachine";
})(MachineType || (MachineType = {}));
const machineSurveySchema = new mongoose_1.default.Schema({
    model: { type: String, required: true },
    newMachine: { type: Boolean, required: true },
    repair: { type: Boolean, required: true },
    machineType: {
        type: String,
        enum: Object.values(MachineType),
        required: true,
    },
    machineStatus: { type: String, enum: ['Clean', 'Regular', 'Dirty'], required: true },
    startTime: { type: Date, required: true },
    machineParts: { type: [partSurvey_1.default] },
    generalObservation: { type: String },
    responsible: { type: String },
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