import mongoose from "mongoose";

export const DeviceSchema = new mongoose.Schema({
     device_id : {type : String , required: true},
     store_id : {type : String, required: true},
     devices : {type: {String}},
     name: {type : String},
     type: {type : String},
})




 