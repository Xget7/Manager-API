"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const partSurveySchema = new mongoose_1.default.Schema({
    questions: [{ type: String }],
    observations: { type: String },
    photos: [{ type: String }],
});
exports.default = partSurveySchema;
//# sourceMappingURL=partSurvey.js.map