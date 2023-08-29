"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUp = exports.SingIn = void 0;
const index_1 = require("../../utils/index");
const user_service_1 = __importDefault(require("../../services/user-service"));
const userService = new user_service_1.default();
const SingIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.sendStatus(400);
        }
        const user = await userService.GetUserByEmail(email);
        if (!user) {
            return res.status(400).json({ message: "Email o contraseña incorrecto" });
        }
        const validPassword = await (0, index_1.ValidatePassword)(password, user.password, user.salt);
        if (validPassword) {
            const token = await (0, index_1.GenerateSignature)({ email: user.email, _id: user._id });
            return res.status(200).json({ id: user._id, token });
        }
        return res.status(400).json({ message: "Email o contraseña incorrecto" });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Error al intentar autenticar usuario" });
    }
};
exports.SingIn = SingIn;
const SignUp = async (req, res) => {
    try {
        const { email, password, username, phoneNo } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Error de validación" });
        }
        const existingUser = await userService.GetUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: "Correo electrónico ya en uso" });
        }
        const salt = await (0, index_1.GenerateSalt)();
        const userPassword = await (0, index_1.GeneratePassword)(password, salt);
        const createdUser = await userService.CreateUser({
            email: email,
            username: username,
            salt: salt,
            password: userPassword,
            phoneNo: phoneNo,
        });
        const token = await (0, index_1.GenerateSignature)({
            email: email,
            _id: createdUser._id,
        });
        return res.status(200).json({ id: createdUser._id, token: token });
    }
    catch (error) {
        if (error.name === "ValidationError") {
            const errorMessage = extractValidationErrorMessage(error);
            return res.status(400).json({ message: errorMessage });
        }
        console.log(error);
        return res.status(400).json({ message: "Error al intentar autenticar usuario" });
    }
};
exports.SignUp = SignUp;
function extractValidationErrorMessage(error) {
    const validationErrors = error.errors;
    const errorFields = Object.keys(validationErrors);
    const errorMessage = `Error de validación en los siguientes campos: ${errorFields.join(", ")}`;
    return errorMessage;
}
//# sourceMappingURL=auth.js.map