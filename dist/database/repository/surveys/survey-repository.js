"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const machine_1 = __importDefault(require("../../models/machines/machine"));
exports.SurveyModel = mongoose_1.default.model('Survey', machine_1.default);
class SurveyRepository {
    async CreateSurvey(values) {
        try {
            const Survey = exports.SurveyModel.create(values).then((Survey) => Survey.toObject());
            return Survey;
        }
        catch (err) {
            console.log("Error creating Device:", err);
        }
    }
    async FindSurveyById(id) {
        return exports.SurveyModel.findById(id);
    }
    async changeSurveyState(id, newState) {
        try {
            const updatedSurvey = await exports.SurveyModel.findByIdAndUpdate(id, { $set: { 'reception.status': newState } }, { new: true });
            return updatedSurvey ? updatedSurvey.toObject() : null;
        }
        catch (err) {
            console.error("Error changing machine state:", err);
            throw err;
        }
    }
    async GetAllSurveys() {
        return exports.SurveyModel.find();
    }
    async GetSurveysByClientId(clientId) {
        return exports.SurveyModel.find({ clientId: clientId });
    }
    async DeleteSurvey(id) {
        try {
            exports.SurveyModel.findByIdAndDelete(id);
        }
        catch (err) {
            console.log("Error deleting Survey:", err);
        }
    }
    async UpdateSurvey(id, values) {
        try {
            return exports.SurveyModel.findByIdAndUpdate(id, values);
        }
        catch (err) {
            console.log("Error updating Survey:", err);
        }
    }
}
exports.default = SurveyRepository;
//# sourceMappingURL=survey-repository.js.map