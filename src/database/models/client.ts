import mongoose from "mongoose";

export const ClientSchema = new mongoose.Schema({
     uid: {type : String , required: true},
     machines : {type : [String]}, 
},{timestamps: true}
)





