import  express  from "express";
import {GetAllSurveys, CreateSurvey, GetSurvey, UpdateSurvey,GetSurveysByClientId, UpdateSurveyState} from '../controllers/survey';

export default (router: express.Router) => {
     router.post('/survey', CreateSurvey); 
     router.get('/survey/:id', GetSurvey); 
     router.put('/survey/:id', UpdateSurvey); 
     router.get('/survey',GetAllSurveys); 

     
     router.get('/survey/client/:id', GetSurveysByClientId); 
   
     router.get('/survey/state', UpdateSurveyState); 
};