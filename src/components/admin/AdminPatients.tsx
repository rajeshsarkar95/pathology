"use client";
import { useState } from "react";
import { Search, UserPlus } from "lucide-react";
import toast from "react-hot-toast";

const PATIENTS = [
  { id: "LP-00412", name: "Rahul Sharma", phone: "+91 98765 43210", age: 32, reports: 12, last: "2 Jun" },
  { id: "LP-00411", name: "Priya Gupta", phone: "+91 87654 32109", age: 45, reports: 5, last: "1 Jun" },
  { id: "LP-00410", name: "Amit Kumar", phone: "+91 76543 21098", age: 28, reports: 3, last: "31 May" },
  { id: "LP-00409", name: "Sunita Devi", phone: "+91 65432 10987", age: 55, reports: 8, last: "30 May" },
  { id: "LP-00408", name: "Vikas Singh", phone: "+91 54321 09876", age: 40, reports: 6, last: "30 May" },
  { id: "LP-00407", name: "Meena Joshi", phone: "+91 43210 98765", age: 36, reports: 4, last: "29 May" },
];

export default function AdminPatients() {
  const [search, setSearch] = useState("");
  const filtered = PATIENTS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "DM Serif Display, serif" }}>
        All Patients
      </h1>
      <div className="card">
        <div className="card-header">
          <span className="card-title">Patient Directory — {PATIENTS.length} registered</span>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input className="form-input pl-8 text-xs h-9 w-48" placeholder="Search patients..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <button className="btn-primary py-2 px-3 text-xs rounded-lg flex items-center gap-1.5" onClick={() => toast.success("Add patient form opened")}>
              <UserPlus className="w-3.5 h-3.5" /> Add Patient
            </button>
          </div>
        </div>
        <table>
          <thead><tr><th>Patient ID</th><th>Name</th><th>Phone</th><th>Age</th><th>Reports</th><th>Last Visit</th><th></th></tr></thead>
          <tbody>
            {filtered.map(p => (
              <tr key={p.id}>
                <td className="font-mono text-xs text-slate-400">{p.id}</td>
                <td className="font-medium text-slate-800 text-xs">{p.name}</td>
                <td className="text-xs">{p.phone}</td>
                <td className="text-xs">{p.age}</td>
                <td><span className="font-bold text-blue-600 text-sm">{p.reports}</span></td>
                <td className="text-xs text-slate-400">{p.last}</td>
                <td>
                  <button className="text-xs text-blue-600 hover:underline" onClick={() => toast.success(`Viewing ${p.name}'s profile`)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
