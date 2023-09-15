import mongoose, { Schema, Document } from 'mongoose';



const partSurveySchema: Schema = new mongoose.Schema({
  name : {type : String} ,
  diagnostic: [
    {
      question: { type: String },
      response: { type: String },
      photos: { type: String },
    },
  ],
  observation: { type: String },
});


export default partSurveySchema;