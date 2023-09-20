import mongoose, { Schema } from 'mongoose';
import partSurveySchema from './parts/partSurvey';


enum MachineType {
  FillingMachine = 'FillingMachine',
  BagSealingMachine = 'BagSealingMachine',
  InductionSealingMachine = 'InductionSealingMachine',
  CappingMachine = 'CappingMachine',
  DosingMachine = 'DosingMachine',
  BagFormingMachine = 'BagFormingMachine',
  LabelingMachine = 'LabelingMachine',
  HotStampingMachine = 'HotStampingMachine',
}

const machineSurveySchema: Schema = new mongoose.Schema({
    model: { type: String, required: false },
    newMachine: { type: Boolean},
    repair: { type: Boolean },
    machineType: {
      type: String,
      enum: Object.values(MachineType),
    },
    machineStatus: { type: String, enum: ['Clean', 'Regular', 'Dirty']},
    startTime: { type: String },
    startDate: { type: Date },
    machineParts : {type: [partSurveySchema]},
    generalObservation : {type: String},
    responsibleWorker : {type: String},
    responsibleWorkerId : {type: String},
    responsibleManager: {type: String},
    endDate: { type: Date },
    endTime: { type: String },
  },
  {
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
