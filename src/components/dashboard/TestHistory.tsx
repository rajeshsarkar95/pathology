"use client";
import { getStatusConfig } from "@/lib/utils";

const history = [
  { month: "June 2025", items: [
    { name: "Diabetes Panel (HbA1c)", status: "processing" as const },
    { name: "Vitamin Panel (D, B12)", status: "pending" as const },
  ]},
  { month: "May 2025", items: [
    { name: "Thyroid Profile", status: "completed" as const },
    { name: "Complete Blood Count", status: "completed" as const },
    { name: "Liver Function Test", status: "completed" as const },
  ]},
  { month: "February 2025", items: [
    { name: "Complete Blood Count", status: "completed" as const },
    { name: "Lipid Profile", status: "completed" as const },
  ]},
  { month: "November 2024", items: [
    { name: "Full Body Checkup", status: "completed" as const },
  ]},
];

export default function TestHistory() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "DM Serif Display, serif" }}>
        Test History
      </h1>
      <div className="card">
        <div className="p-6 space-y-6">
          {history.map(group => (
            <div key={group.month}>
              <h3 className="font-semibold text-slate-700 text-sm mb-3 pb-2 border-b border-slate-100">
                {group.month}
              </h3>
              <div className="space-y-2">
                {group.items.map(item => (
                  <div key={item.name} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                    <span className="text-sm text-slate-600">{item.name}</span>
                    <span className={getStatusConfig(item.status).className}>
                      {getStatusConfig(item.status).label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
