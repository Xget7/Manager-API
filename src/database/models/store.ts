import mongoose from "mongoose";

export const StoreSchema = new mongoose.Schema({
    // store_id: { type: String, required: true, default: () => uuidv4() },
    user_admin_id : {type : String, required: true},
    name: {type : String , required: true},
    devices : {type: [String]},
    users: {type : [String]}
},{
    toJSON: {
      transform(doc, ret){
          delete ret.__v;
      }
  }
})

