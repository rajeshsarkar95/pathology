"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tests", href: "/tests" },
  { label: "Book Appointment", href: "/#booking" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-slate-900 text-base">
            <span className="text-blue-600">LAL</span> Pathology
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <Link href="/login" className="btn-outline py-2 px-4 text-sm rounded-lg">
            Login
          </Link>
          <Link href="/signup" className="btn-primary py-2 px-4 text-sm rounded-lg">
            Get Reports
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300",
        menuOpen ? "max-h-80" : "max-h-0"
      )}>
        <div className="px-4 py-3 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="py-2.5 px-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2 pb-1">
            <Link href="/login" className="btn-outline flex-1 text-center py-2 text-sm rounded-lg">Login</Link>
            <Link href="/signup" className="btn-primary flex-1 text-center py-2 text-sm rounded-lg">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
