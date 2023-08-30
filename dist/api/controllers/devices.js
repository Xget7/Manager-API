"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDevice = exports.GetDevicesByStoreId = exports.GetDeviceById = void 0;
const devices_service_1 = __importDefault(require("../../services/devices-service"));
const store_service_1 = __importDefault(require("../../services/store-service"));
const deviceService = new devices_service_1.default();
const storeService = new store_service_1.default();
const GetDeviceById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }
        const existingDevice = await deviceService.GetDeviceById(id);
        if (!existingDevice) {
            return res.status(404).json({ message: "Dispositivo no encontrado" });
        }
        return res.status(200).json(existingDevice);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al obtener dispositivo" });
    }
};
exports.GetDeviceById = GetDeviceById;
const GetDevicesByStoreId = async (req, res) => {
    try {
        const store_id = req.params.id;
        if (!store_id) {
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }
        const existingDevices = await deviceService.GetDevicesByStoreId(store_id);
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
exports.GetDevicesByStoreId = GetDevicesByStoreId;
const CreateDevice = async (req, res) => {
    try {
        const { device_id, store_id, devices, name, type } = req.body;
        if (!device_id || !store_id) {
            return res.status(400).json({ message: "Faltan campos obligatorios." });
        }
        const deviceData = {
            device_id: device_id,
            store_id: store_id,
            devices: devices || [],
            name: name || "",
            type: type || "",
        };
        const newDevice = await deviceService.CreateDevice(deviceData);
        if (!newDevice) {
            return res.status(400).json({ message: "Error al crear dispositivo" });
        }
        const updateStore = storeService.AddDeviceToStore(device_id, store_id);
        if (!updateStore) {
            return res.status(400).json({ message: "Error al añadir dispositivo a la tienda" });
        }
        return res.status(200).json(newDevice);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al crear dispositivo" });
    }
};
exports.CreateDevice = CreateDevice;
//# sourceMappingURL=devices.js.map