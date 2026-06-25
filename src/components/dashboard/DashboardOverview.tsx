"use client";
import { useState } from "react";
import { FileText, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { getStatusConfig } from "@/lib/utils";
import type {Report,DashboardStats} from "@/types";
import ReportModal from "./ReportModal";

const MOCK_REPORTS: Report[] = [
  { _id: "1", reportId: "R001", patientId: "LP-00412", patientName: "Rahul Sharma", testName: "Complete Blood Count (CBC)", testCategory: "cbc", status: "completed", collectionDate: "2025-05-28", reportDate: "2025-05-28", doctor: "Dr. A. Lalwani", createdAt: "" },
  { _id: "2", reportId: "R002", patientId: "LP-00412", patientName: "Rahul Sharma", testName: "Thyroid Profile (TSH, T3, T4)", testCategory: "thyroid", status: "completed", collectionDate: "2025-05-15", reportDate: "2025-05-15", doctor: "Dr. A. Lalwani", createdAt: "" },
  { _id: "3", reportId: "R003", patientId: "LP-00412", patientName: "Rahul Sharma", testName: "Liver Function Test (LFT)", testCategory: "liver", status: "completed", collectionDate: "2025-05-10", reportDate: "2025-05-10", doctor: "Dr. S. Mehra", createdAt: "" },
  { _id: "4", reportId: "R004", patientId: "LP-00412", patientName: "Rahul Sharma", testName:"Diabetes Panel (HbA1c)",testCategory:"diabetes", status: "processing", collectionDate: "2025-06-02", doctor: "Dr. A. Lalwani", createdAt:""},
  { _id: "5", reportId: "R005", patientId: "LP-00412", patientName: "Rahul Sharma", testName: "Vitamin Panel (D, B12)", testCategory: "vitamin", status: "pending", collectionDate: "2025-06-05", doctor: "Pending", createdAt:""},
];

const hbBars = [
  {month:"Jan",val:"13.1",h:60},{month:"Feb",val:"13.8",h:65},
  {month:"Mar",val:"14.0",h:70},{month:"Apr",val:"13.9",h:68},
  {month:"May",val:"14.1",h:72},{month:"Jun",val:"14.2",h:71},
];

interface Props {user:{name:string};onNavigate:(v:"reports" | "history")=>void;}
export default function DashboardOverview({user,onNavigate }:Props){
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const stats:DashboardStats = {totalReports:12,completedReports:9,processingReports:2,pendingReports:1,abnormalCount:1};

  const metrics = [
    {label:"Total Reports",value:stats.totalReports,icon:FileText,bg:"bg-blue-50",color:"text-blue-600", change: "↑ 3 this month", changeColor: "text-emerald-500"},
    {label:"Completed",value: stats.completedReports,icon:CheckCircle,bg:"bg-emerald-50",color:"text-emerald-600",change:"All reviewed", changeColor: "text-emerald-500"},
    { label: "Processing", value: stats.processingReports, icon: Clock, bg: "bg-amber-50", color: "text-amber-600", change: "In progress", changeColor: "text-amber-500"},
    { label: "Alerts", value: stats.abnormalCount, icon: AlertTriangle, bg: "bg-red-50", color: "text-red-600", change: "WBC elevated", changeColor: "text-red-500"},
  ];

  const firstName = user.name.split(" ")[0];

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1" style={{fontFamily: "DM Serif Display, serif" }}>
          Good morning, {firstName}👋
        </h1>
        <p className="text-slate-400 text-sm mb-6">Monday, 2 June 2025 — Dehradun</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map(({label,value,icon:Icon,bg,color,change,changeColor}) => (
            <div key={label} className="card p-5">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-400 text-xs mb-1">{label}</p>
                  <p className="text-2xl font-bold text-slate-900">{value}</p>
                  <p className={`text-xs mt-1 ${changeColor}`}>{change}</p>
                </div>
                <div className={`w-9 h-9 ${bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-4 h-4 ${color}`}/>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          <div className="card">
            <div className="card-header">
              <span className="card-title">Recent Reports</span>
              <button className="btn-ghost text-xs" onClick={() => onNavigate("reports")}>View All →</button>
            </div>
            <table>
              <thead><tr><th>Test</th><th>Date</th><th>Status</th></tr></thead>
              <tbody>
                {MOCK_REPORTS.slice(0, 3).map(r => (
                  <tr key={r._id} className="cursor-pointer" onClick={() => r.status === "completed" && setSelectedReport(r)}>
                    <td className="font-medium text-slate-800 text-xs">{r.testName}</td>
                    <td className="text-xs">{r.collectionDate}</td>
                    <td><span className={getStatusConfig(r.status).className}>{getStatusConfig(r.status).label}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card">
            <div className="card-header"><span className="card-title">Hemoglobin Trend (6 months)</span></div>
            <div className="p-5">
              <div className="flex items-end gap-2 h-24 border-b border-l border-slate-200 pl-2 pb-0">
                {hbBars.map((b) => (
                  <div key={b.month} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-[10px] text-slate-400">{b.val}</span>
                    <div className="w-full bg-blue-500 rounded-t-md hover:bg-blue-700 transition-colors" style={{ height: `${b.h}px` }} />
                  </div>
                ))}
              </div>
              <div className="flex justify-around mt-2">
                {hbBars.map(b => <span key={b.month} className="text-[10px] text-slate-400">{b.month}</span>)}
              </div>
              <p className="text-xs text-emerald-600 mt-2">↑ Improving trend — within normal range (13.5–17.5 g/dL)</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header"><span className="card-title">⚠️ Abnormal Result Alert</span></div>
          <div className="p-5">
            <div className="flex gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-700 text-sm">WBC Count — Elevated</p>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  Your WBC count (11.8 K/µL) is above the normal range of 4.5–11.0 K/µL. Please
                  consult your physician for further evaluation. This may indicate infection or inflammation.
                </p>
                <button
                  className="btn-danger text-xs py-1.5 px-3 mt-3 rounded-lg"
                  onClick={() => setSelectedReport(MOCK_REPORTS[0])}
                >
                  View Full Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedReport && (
        <ReportModal report={selectedReport} onClose={() => setSelectedReport(null)} />
      )}
    </>
  );
}