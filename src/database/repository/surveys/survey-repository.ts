import mongoose from 'mongoose';
import SurveySchema from '../../models/machines/machine';

export const SurveyModel = mongoose.model('Survey', SurveySchema);


class SurveyRepository {

     
     async CreateSurvey(values: Record<string, any>) {
          try {
               const Survey = SurveyModel.create(values).then((Survey) => Survey.toObject());
               return Survey
          } catch (err) {
               console.log("Error creating Device:", err);
          }
     }

     async FindSurveyById(id: string) {
          return SurveyModel.findById(id);
     }

     async changeSurveyState(id: string, newState: string) {
        try {
          const updatedSurvey = await SurveyModel.findByIdAndUpdate(
            id,
            { $set: { 'reception.machineStatus': newState } },
            { new: true } 
          );
    
          return updatedSurvey ? updatedSurvey.toObject() : null;
        } catch (err) {
          console.error("Error changing machine state:", err);
          throw err;
        }
      }

     async GetAllSurveys() {
          return SurveyModel.find();
     }
     
     async GetSurveysByClientId(clientId: string) {
          return SurveyModel.find({ clientId: clientId });
     }
     
     async DeleteSurvey(id : String){
        try{
            SurveyModel.findByIdAndDelete(id);
        }catch(err){
            console.log("Error deleting Survey:", err);
        }
     }

     async UpdateSurvey(id: String , values : Record<string,any>){
        try{
            return SurveyModel.findByIdAndUpdate(id, values);
        }catch(err){
            console.log("Error updating Survey:", err);
        }
     }


}

export default SurveyRepository