import type { Metadata } from "next";
import LoginForm from "./LoginForm";
import {Activity,Lock,Bell,Download} from "lucide-react";

export const metadata: Metadata = {
  title: "Login — LAL Pathology Patient Portal",
  description: "Sign in to access your blood test reports securely.",
};

export default function LoginPage(){
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="hidden md:flex flex-col justify-center p-12 text-white" style={{
        background: "linear-gradient(160deg, #03357A, #0A5EC0, #1E78F0)"
      }}>
        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
          <Activity className="w-7 h-7 text-white"/>
        </div>
        <h2 className="text-3xl mb-3" style={{fontFamily:"DM Serif Display, serif"}}>
          Your health, in your hands
        </h2>
        <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-xs">
          Access your blood reports, track health trends, and share results with your
          doctor — all in one secure portal.
        </p>
        <div className="flex flex-col gap-3">
          {[
            { icon: Lock, text: "256-bit SSL encrypted reports"},
            { icon: Bell, text: "SMS alert when report is ready"},
            { icon: Download, text: "Download PDF anytime, anywhere"},
          ].map(({ icon: Icon, text })=>(
            <div key={text} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
              <Icon className="w-4 h-4 flex-shrink-0"/>
              <span className="text-sm">{text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 mb-8 md:hidden">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Activity className="w-4 h-4 text-white"/>
            </div>
            <span className="font-semibold text-slate-900"><span className="text-blue-600">LAL</span> Pathology</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-1" style={{ fontFamily: "DM Serif Display, serif" }}>
            Welcome back
          </h1>
          <p className="text-slate-400 text-sm mb-6">Sign in to access your health reports</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
