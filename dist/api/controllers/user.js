"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = exports.DeleteUser = exports.GetUser = void 0;
const user_service_1 = __importDefault(require("../../services/user-service"));
const userService = new user_service_1.default();
const GetUser = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "Se requiere el parámetro 'id'" });
        }
        const existingUser = await userService.FindUserById(id);
        if (!existingUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        const modifiedUser = {
            id: existingUser._id,
            username: existingUser.username,
            email: existingUser.email,
            isWorker: existingUser.isWorker,
            pendingMachines: existingUser.pendingMachines,
        };
        return res.status(200).json(modifiedUser);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al obtener usuario" });
    }
};
exports.GetUser = GetUser;
const DeleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "Se requiere el parámetro id" });
        }
        await userService.DeleteUserById(id);
        return res.status(200).json({ message: "Usuario eliminado correctamente" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al eliminar usuario" });
    }
};
exports.DeleteUser = DeleteUser;
const UpdateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const values = req.body;
        if (!id) {
            return res.status(400).json({ message: "Se requiere el parámetro 'id'" });
        }
        await userService.UpdateUserById(id, values);
        return res.status(200).json({ message: "Usuario actualizado correctamente" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al actualizar usuario" });
    }
};
exports.UpdateUser = UpdateUser;
//# sourceMappingURL=user.js.map