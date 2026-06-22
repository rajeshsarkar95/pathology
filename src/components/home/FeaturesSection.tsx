const features = [
  { icon: "📱", title: "Digital Reports Instantly", desc: "Receive your reports via SMS, email, and the app the moment they're validated by our pathologists." },
  { icon: "🔒", title: "Bank-Grade Security", desc: "Your health data is encrypted end-to-end. Share reports selectively with doctors using secure links." },
  { icon: "🏡", title: "Home Sample Collection", desc: "Book a phlebotomist visit at home. Available 6AM to 10PM, 7 days a week across the city." },
  { icon: "📊", title: "Historical Trend Tracking", desc: "Compare your test results over time with smart trend charts and easy-to-understand interpretations." },
  { icon: "👨‍⚕️", title: "Expert Pathologist Review", desc: "All reports are validated by NABL-certified MD pathologists before release to ensure accuracy." },
  { icon: "💬", title: "Report Interpretation Help", desc: "Confused by your results? Chat with our lab experts for a complimentary 10-minute consult." },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">Built for modern patient care</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-xl mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
