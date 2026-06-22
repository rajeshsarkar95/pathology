import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tests = [
  {
    icon: "🩸", name: "Complete Blood Count", desc: "Hemoglobin, WBC, platelets, RBC indices — essential health baseline.",
    count: "18 parameters", price: "₹299", accent: "#0A5EC0", bg: "#EBF3FF",
  },
  {
    icon: "🦋", name: "Thyroid Profile", desc: "TSH, T3, T4 levels for comprehensive thyroid function assessment.",
    count: "6 parameters", price: "₹599", accent: "#0D9488", bg: "#F0FDFA",
  },
  {
    icon: "🫀", name: "Liver Function Test", desc: "ALT, AST, bilirubin, albumin — complete liver health evaluation.",
    count: "12 parameters", price: "₹499", accent: "#C8293A", bg: "#FFF0F1",
  },
  {
    icon: "🫘", name: "Kidney Function Test", desc: "Creatinine, BUN, uric acid, eGFR for kidney health monitoring.",
    count: "10 parameters", price: "₹449", accent: "#D97706", bg: "#FFFBEB",
  },
  {
    icon: "💉", name: "Diabetes Test Panel", desc: "HbA1c, fasting glucose, insulin resistance — full diabetes workup.",
    count: "8 parameters", price: "₹399", accent: "#7C3AED", bg: "#F5F3FF",
  },
  {
    icon: "☀️", name: "Vitamin Test Panel", desc: "Vitamin D, B12, folate, ferritin — micronutrient deficiency screening.",
    count: "5 parameters", price: "₹699", accent: "#0891B2", bg: "#ECFEFF",
  },
];

export default function TestsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="section-label">Our Test Menu</p>
            <h2 className="section-title">Comprehensive Blood Test Categories</h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
              From routine checkups to specialised panels — all results delivered digitally within 24 hours.
            </p>
          </div>
          <Link href="/tests" className="flex items-center gap-2 btn-outline py-2 px-4 text-sm rounded-lg self-start md:self-auto no-underline whitespace-nowrap">
            View All Tests <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tests.map((t) => (
            <Link
              key={t.name}
              href="/signup"
              className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 no-underline relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: t.accent }} />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ background: t.bg }}>
                {t.icon}
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">{t.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{t.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium" style={{ color: t.accent }}>{t.count}</span>
                <span className="font-bold text-sm text-blue-600">{t.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
