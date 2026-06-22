"use client";
import { useState } from "react";
import Link from "next/link";
import {Activity,Upload,FileText,Users,Calendar,LogOut} from "lucide-react";
import { cn } from "@/lib/utils";
import AdminUpload from "@/components/admin/AdminUpload";
import AdminReports from "@/components/admin/AdminReports";
import AdminPatients from "@/components/admin/AdminPatients";
import AdminAppointments from "@/components/admin/AdminAppointments";

type AdminView = "upload" | "reports" | "patients" | "appointments";

const sidebarItems: {id:AdminView;label:string;icon:React.ElementType}[] = [
  { id:"upload",label:"Upload Report",icon:Upload},
  { id:"reports",label:"Manage Reports",icon:FileText},
  { id:"patients",label:"All Patients",icon:Users},
  { id:"appointments",label:"Appointments",icon:Calendar},
];

export default function AdminPage(){
  const [view, setView] = useState<AdminView>("upload");

  return (
    <div className="min-h-screen flex">
      <aside className="w-56 bg-slate-900 flex flex-col fixed top-0 left-0 h-full z-40">
        <div className="p-4 border-b border-white/10 flex items-center gap-2.5">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">LAL Admin</p>
            <p className="text-white/40 text-xs">Super Admin</p>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-0.5">
          <p className="text-white/30 text-xs uppercase tracking-wider font-semibold px-2 mb-2 mt-2">Reports</p>
          {sidebarItems.slice(0, 2).map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setView(id)}
              className={cn(
                "flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl text-sm transition-all",
                view === id ? "bg-white/10 text-white" : "text-white/50 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon className="w-4 h-4" />{label}
            </button>
          ))}
          <p className="text-white/30 text-xs uppercase tracking-wider font-semibold px-2 mb-2 mt-4">Patients</p>
          {sidebarItems.slice(2).map(({id,label,icon:Icon})=>(
            <button
              key={id}
              onClick={() => setView(id)}
              className={cn(
                "flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl text-sm transition-all",
                view === id ? "bg-white/10 text-white" : "text-white/50 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon className="w-4 h-4" />{label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10">
          <Link href="/" className="flex items-center gap-2.5 px-3 py-2.5 text-white/50 hover:text-white text-sm rounded-xl hover:bg-white/5 transition-all no-underline">
            <LogOut className="w-4 h-4" />Back to Site
          </Link>
        </div>
      </aside>
      <main className="ml-56 flex-1 bg-slate-50 min-h-screen p-6">
        {view === "upload"       && <AdminUpload />}
        {view === "reports"      && <AdminReports />}
        {view === "patients"     && <AdminPatients />}
        {view === "appointments" && <AdminAppointments />}
      </main>
    </div>
  );
}
