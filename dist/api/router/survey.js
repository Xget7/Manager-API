"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const survey_1 = require("../controllers/survey");
exports.default = (router) => {
    router.post('/survey', survey_1.CreateSurvey);
    router.get('/survey/:id', survey_1.GetSurvey);
    router.put('/survey/:id', survey_1.UpdateSurvey);
    router.get('/survey', survey_1.GetAllSurveys);
    router.get('/survey/client/:id', survey_1.GetSurveysByClientId);
    router.get('/survey/state', survey_1.UpdateSurveyState);
};
//# sourceMappingURL=survey.js.map