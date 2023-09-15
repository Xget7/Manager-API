"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_repository_1 = __importDefault(require("../database/repository/clients/client-repository"));
const app_errors_1 = require("../utils/app-errors");
class ClientService {
    repository;
    constructor() {
        this.repository = new client_repository_1.default();
    }
    async CreateClient(values) {
        try {
            const existingUser = await this.repository.CreateClient(values);
            return existingUser;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error al intentar crear cliente.', err);
        }
    }
    async FindClientById(uid) {
        try {
            const existingClient = await this.repository.FindClientByUid(uid);
            console.log("Second step client:", existingClient);
            return existingClient;
        }
        catch (err) {
            return null;
        }
    }
    async AddSurveyToClient(surveyId, clientId) {
        try {
            const existingClient = await this.repository.AddSurveyId(surveyId, clientId);
            return existingClient;
        }
        catch (err) {
            throw new app_errors_1.APIError('Error al añadir planilla al cliente', err);
        }
    }
}
exports.default = ClientService;
//# sourceMappingURL=client-service.js.map