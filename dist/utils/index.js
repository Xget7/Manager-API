"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormateData = exports.ValidateSignature = exports.GenerateSignature = exports.ValidatePassword = exports.GeneratePassword = exports.GenerateSalt = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
// Utility functions
const GenerateSalt = async () => {
    return await bcrypt_1.default.genSalt();
};
exports.GenerateSalt = GenerateSalt;
const GeneratePassword = async (password, salt) => {
    return await bcrypt_1.default.hash(password, salt);
};
exports.GeneratePassword = GeneratePassword;
const ValidatePassword = async (enteredPassword, savedPassword, salt) => {
    return ((await (0, exports.GeneratePassword)(enteredPassword, salt)) === savedPassword);
};
exports.ValidatePassword = ValidatePassword;
const GenerateSignature = async (payload) => {
    try {
        return await jsonwebtoken_1.default.sign(payload, config_1.config.SECRET, { expiresIn: "60d" });
    }
    catch (error) {
        console.log(error);
        return error;
    }
};
exports.GenerateSignature = GenerateSignature;
const ValidateSignature = async (req) => {
    try {
        const signature = req.get("Authorization");
        console.log(signature);
        const payload = await jsonwebtoken_1.default.verify(signature.split(" ")[1], config_1.config.SECRET);
        req.user = payload;
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
};
exports.ValidateSignature = ValidateSignature;
const FormateData = (data) => {
    if (data) {
        return { data };
    }
    else {
        throw new Error("Data Not found!");
    }
};
exports.FormateData = FormateData;
//# sourceMappingURL=index.js.map