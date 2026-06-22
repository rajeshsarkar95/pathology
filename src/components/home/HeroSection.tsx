import Link from "next/link";
import { Activity, ArrowRight, CheckCircle, Wifi } from "lucide-react";

const stats = [
  { value: "50K+", label: "Patients Served" },
  { value: "200+", label: "Tests Available" },
  { value: "24 hr", label: "Report Delivery" },
];

const cbcParams = [
  { label: "Hemoglobin", value: "14.2 g/dL", status: "normal", pct: 71 },
  { label: "WBC Count",  value: "11.8 K/µL", status: "high",   pct: 85 },
  { label: "Platelets",  value: "2.3 lakh",  status: "normal", pct: 58 },
  { label: "Blood Sugar",value: "92 mg/dL",  status: "normal", pct: 46 },
];

const colorMap: Record<string, string> = {
  normal: "#16a34a",
  high: "#c8293a",
  low: "#d97706",
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16" style={{
      background: "linear-gradient(135deg, #03357A 0%, #0A5EC0 50%, #1E78F0 100%)"
    }}>
      {/* Decorative circles */}
      <div className="absolute -top-1/3 -right-16 w-[600px] h-[600px] rounded-full bg-white/[0.03] pointer-events-none" />
      <div className="absolute -bottom-1/3 -left-10 w-[400px] h-[400px] rounded-full bg-white/[0.03] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/90 text-xs font-medium mb-6">
              <CheckCircle className="w-3.5 h-3.5" />
              NABL Accredited Diagnostic Center
            </div>

            <h1 className="text-4xl md:text-5xl text-white leading-tight mb-5"
              style={{ fontFamily: "DM Serif Display, serif" }}>
              Your Health Reports,{" "}
              <em className="italic text-blue-300 not-italic" style={{ fontStyle: "italic" }}>
                Anywhere.
              </em>
            </h1>

            <p className="text-white/75 text-base leading-relaxed mb-8 max-w-md">
              Access your blood test reports online, anytime. Trusted by 50,000+
              patients for accurate diagnostics, secure report management, and expert
              consultations.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/signup"
                className="flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm no-underline"
              >
                View My Reports <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#booking"
                className="flex items-center gap-2 bg-transparent border border-white/40 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/10 hover:border-white/70 transition-all text-sm no-underline"
              >
                Book a Test
              </Link>
            </div>

            <div className="flex gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="block text-2xl font-bold text-white">{s.value}</span>
                  <span className="text-white/60 text-xs">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Demo Report Card */}
          <div className="hidden md:block relative pl-4">
            <div className="bg-white rounded-2xl p-6 shadow-2xl relative z-10">
              {/* Card header */}
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-blue-600 text-sm">LAL Pathology</span>
                </div>
                <span className="badge badge-completed text-xs">✓ Completed</span>
              </div>

              <h3 className="font-semibold text-slate-800 text-base mb-1">
                Complete Blood Count (CBC)
              </h3>
              <p className="text-slate-400 text-xs mb-5">
                Patient: Rahul Sharma &nbsp;|&nbsp; 28 May 2025
              </p>

              {/* Parameters grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {cbcParams.map((p) => (
                  <div key={p.label} className="bg-slate-50 rounded-xl p-3">
                    <p className="text-slate-400 text-xs mb-1">{p.label}</p>
                    <p className="font-semibold text-sm" style={{ color: colorMap[p.status] }}>
                      {p.value}
                    </p>
                    <div className="mt-1.5 h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${p.pct}%`, background: colorMap[p.status] }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                <span className="text-xs text-slate-400">Dr. A. Lalwani — MD Pathology</span>
                <Link href="/login" className="btn-primary py-1.5 px-3 text-xs rounded-lg no-underline">
                  View Full →
                </Link>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 right-0 bg-white rounded-xl px-3 py-2 shadow-lg flex items-center gap-2 z-20">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <div>
                <p className="text-xs font-semibold text-slate-800">Report Ready!</p>
                <p className="text-[10px] text-slate-400">Thyroid Profile</p>
              </div>
            </div>
            <div className="absolute -bottom-2 -left-6 bg-white rounded-xl px-3 py-2 shadow-lg flex items-center gap-2 z-20">
              <Wifi className="w-3.5 h-3.5 text-blue-600" />
              <div>
                <p className="text-xs font-semibold text-slate-800">Home Collection</p>
                <p className="text-[10px] text-slate-400">Available 6AM–10PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
