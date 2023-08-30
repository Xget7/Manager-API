import mongoose from "mongoose";
import receptionSchema from "./../machines/reception";
import machineSurveySchema from "../machines/machineSurvey"

const MachineSchema = new mongoose.Schema({
    uid: { type: String, required: true },
    clientId: { type: String, required: true },
    reception: { type: receptionSchema, required: true }, // Make sure receptionSchema is defined
    machineSurvey: { type: machineSurveySchema }, // Make sure machineSurveySchema is defined
  }, {
    timestamps: true
  });


export default MachineSchema;




