"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const machine_repository_1 = __importDefault(require("../database/repository/machines/machine-repository"));
const app_errors_1 = require("../utils/app-errors");
class MachinService {
    repository;
    constructor() {
        this.repository = new machine_repository_1.default();
    }
    async CreateMachine(values) {
        try {
            const newStore = await this.repository.CreateMachine(values);
            return newStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error creando planilla', err);
        }
    }
    async GetMachineById(id) {
        try {
            const existingStore = await this.repository.FindMachineById(id);
            return existingStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Planilla no encontrada.', err);
        }
    }
    async ChangeMachineState(id, newState) {
        try {
            const existingStore = await this.repository.changeMachineState(id, newState);
            return existingStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error intentando cambiar estado de la planilla', err);
        }
    }
    async GetMachinesByClientId(id) {
        try {
            const existingStore = await this.repository.GetMachinesByClientId(id);
            return existingStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Planillas/cliente no encontrado', err);
        }
    }
    async DeleteMachineById(id) {
        try {
            const deletedStore = await this.repository.DeleteMachine(id);
            return deletedStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error al intentar eliminar planilla', err);
        }
    }
    async UpdateMachineById(id, values) {
        try {
            const updatedStore = await this.repository.UpdateMachine(id, values);
            return updatedStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error al intentar actualizar planilla.', err);
        }
    }
}
exports.default = MachinService;
//# sourceMappingURL=machine-service.js.map