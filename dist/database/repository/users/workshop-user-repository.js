"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkshopUserRepository = exports.UserModel = void 0;
const user_repository_1 = __importDefault(require("./user-repository"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("../../models/user");
exports.UserModel = mongoose_1.default.model('User', user_1.UserSchema);
class WorkshopUserRepository extends user_repository_1.default {
    async assingSurveyToWorker(machineUid, userId) {
        try {
            const user = await exports.UserModel.findById(userId);
            if (user) {
                user.pendingSurveys.push(machineUid);
                await user.save();
                return true;
            }
        }
        catch (err) {
            console.log("error adding store to user");
        }
        return false;
    }
}
exports.WorkshopUserRepository = WorkshopUserRepository;
//# sourceMappingURL=workshop-user-repository.js.map