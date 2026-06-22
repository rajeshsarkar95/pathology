import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Blood Tests — LAL Pathology",
  description: "Browse our comprehensive menu of 200+ blood tests. CBC, Thyroid, LFT, KFT, Diabetes, Vitamin panels and more.",
};

const tests = [
  { icon: "🩸", name: "Complete Blood Count (CBC)", desc: "Full haematology panel: haemoglobin, WBC differential, platelets, PCV, MCV, MCH, MCHC.", params: 18, price: 299, accent: "#0A5EC0", bg: "#EBF3FF" },
  { icon: "🦋", name: "Thyroid Profile (T3, T4, TSH)", desc: "Comprehensive thyroid function including free and total hormone levels.", params: 6, price: 599, accent: "#0D9488", bg: "#F0FDFA" },
  { icon: "🫀", name: "Liver Function Test (LFT)", desc: "SGOT, SGPT, Bilirubin (total/direct/indirect), Albumin, Globulin, ALP.", params: 12, price: 499, accent: "#C8293A", bg: "#FFF0F1" },
  { icon: "🫘", name: "Kidney Function Test (KFT)", desc: "Blood Urea Nitrogen, Creatinine, Uric Acid, eGFR, Electrolytes.", params: 10, price: 449, accent: "#D97706", bg: "#FFFBEB" },
  { icon: "💉", name: "Diabetes Panel (HbA1c)", desc: "Fasting Glucose, Post-Prandial Glucose, HbA1c, Insulin, C-Peptide.", params: 8, price: 399, accent: "#7C3AED", bg: "#F5F3FF" },
  { icon: "☀️", name: "Vitamin Deficiency Panel", desc: "Vitamin D3, Vitamin B12, Folic Acid, Ferritin, Iron Studies.", params: 5, price: 699, accent: "#0891B2", bg: "#ECFEFF" },
  { icon: "❤️", name: "Lipid Profile", desc: "Total Cholesterol, HDL, LDL, VLDL, Triglycerides, Cardiac Risk Ratio.", params: 7, price: 349, accent: "#0A5EC0", bg: "#EBF3FF" },
  { icon: "🧬", name: "Full Body Checkup", desc: "Complete 80-parameter panel — CBC, LFT, KFT, Thyroid, Lipid, Vitamins, Urine R/E.", params: 80, price: 1499, accent: "#C8293A", bg: "#FFF0F1" },
  { icon: "🩺", name: "Iron Studies", desc: "Serum Iron, TIBC, Transferrin Saturation, Serum Ferritin.", params: 4, price: 449, accent: "#0D9488", bg: "#F0FDFA" },
  { icon: "🦠", name: "HBA1C (Glycated Haemoglobin)", desc: "3-month average blood sugar control for diabetes management.", params: 1, price: 299, accent: "#7C3AED", bg: "#F5F3FF" },
  { icon: "🔬", name: "Urine Routine Examination", desc: "Physical, chemical and microscopic examination of urine.", params: 24, price: 149, accent: "#D97706", bg: "#FFFBEB" },
  { icon: "💊", name: "Calcium & Phosphorus", desc: "Serum Calcium, Phosphorus, Magnesium — bone metabolism panel.", params: 3, price: 299, accent: "#0891B2", bg: "#ECFEFF" },
];

export default function TestsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <div className="bg-blue-600 py-14 px-4 text-center">
          <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-3">Test Catalogue</p>
          <h1 className="text-white text-4xl mb-4" style={{ fontFamily: "DM Serif Display, serif" }}>All Available Blood Tests</h1>
          <p className="text-blue-100 text-sm max-w-md mx-auto">
            Browse our comprehensive menu of diagnostic tests. All reports within 24 hours. Home collection available.
          </p>
        </div>

        {/* Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {tests.map((t) => (
                <Link
                  key={t.name}
                  href="/signup"
                  className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 no-underline relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: t.accent }} />
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ background: t.bg }}>
                    {t.icon}
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm mb-2">{t.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">{t.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-500">{t.params} params</span>
                    <span className="font-bold text-blue-600 text-sm">₹{t.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
