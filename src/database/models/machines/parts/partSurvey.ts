import mongoose, { Schema, Document } from 'mongoose';

export interface PartSurvey extends Document {
  questions: string[];
  observations: string;
  photos: string[];
}

const partSurveySchema: Schema = new mongoose.Schema({
  questions: [{ type: String }],
  observations: { type: String },
  photos: [{ type: String }],
});

export default partSurveySchema;