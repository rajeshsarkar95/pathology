import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "./ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — LAL Pathology",
  description: "Find our diagnostic centres in Dehradun, Rishikesh, Roorkee. Book appointments, get directions, or reach our team.",
};

const branches = ["Rajpur Road, Dehradun (Main)", "Haridwar Road, Rishikesh", "Civil Lines, Roorkee", "New Tehri, Tehri Garhwal"];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <div className="bg-slate-900 py-12 px-4 text-center">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-white text-3xl mb-3" style={{ fontFamily: "DM Serif Display, serif" }}>Contact & Locations</h1>
          <p className="text-slate-400 text-sm">Visit us, call us, or send a message — we respond within 2 hours.</p>
        </div>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <div className="space-y-6 mb-8">
                {[
                  { icon: MapPin, title: "Main Laboratory", detail: "45-A, Rajpur Road, Near Clock Tower,\nDehradun, Uttarakhand – 248001" },
                  { icon: Phone, title: "Phone & WhatsApp", detail: "+91 135 2650 400\n+91 98970 45632 (WhatsApp)" },
                  { icon: Mail, title: "Email", detail: "reports@lalpathology.in\nsupport@lalpathology.in" },
                  { icon: Clock, title: "Lab Hours", detail: "Mon–Sat: 6:00 AM – 8:00 PM\nSunday: 7:00 AM – 1:00 PM" },
                ].map(({ icon: Icon, title, detail }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm mb-1">{title}</p>
                      <p className="text-slate-500 text-sm whitespace-pre-line leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <p className="font-semibold text-blue-700 text-sm mb-3">🏥 All Branch Centres</p>
                <ul className="space-y-1.5">
                  {branches.map(b => (
                    <li key={b} className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Map + Form */}
            <div>
              {/* Map placeholder */}
              <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl h-56 flex items-center justify-center border border-slate-200 mb-5">
                <div className="text-center">
                  <p className="text-4xl mb-2">📍</p>
                  <p className="font-semibold text-slate-700 text-sm">LAL Pathology — Dehradun</p>
                  <p className="text-slate-400 text-xs mt-1">45-A, Rajpur Road, Dehradun</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 btn-primary py-1.5 px-4 text-xs rounded-lg no-underline"
                  >
                    Open in Maps →
                  </a>
                </div>
              </div>

              {/* Contact form */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-800 mb-4">Send us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
