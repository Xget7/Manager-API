"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("../../models/user");
exports.UserModel = mongoose_1.default.model('User', user_1.UserSchema);
class UserRepository {
    async Createuser(values) {
        try {
            const user = exports.UserModel.create(values).then((user) => user.toObject());
            return user;
        }
        catch (err) {
            console.log("errorCreating User");
        }
    }
    async getUserByEmail(email) {
        return exports.UserModel.findOne({ email });
    }
    async FindUserById(id) {
        return exports.UserModel.findById(id);
    }
    async deleteUserById(id) {
        return exports.UserModel.findByIdAndDelete(id);
    }
    async updateUserById(id, values) {
        return exports.UserModel.findByIdAndUpdate(id, values);
    }
}
exports.default = UserRepository;
//# sourceMappingURL=user-repository.js.map