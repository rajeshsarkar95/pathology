"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import toast from "react-hot-toast";
import { getStatusConfig } from "@/lib/utils";
import type { ReportStatus } from "@/types";

const REPORTS = [
  { id: "R012", patient: "Rahul Sharma", test: "CBC", date: "2 Jun 2025", status: "processing" as ReportStatus },
  { id: "R011", patient: "Priya Gupta", test: "Thyroid Profile", date: "1 Jun 2025", status: "completed" as ReportStatus },
  { id: "R010", patient: "Amit Kumar", test: "Diabetes Panel", date: "31 May 2025", status: "completed" as ReportStatus },
  { id: "R009", patient: "Sunita Devi", test: "LFT", date: "30 May 2025", status: "pending" as ReportStatus },
  { id: "R008", patient: "Vikas Singh", test: "Vitamin Panel", date: "30 May 2025", status: "completed" as ReportStatus },
  { id: "R007", patient: "Meena Joshi", test: "KFT", date: "29 May 2025", status: "completed" as ReportStatus },
];

export default function AdminReports() {
  const [search, setSearch] = useState("");
  const [statuses, setStatuses] = useState<Record<string, ReportStatus>>(
    Object.fromEntries(REPORTS.map(r => [r.id, r.status]))
  );

  const metrics = [
    { label: "Total", value: 248, color: "text-slate-900" },
    { label: "Completed", value: 201, color: "text-emerald-600" },
    { label: "Processing", value: 31, color: "text-amber-600" },
    { label: "Pending", value: 16, color: "text-red-600" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "DM Serif Display, serif" }}>
        Manage Reports
      </h1>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {metrics.map(m => (
          <div key={m.label} className="card p-4">
            <p className="text-slate-400 text-xs mb-1">{m.label}</p>
            <p className={`text-2xl font-bold ${m.color}`}>{m.value}</p>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-header">
          <span className="card-title">All Uploaded Reports</span>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              className="form-input pl-8 text-xs h-9 w-48"
              placeholder="Search patient, test..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        <table>
          <thead>
            <tr><th>Patient</th><th>Test</th><th>Date</th><th>Current Status</th><th>Update Status</th></tr>
          </thead>
          <tbody>
            {REPORTS.filter(r =>
              r.patient.toLowerCase().includes(search.toLowerCase()) ||
              r.test.toLowerCase().includes(search.toLowerCase())
            ).map(r => (
              <tr key={r.id}>
                <td className="font-medium text-slate-800 text-xs">{r.patient}</td>
                <td className="text-xs">{r.test}</td>
                <td className="text-xs text-slate-400">{r.date}</td>
                <td><span className={getStatusConfig(statuses[r.id]).className}>{getStatusConfig(statuses[r.id]).label}</span></td>
                <td>
                  <select
                    className="form-input text-xs py-1 h-8 w-32"
                    value={statuses[r.id]}
                    onChange={e => {
                      setStatuses(prev => ({ ...prev, [r.id]: e.target.value as ReportStatus }));
                      toast.success(`Status updated to ${e.target.value}`);
                    }}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
