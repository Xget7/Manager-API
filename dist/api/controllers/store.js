"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStore = exports.CreateStore = exports.GetStore = void 0;
const store_service_1 = __importDefault(require("../../services/store-service"));
const user_service_1 = __importDefault(require("../../services/user-service"));
const storeService = new store_service_1.default();
const userService = new user_service_1.default();
const GetStore = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }
        const existingStore = await storeService.GetStoreById(id);
        if (!existingStore) {
            return res.status(404).json({ message: "Tienda no encontrada" });
        }
        return res.status(200).json(existingStore);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al obtener tienda" });
    }
};
exports.GetStore = GetStore;
const CreateStore = async (req, res) => {
    try {
        const { admin_id, name, devices, users } = req.body;
        if (!admin_id || !name) {
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }
        const storeData = {
            user_admin_id: admin_id,
            name: name,
            devices: devices || [],
            users: users || [],
        };
        const newStore = await storeService.CreateStore(storeData);
        const admin = userService.FindUserById(admin_id);
        if (!admin) {
            return res.status(400).json({ message: "Usuario administrador no existe." });
        }
        const result = await userService.AddStoreToUser(admin_id, newStore._id.toString());
        if (result == false) {
            return res.status(400).json({ message: "Error al agregar la tienda al usuario" });
        }
        const modifiedResponse = {
            id: newStore._id,
            user_admin_id: newStore.user_admin_id,
            name: newStore.name,
            devices: newStore.devices,
            users: newStore.users,
        };
        return res.status(200).json(modifiedResponse);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error creando tienda" });
    }
};
exports.CreateStore = CreateStore;
const UpdateStore = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        if (!id) {
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }
        const updatedStore = await storeService.UpdateStoreById(id, updateData);
        if (!updatedStore) {
            return res.status(404).json({ message: "Tienda no encontrada" });
        }
        return res.status(200).json(updatedStore);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al actualizar tienda" });
    }
};
exports.UpdateStore = UpdateStore;
//# sourceMappingURL=store.js.map