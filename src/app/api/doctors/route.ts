import {NextRequest,NextResponse} from "next/server";
import { connectDB } from "@/lib/db";
import {Doctor} from "@/lib/models/DoctorModel";

export async function GET(){
  try {
    await connectDB();
    const doctors = await Doctor.find().sort({createdAt:-1}).lean();
    return NextResponse.json({success:true,data:doctors});
  } catch (error){
    console.error("[GET /api/doctors]",error);
    return NextResponse.json(
      {success:false,message:"Failed to fetch doctors."},
      {status:500}
    );
  }
}

export async function POST(req:NextRequest){
  try {
    await connectDB();
    const body = await req.json();
    const existing = await Doctor.findOne({
      $or:[{email:body.email},{licenseNumber:body.licenseNumber}],
    });
    if (existing){
      const field = existing.email === body.email ? "email" : "licenseNumber";
      return NextResponse.json(
        {success:false,message:`A doctor with this ${field} already exists.`},
        {status:409}
      );
    }
    const doctor = await Doctor.create(body);
    return NextResponse.json({success:true,data:doctor},{status:201});
  } catch (error:unknown){
    console.error("[POST /api/doctors]",error);
    const message =
      error instanceof Error ? error.message : "Failed to create doctor.";
    return NextResponse.json({success:false,message},{status:500});
  }
}