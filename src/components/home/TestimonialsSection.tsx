const testimonials = [
  {
    text: "Reports came within 12 hours, and the online portal is incredibly clean. I could share my thyroid report with my doctor in one click. Excellent experience.",
    name: "Rahul Sharma", role: "Software Engineer, Dehradun", initials: "RS", color: "#0A5EC0",
  },
  {
    text: "The home collection service is a lifesaver for elderly patients. The phlebotomist arrived on time and the results were perfect. Highly recommend LAL Pathology.",
    name: "Priya Gupta", role: "Homemaker, Rishikesh", initials: "PG", color: "#0D9488",
  },
  {
    text: "As a doctor, I recommend LAL Pathology to all my patients. Their reports are accurate, standardised, and the digital portal makes follow-up incredibly efficient.",
    name: "Dr. Manish Verma", role: "General Physician, AIIMS Rishikesh", initials: "DM", color: "#C8293A",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label">Patient Stories</p>
          <h2 className="section-title">Trusted by thousands across the city</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-amber-400 text-sm mb-4">★★★★★</div>
              <p className="text-slate-600 text-sm leading-relaxed italic mb-5">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
