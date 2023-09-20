"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const configFile = `./.env`;
dotenv_1.default.config({ path: configFile });
exports.config = {
    PORT: process.env.PORT,
    DB_URL: process.env.MONGODB_URI,
    SECRET: process.env.SECRET,
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_PRIVATE_ACCESS_KEY: process.env.AWS_PRIVATE_ACCESS_KEY,
    REGION: process.env.REGION,
};
//# sourceMappingURL=index.js.map