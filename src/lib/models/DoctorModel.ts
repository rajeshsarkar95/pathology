import mongoose, { Document, Schema } from "mongoose";

export interface IDoctor extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialty:
     | "Cardiology"
     | "Dermatology"
     | "Neurology"
     | "Orthopedics"
     | "Pediatrics"
     | "Psychiatry"
     | "Radiology"
     | "General Practice"
     | "Oncology"
     | "Gynecology";


  gender: "Male" | "Female" | "Other";
  experience: number;
  licenseNumber: string;
  availableDays: ("Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun")[];
  joiningDate: string;
  avatarColor: "blue" | "violet" | "emerald" | "rose" | "amber";
  createdAt: Date;
  updatedAt: Date;
}

const DoctorSchema = new Schema<IDoctor>(
  {
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phone:{type:String,required:true},
    specialty:{
      type:String,
      required:true,
      enum:[
        "Cardiology","Dermatology","Neurology","Orthopedics",
        "Pediatrics","Psychiatry","Radiology","General Practice",
        "Oncology","Gynecology",
      ],
    },
    gender:{type:String,enum:["Male","Female","Other"],default:"Male"},
    experience:{type:Number,required:true,min:0,max:60,default:0},
    licenseNumber:{type:String,required:true,unique:true},
    availableDays:{
      type:[String],
      enum:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      default:[],
    },
    joiningDate:{type:String,required:true},
    avatarColor:{
      type: String,
      enum: ["blue", "violet", "emerald", "rose", "amber"],
      default: "blue",
    },
  },
  { timestamps: true }
);

export const Doctor =
  mongoose.models.Doctor ||
  mongoose.model<IDoctor>("Doctor", DoctorSchema);