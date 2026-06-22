import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Appointment } from "@/lib/models/Appointment";

export async function POST(req:NextRequest){
  try {
    await connectDB();
    const body = await req.json();
    const { patientName, phone, preferredDate } = body;
    if (!patientName || !phone || !preferredDate){
      return NextResponse.json({success:false,message:"Name, phone and date are required" },{status:400});
    }
    const appointment = await Appointment.create(body);
    return NextResponse.json({ success:true,data:appointment},{status:201});
  } catch (error){
    console.error("Appointment error:",error);
    return NextResponse.json({success:false,message:"Server error"},{status:500});
  }
}
export async function GET(req:NextRequest){
  try {
    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date");
    await connectDB();
    const query = date ? {preferredDate:date} : {};
    const appointments = await Appointment.find(query).sort({preferredDate:1,preferredTime:1});
    return NextResponse.json({success:true,data:appointments});
  } catch {
    return NextResponse.json({success:false,message:"Server error"},{status:500});
  }
}
