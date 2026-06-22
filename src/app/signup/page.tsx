import type { Metadata } from "next";
import SignupForm from "./SignupForm";
import { Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Register — LAL Pathology",
  description: "Create your LAL Pathology patient account.",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="hidden md:flex flex-col justify-center p-12 text-white" style={{
        background: "linear-gradient(160deg, #03357A, #0A5EC0, #1E78F0)"
      }}>
        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
          <Activity className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-3xl mb-3" style={{ fontFamily: "DM Serif Display, serif" }}>
          Join 50,000+ patients who trust LAL Pathology
        </h2>
        <p className="text-white/70 text-sm leading-relaxed mb-8">
          Secure, fast, and NABL-certified. Your health data stays private, always.
        </p>
        <div className="bg-white/10 rounded-2xl p-5">
          <p className="text-white/60 text-xs mb-3 uppercase tracking-wider font-medium">What you get</p>
          {["Instant digital report access","24-hr report delivery","Trend tracking over time","Share with doctors securely"].map(f => (
            <div key={f} className="flex items-center gap-2 mb-2 text-sm text-white/80">
              <span className="text-emerald-400">✓</span> {f}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-slate-900 mb-1" style={{ fontFamily: "DM Serif Display, serif" }}>
            Create Account
          </h1>
          <p className="text-slate-400 text-sm mb-6">Get access to your reports instantly</p>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
