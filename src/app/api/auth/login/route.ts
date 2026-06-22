import {NextRequest,NextResponse} from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/lib/models/User";
import { signToken } from "@/lib/auth";

export async function POST(req:NextRequest){
  try {
    await connectDB();
    const {identifier,password} = await req.json();
    if (!identifier || !password){
      return NextResponse.json({success:false,message:"Email/phone and password are required"},{status:400});
    }
    const user = await User.findOne({
      $or:[
        {email:identifier.toLowerCase()},
        {phone:identifier},
        {patientId:identifier},
      ],
    });
    if (!user || !(await user.comparePassword(password))){
      return NextResponse.json({success:false,message:"Invalid credentials"},{status:401});
    }
    if (!user.isActive){
      return NextResponse.json({success:false,message:"Account is deactivated. Contact support."},{status:403});
    }
    const token = signToken({userId:user._id.toString(),role:user.role,patientId:user.patientId});
    return NextResponse.json({
      success:true,
      data:{
        token,
        user:{_id:user._id,name:user.name,email:user.email,phone:user.phone,role:user.role,patientId:user.patientId},
      },
    });
  }catch (error){
    console.error("Login error:",error);
    return NextResponse.json({success:false,message:"Server error"},{status:500});
  }
}
