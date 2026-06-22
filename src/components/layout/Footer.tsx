import Link from "next/link";
import { Activity } from "lucide-react";

const footerLinks = {
  Services: ["Blood Tests", "Home Collection", "Corporate Health", "Health Packages"],
  Portal: [
    { label: "Login", href: "/login" },
    { label: "Register", href: "/signup" },
    { label: "View Reports", href: "/dashboard" },
    { label: "Track Order", href: "/dashboard" },
  ],
  Company: ["About Us", "Careers", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-slate-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-white text-base">LAL Pathology</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 mb-4">
              NABL accredited diagnostic laboratory serving Uttarakhand since 1992.
              Accurate reports, trusted care.
            </p>
            <div className="flex gap-2">
              {["📘", "📸", "🐦", "▶️"].map((icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors text-sm"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            {footerLinks.Services.map((s) => (
              <span key={s} className="block text-sm text-slate-500 hover:text-slate-200 mb-2 cursor-pointer transition-colors">
                {s}
              </span>
            ))}
          </div>

          {/* Portal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Patient Portal</h4>
            {footerLinks.Portal.map((l) => (
              <Link key={l.href} href={l.href} className="block text-sm text-slate-500 hover:text-slate-200 mb-2 transition-colors no-underline">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            {footerLinks.Company.map((s) => (
              <span key={s} className="block text-sm text-slate-500 hover:text-slate-200 mb-2 cursor-pointer transition-colors">
                {s}
              </span>
            ))}
            <Link href="/contact" className="block text-sm text-slate-500 hover:text-slate-200 mb-2 transition-colors no-underline">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-5 gap-2">
          <p className="text-xs text-slate-600">
            © 2025 LAL Pathology Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            NABL No. MC-2847 | ISO 15189:2022
          </p>
        </div>
      </div>
    </footer>
  );
}
