"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllClients = void 0;
const client_service_1 = __importDefault(require("../../services/client-service"));
const clientService = new client_service_1.default();
const GetAllClients = async (req, res) => {
    try {
        // const { reception, machineSurvey , client_id } = req.body; // Adjust the field names accordingly
        const clients = await clientService.GetAllClients();
        return res.status(200).json(clients);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error obteniendo lista de clientes" });
    }
};
exports.GetAllClients = GetAllClients;
//# sourceMappingURL=client.js.map