"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineSurveyModel = exports.MachineModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const machine_1 = __importDefault(require("../../models/machines/machine"));
const machineSurvey_1 = __importDefault(require("../../models/machines/machineSurvey"));
exports.MachineModel = mongoose_1.default.model('Machine', machine_1.default);
exports.MachineSurveyModel = mongoose_1.default.model('MachineSurvey', machineSurvey_1.default);
class MachineRepository {
    async CreateMachine(values) {
        try {
            const Machine = exports.MachineModel.create(values).then((Machine) => Machine.toObject());
            return Machine;
        }
        catch (err) {
            console.log("Error creating Device:", err);
        }
    }
    async FindMachineById(id) {
        return exports.MachineModel.findById(id);
    }
    async changeMachineState(id, newState) {
        try {
            const updatedMachine = await exports.MachineModel.findByIdAndUpdate(id, { $set: { 'reception.machineStatus': newState } }, { new: true });
            return updatedMachine ? updatedMachine.toObject() : null;
        }
        catch (err) {
            console.error("Error changing machine state:", err);
            throw err;
        }
    }
    async GetMachinesByClientId(clientId) {
        return exports.MachineModel.find({ clientId: clientId });
    }
    async DeleteMachine(id) {
        try {
            exports.MachineModel.findByIdAndDelete(id);
        }
        catch (err) {
            console.log("Error deleting Machine:", err);
        }
    }
    async UpdateMachine(id, values) {
        try {
            return exports.MachineModel.findByIdAndUpdate(id, values);
        }
        catch (err) {
            console.log("Error updating Machine:", err);
        }
    }
}
exports.default = MachineRepository;
//# sourceMappingURL=machine-repository.js.map