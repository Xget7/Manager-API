import mongoose, { Schema, Document } from 'mongoose';

const diagnosticSchema = new mongoose.Schema({
  question: { type: String },
  response: { type: String },
  option: { type: Boolean },
  photos: [{ type: String }],
});


const partSurveySchema = new mongoose.Schema({
  name: { type: String },
  diagnostic: [diagnosticSchema], // Reference the diagnosticSchema here
  observation: { type: String },
});



export default partSurveySchema;