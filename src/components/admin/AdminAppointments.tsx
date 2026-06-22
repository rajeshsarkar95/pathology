"use client";
import toast from "react-hot-toast";
import { getStatusConfig } from "@/lib/utils";
import type { ReportStatus } from "@/types";

const APPOINTMENTS = [
  { name: "Meena Joshi",  test: "CBC + Thyroid",  time: "7:00 AM",  type: "home", status: "completed"  as ReportStatus },
  { name: "Suresh Rawat", test: "Full Body",       time: "8:30 AM",  type: "lab",  status: "completed"  as ReportStatus },
  { name: "Kavita Negi",  test: "Diabetes Panel",  time: "10:00 AM", type: "home", status: "processing" as ReportStatus },
  { name: "Rajan Sharma", test: "Lipid Profile",   time: "11:30 AM", type: "lab",  status: "pending"    as ReportStatus },
  { name: "Anita Singh",  test: "KFT",             time: "2:00 PM",  type: "home", status: "pending"    as ReportStatus },
];

export default function AdminAppointments() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-1" style={{ fontFamily: "DM Serif Display, serif" }}>
        Appointments
      </h1>
      <p className="text-slate-400 text-sm mb-6">Today&apos;s schedule — 2 June 2025</p>

      <div className="card">
        <table>
          <thead>
            <tr><th>Patient</th><th>Test</th><th>Time</th><th>Type</th><th>Status</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {APPOINTMENTS.map((a, i) => (
              <tr key={i}>
                <td className="font-medium text-slate-800 text-xs">{a.name}</td>
                <td className="text-xs">{a.test}</td>
                <td className="font-medium text-xs">{a.time}</td>
                <td>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    a.type === "home" ? "bg-teal-50 text-teal-700" : "bg-blue-50 text-blue-700"
                  }`}>
                    {a.type === "home" ? "🏡 Home" : "🏥 Lab"}
                  </span>
                </td>
                <td><span className={getStatusConfig(a.status).className}>{getStatusConfig(a.status).label}</span></td>
                <td>
                  <button className="text-xs text-blue-600 hover:underline" onClick={() => toast.success("Opening details...")}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
