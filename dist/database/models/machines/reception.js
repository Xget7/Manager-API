"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// receptionSchema.js
const mongoose_1 = __importDefault(require("mongoose"));
const receptionSchema = new mongoose_1.default.Schema({
    machineName: { type: String, required: true },
    machineModel: { type: String, required: true },
    receptionTime: { type: String, required: true },
    isForSale: { type: Boolean, required: true },
    workType: { type: String, enum: ['Maintenance', 'Repair'], required: true },
    machineStatus: { type: String, enum: ['Clean', 'Regular', 'Dirty'], required: true },
    powerCable: { type: Boolean, required: true },
    acquisitionDate: { type: Date },
    lastRepairDate: { type: Date },
    serialNumber: { type: String },
    missingParts: { type: Boolean },
    missingPartsComment: { type: String },
    visibleDamage: { type: Boolean },
    visibleDamageComment: { type: String },
    observations: { type: Boolean },
    observationsComment: { type: String },
    approvedByClient: { type: Boolean },
    receptionDate: { type: Date },
    creationTime: { type: Date },
    approvalDateTime: { type: Date },
    status: {
        type: String,
        enum: ['BudgetSent', 'BudgetApproved', 'Working', 'Finished', 'Canceled', 'SurveyAproved'],
        required: true
    },
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
exports.default = receptionSchema;
//# sourceMappingURL=reception.js.map