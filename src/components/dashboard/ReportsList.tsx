"use client";
import { useState } from "react";
import { Search, Download, Eye } from "lucide-react";
import { getStatusConfig } from "@/lib/utils";
import type { Report } from "@/types";
import ReportModal from "./ReportModal";
import toast from "react-hot-toast";

const MOCK_REPORTS: Report[] = [
  { _id: "1", reportId: "R001", patientId: "LP-00412", patientName: "Rahul Sharma", testName: "Complete Blood Count (CBC)", testCategory: "cbc", status: "completed", collectionDate: "2025-05-28", doctor: "Dr. A. Lalwani", createdAt: "" },
  { _id: "2", reportId: "R002", patientId: "LP-00412", patientName: "Rahul Sharma", testName: "Thyroid Profile (TSH, T3, T4)", testCategory: "thyroid", status: "completed", collectionDate: "2025-05-15", doctor: "Dr. A. Lalwani", createdAt: "" },
  { _id: "3", reportId: "R003", patientId: "LP-00412", patientName: "Rahul Sharma", testName: "Liver Function Test (LFT)", testCategory: "liver", status: "completed", collectionDate: "2025-05-10", doctor: "Dr. S. Mehra", createdAt: "" },
  { _id: "4", reportId: "R004", patientId: "LP-00412", patientName: "Rahul Sharma", testName: "Diabetes Panel (HbA1c)", testCategory: "diabetes", status: "processing", collectionDate: "2025-06-02", doctor: "Dr. A. Lalwani", createdAt: "" },
  { _id: "5", reportId: "R005", patientId: "LP-00412", patientName: "Rahul Sharma", testName: "Vitamin Panel (D, B12)", testCategory: "vitamin", status: "pending", collectionDate: "2025-06-05", doctor: "Pending", createdAt: "" },
];

export default function ReportsList() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selected, setSelected] = useState<Report | null>(null);

  const filtered = MOCK_REPORTS.filter(r => {
    const matchSearch = r.testName.toLowerCase().includes(search.toLowerCase()) ||
      r.collectionDate.includes(search);
    const matchStatus = filterStatus === "all" || r.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <>
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <h1 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "DM Serif Display, serif" }}>My Reports</h1>
          <div className="flex gap-2 flex-wrap">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                className="form-input pl-8 text-xs h-9 w-48"
                placeholder="Search by test or date..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <select
              className="form-input text-xs h-9 w-36"
              value={filterStatus}
              onChange={e => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="processing">Processing</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        <div className="card">
          <table>
            <thead>
              <tr>
                <th>Report ID</th><th>Test Name</th><th>Date</th>
                <th>Doctor</th><th>Status</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={6} className="text-center text-slate-400 py-8">No reports found.</td></tr>
              ) : filtered.map(r => (
                <tr key={r._id}>
                  <td className="font-mono text-xs text-slate-400">{r.reportId}</td>
                  <td className="font-medium text-slate-800 text-xs">{r.testName}</td>
                  <td className="text-xs">{r.collectionDate}</td>
                  <td className="text-xs text-slate-400">{r.doctor}</td>
                  <td><span className={getStatusConfig(r.status).className}>{getStatusConfig(r.status).label}</span></td>
                  <td>
                    <div className="flex gap-1.5">
                      <button
                        disabled={r.status !== "completed"}
                        onClick={() => setSelected(r)}
                        className="flex items-center gap-1 px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <Eye className="w-3 h-3" /> View
                      </button>
                      <button
                        disabled={r.status !== "completed"}
                        onClick={() => toast.success("Downloading PDF...")}
                        className="flex items-center gap-1 px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <Download className="w-3 h-3" /> PDF
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selected && <ReportModal report={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
