"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientModel = void 0;
const client_1 = require("../../../database/models/client");
const mongoose_1 = __importDefault(require("mongoose"));
exports.clientModel = mongoose_1.default.model('Client', client_1.ClientSchema);
class ClientRepository {
    async CreateClient(values) {
        try {
            const client = exports.clientModel.create(values).then((Client) => Client.toObject());
            console.log("Cliente creado", client);
            return client;
        }
        catch (err) {
            console.log("Error creating Device:", err);
        }
    }
    async FindClientByUid(uid) {
        const client = await exports.clientModel.findOne({ uid: uid });
        if (!client) {
            return null;
        }
        return client;
    }
    async AddSurveyId(surveyId, clientId) {
        try {
            const client = await exports.clientModel.findOne({ uid: clientId });
            if (!client) {
                console.log("Cliente no encontrado.");
                throw Error("Cliente no encontrado");
            }
            // Agregar la nueva ID de encuesta al array de encuestas del cliente
            client.machines.push(surveyId);
            await client.save();
            return client;
        }
        catch (err) {
            console.log("Error al agregar la ID de survey:", err);
            throw err; // Puedes lanzar el error para manejarlo en un nivel superior
        }
    }
}
exports.default = ClientRepository;
//# sourceMappingURL=client-repository.js.map