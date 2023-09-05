// receptionSchema.js
import mongoose from 'mongoose';

const receptionSchema = new mongoose.Schema({
  machineName: { type: String, required: true },
  machineModel: { type: String, required: true },
  receptionTime: { type: Date, required: true },
  isForSale : { type: Date, required: true },
  workType: { type: String, enum: ['Maintenance', 'Repair'], required: true },
  machineStatus: { type: String, enum: ['Clean', 'Regular', 'Dirty'], required: true },
  powerCable: { type: Boolean, required: true },
  acquisitionDate: { type: Date },
  lastRepairDate: { type: Date },
  serialNumber: { type: String },
  missingParts: { type: Boolean },
  missingPartsComment: { type: String },
  visibleDamage: { type: Boolean },
  visibleDamageComment: { type: String },
  observations: { type: Boolean },
  observationsComment: { type: String },
  approvedByClient: { type: Boolean },
  creationDate: { type: Date },
  creationTime: { type: Date },
  approvalDateTime: { type: Date },
  status: {
    type: String,
    enum: ['BudgetSent', 'BudgetApproved', 'Working', 'Finished', 'Canceled'],
    required: true
  },
},{
  toJSON: {
    transform(doc, ret){
      delete ret.__v;
      delete ret.createdAt;
      delete ret.updatedAt;
  }
},
timestamps: false
})



export default receptionSchema;