"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("../../database/models/user");
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
    async addStoreToUser(userId, storeId) {
        try {
            const user = await exports.UserModel.findById(userId);
            if (user) {
                console.log("we have user");
                user.stores.push(storeId);
                await user.save();
                return true;
            }
        }
        catch (err) {
            console.log("error adding store to user");
        }
        return false;
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