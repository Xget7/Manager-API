"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const partSurveySchema = new mongoose_1.default.Schema({
    name: { type: String },
    diagnostic: [
        {
            question: { type: String },
            response: { type: String },
            option: { type: Boolean },
            photos: { type: String },
        },
    ],
    observation: { type: String },
});
exports.default = partSurveySchema;
//# sourceMappingURL=partSurvey.js.map