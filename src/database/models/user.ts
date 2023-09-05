import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
     username: {type : String , required: true},
     email : {type : String, required: true},
     salt: {type : String},
     isWorker : {type : Boolean , required : true},
     pendingSurveys : { type : [String]},
     password: {type : String},
},{
  toJSON: {
    transform(doc, ret){
        delete ret.password;
        delete ret.salt;
        delete ret.__v;
    }
},
timestamps: true
})



