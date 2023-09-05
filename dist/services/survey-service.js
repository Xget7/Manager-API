"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const survey_repository_1 = __importDefault(require("../database/repository/surveys/survey-repository"));
const app_errors_1 = require("../utils/app-errors");
class MachineService {
    repository;
    constructor() {
        this.repository = new survey_repository_1.default();
    }
    async CreateSurvey(values) {
        try {
            const newStore = await this.repository.CreateSurvey(values);
            return newStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error creando planilla', err);
        }
    }
    async GetSurveyById(id) {
        try {
            const existingStore = await this.repository.FindSurveyById(id);
            return existingStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Planilla no encontrada.', err);
        }
    }
    async GetAllSurveys() {
        try {
            const surveys = await this.repository.GetAllSurveys();
            return surveys;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error al obtener planillas.', err);
        }
    }
    async ChangeSurveyState(id, newState) {
        try {
            const existingStore = await this.repository.changeSurveyState(id, newState);
            return existingStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error intentando cambiar estado de la planilla', err);
        }
    }
    async GetSurveysByClientId(id) {
        try {
            const existingStore = await this.repository.GetSurveysByClientId(id);
            return existingStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Planillas/cliente no encontrado', err);
        }
    }
    async DeleteSurveyById(id) {
        try {
            const deletedStore = await this.repository.DeleteSurvey(id);
            return deletedStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error al intentar eliminar planilla', err);
        }
    }
    async UpdateSurveyById(id, values) {
        try {
            const updatedStore = await this.repository.UpdateSurvey(id, values);
            return updatedStore;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error al intentar actualizar planilla.', err);
        }
    }
}
exports.default = MachineService;
//# sourceMappingURL=survey-service.js.map