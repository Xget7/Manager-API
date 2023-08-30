import mongoose, { Schema } from 'mongoose';
import partSurveySchema from './parts/partSurvey';


const machineSurveySchema: Schema = new mongoose.Schema({
    model: { type: String, required: true },
    newMachine: { type: Boolean, required: true },
    repair: { type: Boolean, required: true },
    maintenance: { type: Boolean, required: true },
    machineStatus: { type: String, enum: ['Clean', 'Regular', 'Dirty'], required: true },
    startTime: { type: Date, required: true },
    electricalPart: { type: partSurveySchema },
    mechanicalPart: { type: partSurveySchema },
    structuralPart: { type: partSurveySchema },
    generalObservation : {type: String},
    endTime: { type: Date, required: true },
  },{
    toJSON: {
      transform(doc, ret){
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
    }
  },
  timestamps: false
})
  

export default machineSurveySchema;
