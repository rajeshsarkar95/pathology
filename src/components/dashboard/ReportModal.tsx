"use client";
import { X, Download, Share2 } from "lucide-react";
import toast from "react-hot-toast";
import type { Report } from "@/types";

const CBC_PARAMS = [
  { name: "Hemoglobin", value: "14.2 g/dL", range: "13.5–17.5 g/dL", status: "normal", pct: 71 },
  { name: "WBC Count",  value: "11.8 K/µL", range: "4.5–11.0 K/µL",  status: "high",   pct: 85 },
  { name: "RBC Count",  value: "4.9 M/µL",  range: "4.5–5.9 M/µL",   status: "normal", pct: 60 },
  { name: "Platelets",  value: "2.3 lakh",  range: "1.5–4.0 lakh",   status: "normal", pct: 58 },
  { name: "Hematocrit", value: "42%",        range: "41–53%",          status: "normal", pct: 52 },
  { name: "Neutrophils",value: "72%",        range: "40–75%",          status: "normal", pct: 72 },
  { name: "Lymphocytes",value: "18%",        range: "20–45%",          status: "low",    pct: 18 },
];

const THYROID_PARAMS = [
  { name: "TSH",        value: "6.8 µIU/mL", range: "0.4–4.0 µIU/mL", status: "high",   pct: 90 },
  { name: "T3 Total",   value: "110 ng/dL",  range: "80–200 ng/dL",   status: "normal", pct: 50 },
  { name: "T4 Total",   value: "6.2 µg/dL",  range: "5.1–14.1 µg/dL", status: "normal", pct: 40 },
  { name: "Free T3",    value: "2.9 pg/mL",  range: "2.3–4.2 pg/mL",  status: "normal", pct: 60 },
  { name: "Free T4",    value: "0.89 ng/dL", range: "0.8–1.8 ng/dL",  status: "normal", pct: 42 },
];

const PARAMS_BY_CATEGORY: Record<string, typeof CBC_PARAMS> = {
  cbc: CBC_PARAMS,
  thyroid: THYROID_PARAMS,
};

const statusStyle = {
  normal: { text: "text-emerald-600", bg: "bg-emerald-50", label: "✓ Normal",  bar: "#16a34a" },
  high:   { text: "text-red-600",     bg: "bg-red-50",     label: "↑ High",    bar: "#C8293A" },
  low:    { text: "text-amber-600",   bg: "bg-amber-50",   label: "↓ Low",     bar: "#D97706" },
};

interface Props { report: Report; onClose: () => void; }

export default function ReportModal({ report, onClose }: Props) {
  const params = PARAMS_BY_CATEGORY[report.testCategory] || CBC_PARAMS;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[88vh] overflow-y-auto animate-fade-in">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-100 sticky top-0 bg-white rounded-t-2xl z-10">
          <div>
            <h2 className="font-bold text-slate-900 text-lg">{report.testName}</h2>
            <p className="text-slate-400 text-sm mt-0.5">{report.patientName} · {report.collectionDate}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Meta */}
        <div className="px-6 pt-4 pb-2 flex flex-wrap gap-2 items-center">
          <span className="badge badge-completed text-xs">✓ Completed</span>
          <span className="text-xs text-slate-400">Validated by {report.doctor}</span>
        </div>

        {/* Parameters Table */}
        <div className="px-6 pb-4">
          <table className="w-full">
            <thead>
              <tr>
                <th>Parameter</th><th>Result</th><th>Normal Range</th><th>Status</th><th>Indicator</th>
              </tr>
            </thead>
            <tbody>
              {params.map(p => {
                const s = statusStyle[p.status as keyof typeof statusStyle];
                return (
                  <tr key={p.name}>
                    <td className="text-slate-700 text-xs font-medium">{p.name}</td>
                    <td className={`font-semibold text-xs ${s.text}`}>{p.value}</td>
                    <td className="text-xs text-slate-400">{p.range}</td>
                    <td>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${s.text} ${s.bg}`}>
                        {s.label}
                      </span>
                    </td>
                    <td>
                      <div className="w-20 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: s.bar }} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Actions */}
        <div className="px-6 pb-6 flex gap-3">
          <button
            onClick={() => { toast.success("Downloading PDF report..."); }}
            className="flex-1 btn-primary py-2.5 text-sm rounded-xl flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" /> Download PDF
          </button>
          <button
            onClick={() => { toast.success("Share link copied to clipboard!"); }}
            className="flex-1 btn-outline py-2.5 text-sm rounded-xl flex items-center justify-center gap-2"
          >
            <Share2 className="w-4 h-4" /> Share Report
          </button>
        </div>
      </div>
    </div>
  );
}
