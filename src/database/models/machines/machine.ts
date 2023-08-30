import mongoose from "mongoose";
import receptionSchema from "./../machines/reception";
import machineSurveySchema from "../machines/machineSurvey"

const MachineSchema = new mongoose.Schema({
    clientId: { type: String, required: true },
    reception: { type: receptionSchema, required: true }, // Make sure receptionSchema is defined
    machineSurvey: { type: machineSurveySchema }, // Make sure machineSurveySchema is defined
  },{
    toJSON: {
      transform(doc, ret){
          ret.id = ret._id;
          delete ret.__v;
          delete ret._id;
          delete ret.createdAt;
          delete ret.updatedAt;
      }
  },
  timestamps: false
})


export default MachineSchema;




