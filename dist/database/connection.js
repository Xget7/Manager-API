"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = require("../config/index");
const connectToDatabase = async () => {
    try {
        await mongoose_1.default.connect(index_1.config.DB_URL);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with an error
    }
};
exports.connectToDatabase = connectToDatabase;
//# sourceMappingURL=connection.js.map