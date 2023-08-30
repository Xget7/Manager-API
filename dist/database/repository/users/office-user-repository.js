"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfficeUserRepository = void 0;
const user_repository_1 = __importDefault(require("./user-repository"));
class OfficeUserRepository extends user_repository_1.default {
    async someOfficeSpecificFunction(userId) {
        // Implement your office-specific logic here
    }
}
exports.OfficeUserRepository = OfficeUserRepository;
//# sourceMappingURL=office-user-repository.js.map