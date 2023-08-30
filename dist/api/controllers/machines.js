"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMachinesByClientId = exports.UpdateMachine = exports.CreateMachine = exports.GetMachine = void 0;
const machine_service_1 = __importDefault(require("../../services/machine-service"));
const user_service_1 = __importDefault(require("../../services/user-service"));
const machineService = new machine_service_1.default();
const userService = new user_service_1.default();
const GetMachine = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }
        const existingMachine = await machineService.GetMachineById(id);
        if (!existingMachine) {
            return res.status(404).json({ message: "Máquina no encontrada" });
        }
        return res.status(200).json(existingMachine);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al obtener máquina" });
    }
};
exports.GetMachine = GetMachine;
const CreateMachine = async (req, res) => {
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
        console.log("Machine data: ", machineData);
        const newMachine = await machineService.CreateMachine(machineData);
        const modifiedResponse = {
            clientId: newMachine.clientId,
            reception: newMachine.reception,
            machineSurvey: newMachine.machineSurvey,
        };
        return res.status(200).json(modifiedResponse);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error creando planilla" });
    }
};
exports.CreateMachine = CreateMachine;
const UpdateMachine = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        if (!id) {
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }
        const updatedMachine = await machineService.UpdateMachineById(id, updateData);
        if (!updatedMachine) {
            return res.status(404).json({ message: "No se ha podido actualizar la planilla." });
        }
        return res.status(200).json(updatedMachine);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al actualizar planilla." });
    }
};
exports.UpdateMachine = UpdateMachine;
const GetMachinesByClientId = async (req, res) => {
    try {
        const client_id = req.params.id;
        if (!client_id) {
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }
        const existingDevices = await machineService.GetMachinesByClientId(client_id);
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
exports.GetMachinesByClientId = GetMachinesByClientId;
//# sourceMappingURL=machines.js.map