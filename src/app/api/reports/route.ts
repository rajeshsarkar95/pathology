import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Report } from "@/lib/models/Report";
import { verifyToken, extractTokenFromHeader } from "@/lib/auth";
import { generateReportId } from "@/lib/utils";

export async function GET(req:NextRequest){
  try {
    const token = extractTokenFromHeader(req.headers.get("authorization"));
    if (!token) return NextResponse.json({success:false,message:"Unauthorized"},{status:401});
    const payload = verifyToken(token);
    await connectDB();
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";
    const query: Record<string, unknown> = {patientId:payload.patientId};
    if (status) query.status = status;
    if (search){
      query.$or = [
        { testName: {$regex:search,$options:"i"}},
        { collectionDate:{$regex:search,$options:"i"}},
      ];
    }
    const reports = await Report.find(query).sort({createdAt:-1});
    return NextResponse.json({success:true,data:reports});
  } catch (error){
    console.error("Get reports error:",error);
    return NextResponse.json({success:false,message:"Server error"},{status:500});
  }
}

export async function POST(req:NextRequest){
  try {
    const token = extractTokenFromHeader(req.headers.get("authorization"));
    if (!token) return NextResponse.json({success:false,message:"Unauthorized"},{status:401});
    const payload = verifyToken(token);
    if (payload.role !== "admin"){
      return NextResponse.json({success:false,message:"Admin access required"},{status:403});
    }
    await connectDB();
    const body = await req.json();
    const report = await Report.create({
      ...body,
      reportId:generateReportId(),
    });
    return NextResponse.json({success:true,data:report},{status:201});
  } catch (error){
    console.error("Create report error:",error);
    return NextResponse.json({success:false,message:"Server error"},{status:500});
  }
}
