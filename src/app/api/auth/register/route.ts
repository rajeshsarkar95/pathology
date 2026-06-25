import {NextRequest,NextResponse} from "next/server";
import {connectDB} from "@/lib/db";
import {User} from "@/lib/models/User";
import {signToken} from "@/lib/auth";
import {generatePatientId} from "@/lib/utils";

export async function POST(req:NextRequest){
  try {
    await connectDB();
    const body = await req.json();
    const {name,email,phone,password,dateOfBirth,gender} = body;
    if (!name || !email || !phone || !password){
      return NextResponse.json(
        {success:false,message:"All required fields must be provided"},
        {status:400}
      );
    }
    const existingUser = await User.findOne({$or:[{email},{phone}]});
    if (existingUser){
      return NextResponse.json(
        {success:false,message:"User with this email or phone already exists"},
        {status:409}
      );
    }
    const patientId = generatePatientId();
    const user = await User.create({
    name,email,phone,password,dateOfBirth,gender,patientId,role:"patient",
    });
    const token = signToken({userId:user._id.toString(),role:user.role,patientId:user.patientId});
    return NextResponse.json({
      success:true,
      data:{
        token,
        user:{_id:user._id,name:user.name,email:user.email,phone:user.phone,role:user.role,patientId:user.patientId},
      },
    },{status:201});
  } catch (error){
    console.error("Register error:",error);
    return NextResponse.json({success:false,message:"Server error"},{status:500});
  }
}
