import mongoose, { Document, Schema } from "mongoose";

export interface IAppointment extends Document {
  patientName: string;
  phone: string;
  email?: string;
  testType: string;
  collectionType: "home" | "lab" | "lab2";
  preferredDate: string;
  preferredTime: string;
  address?: string;
  notes?: string;
  status: "booked" | "confirmed" | "completed" | "cancelled";
  createdAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>(
  {
    patientName:{type:String,required:true},
    phone:{type:String,required:true},
    email:String,
    testType:{type:String,required:true },
    collectionType:{type:String,enum:["home","lab","lab2"],default:"home"},
    preferredDate:{type:String,required:true},
    preferredTime:{type:String,required:true},
    address:String,
    notes:String,
    status:{type:String,enum:["booked","confirmed","completed","cancelled"],default:"booked"},
  },
  {timestamps:true}
);
export const Appointment =
  mongoose.models.Appointment ||
  mongoose.model<IAppointment>("Appointment", AppointmentSchema);
