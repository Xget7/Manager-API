"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSurveysByClientId = exports.GetAllSurveys = exports.UpdateSurveyState = exports.UpdateSurvey = exports.CreateSurvey = exports.GetSurvey = void 0;
const survey_service_1 = __importDefault(require("../../services/survey-service"));
const client_service_1 = __importDefault(require("../../services/client-service"));
const machineService = new survey_service_1.default();
const clientService = new client_service_1.default();
const GetSurvey = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }
        const existingSurvey = await machineService.GetSurveyById(id);
        if (!existingSurvey) {
            return res.status(404).json({ message: "Máquina no encontrada" });
        }
        return res.status(200).json(existingSurvey);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al obtener máquina" });
    }
};
exports.GetSurvey = GetSurvey;
const CreateSurvey = async (req, res) => {
    try {
        const { reception, machineSurvey, client_id } = req.body; // Adjust the field names accordingly
        if (!reception) {
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }
        const machineData = {
            clientId: client_id,
            reception: reception,
            machineSurvey: machineSurvey || null, // Adjust for your schema
        };
        console.log("Survey data: ", machineData);
        const newSurvey = await machineService.CreateSurvey(machineData);
        const client = await clientService.FindClientById(client_id);
        if (!client) {
            // Client doesn't exist, so create a new client
            await clientService.CreateClient({ uid: client_id, machines: [newSurvey._id.toString()] });
        }
        await clientService.AddSurveyToClient(newSurvey._id.toString(), client_id);
        const modifiedResponse = {
            clientId: newSurvey.clientId,
            reception: newSurvey.reception,
            machineSurvey: newSurvey.machineSurvey,
            id: newSurvey._id.toString()
        };
        return res.status(200).json(modifiedResponse);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error creando planilla" });
    }
};
exports.CreateSurvey = CreateSurvey;
const UpdateSurvey = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        if (!id) {
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }
        const updatedSurvey = await machineService.UpdateSurveyById(id, updateData);
        if (!updatedSurvey) {
            return res.status(404).json({ message: "No se ha podido actualizar la planilla." });
        }
        return res.status(200).json(updatedSurvey);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al actualizar planilla." });
    }
};
exports.UpdateSurvey = UpdateSurvey;
const UpdateSurveyState = async (req, res) => {
    try {
        const id = req.query.id;
        const state = req.query.state;
        if (!id) {
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }
        const updatedSurvey = await machineService.ChangeSurveyState(id.toString(), state.toString());
        if (!updatedSurvey) {
            return res.status(404).json({ message: "No se ha podido actualizar la planilla." });
        }
        console.log("Estado Actualizado con exito");
        return res.status(200).json({ message: "Estado Actualizado con exito" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al actualizar planilla." });
    }
};
exports.UpdateSurveyState = UpdateSurveyState;
const GetAllSurveys = async (req, res) => {
    try {
        const existingDevices = await machineService.GetAllSurveys();
        if (existingDevices.length === 0) {
            return res.status(200).json([]); // Return an empty array if no devices found
        }
        return res.status(200).json(existingDevices);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al obtener planillas" });
    }
};
exports.GetAllSurveys = GetAllSurveys;
const GetSurveysByClientId = async (req, res) => {
    try {
        const client_id = req.params.id;
        if (!client_id) {
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }
        const existingDevices = await machineService.GetSurveysByClientId(client_id);
        if (existingDevices.length === 0) {
            return res.status(200).json([]); // Return an empty array if no devices found
        }
        return res.status(200).json(existingDevices);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al obtener dispositivos" });
    }
};
exports.GetSurveysByClientId = GetSurveysByClientId;
//# sourceMappingURL=survey.js.map