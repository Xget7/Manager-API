import SurveyRepository from '../database/repository/surveys/survey-repository';
import { APIError, BadRequestError } from '../utils/app-errors';

class MachineService {
     private repository: SurveyRepository;
   
     constructor() {
       this.repository = new SurveyRepository();
     }

     async CreateSurvey(values: Record<string, any>) {
          try {
            const newStore = await this.repository.CreateSurvey(values);
            return newStore;
          } catch (err) {
            throw new APIError('Error creando planilla', err);
          }
     }
      
     async GetSurveyById(id: string) {
          try {
            const existingStore = await this.repository.FindSurveyById(id);
            return existingStore;
          } catch (err) {
            throw new APIError('Planilla no encontrada.', err);
          }
     }

     async GetAllSurveys() {
          try {
            const surveys = await this.repository.GetAllSurveys();
            return surveys;
          } catch (err) {
            throw new APIError('Error al obtener planillas.', err);
          }
     }

     async ChangeSurveyState(id: string , newState : string){
          try {
               const existingStore = await this.repository.changeSurveyState(id, newState);
               return existingStore;
          } catch (err) {
               throw new APIError('Error intentando cambiar estado de la planilla', err);
          }
     }



     async GetSurveysByClientId(id: string) {
          try {
               const existingStore = await this.repository.GetSurveysByClientId(id);
               return existingStore;
          } catch (err) {
               throw new APIError('Planillas/cliente no encontrado', err);
          }
     }
     
      
     async DeleteSurveyById(id: string) {
          try {
               const deletedStore = await this.repository.DeleteSurvey(id);
               return deletedStore;
          } catch (err) {
               throw new APIError('Error al intentar eliminar planilla', err);
          }
     }
     
     async UpdateSurveyById(id: string, values: Record<string, any>) {
          try {
               const updatedStore = await this.repository.UpdateSurvey(id, values);
               return updatedStore;
          } catch (err) {
               throw new APIError('Error al intentar actualizar planilla.', err);
          }
     }



}

export default MachineService