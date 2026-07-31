import React from "react";
import { BentoGrid } from "../components/bento-grid";
import { NoticesSection } from "../components/notices-section";
import { AlumniSection } from "../components/alumni-section";
import { HeroSection } from "../components/hero-section";
import { ChairmanSection } from "../components/chairman-section";
import { HeartPulse } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-pista-700">
            <HeartPulse size={32} strokeWidth={2.5} />
            <span className="text-xl font-extrabold tracking-tight">Kuntaladevi<br/><span className="text-sm font-semibold tracking-normal text-slate-500 uppercase">Nursing School</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <Link href="#" className="hover:text-pista-600 transition-colors">Programs</Link>
            <Link href="#" className="hover:text-pista-600 transition-colors">Admissions</Link>
            <Link href="#" className="hover:text-pista-600 transition-colors">Faculty</Link>
            <Link href="#" className="hover:text-pista-600 transition-colors">Campus Life</Link>
          </nav>
          <button className="bg-pista-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-pista-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-pista-600 outline-none">
            Apply Now
          </button>
        </div>
      </header>

      {/* Dynamic Hero Section */}
      <HeroSection />

      {/* Dynamic Chairman Section */}
      <ChairmanSection />

      {/* Dynamic Bento Grid Layout */}
      <BentoGrid />

      {/* Accessible Notices Carousel */}
      <NoticesSection />

      {/* Infinite Alumni Marquee */}
      <AlumniSection />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 text-pista-500 mb-6">
                <HeartPulse size={28} strokeWidth={2.5} />
                <span className="text-xl font-extrabold text-white tracking-tight">Kuntaladevi</span>
              </div>
              <p className="text-sm leading-relaxed mb-6 text-slate-400">
                Empowering the next generation of nursing professionals with world-class education, advanced clinical simulation, and a profound commitment to compassionate care.
              </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Academics</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-pista-400 transition-colors">B.Sc. Nursing</Link></li>
              <li><Link href="#" className="hover:text-pista-400 transition-colors">M.Sc. Nursing</Link></li>
              <li><Link href="#" className="hover:text-pista-400 transition-colors">GNM Program</Link></li>
              <li><Link href="#" className="hover:text-pista-400 transition-colors">Clinical Placements</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Admissions</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-pista-400 transition-colors">How to Apply</Link></li>
              <li><Link href="#" className="hover:text-pista-400 transition-colors">Tuition & Financial Aid</Link></li>
              <li><Link href="#" className="hover:text-pista-400 transition-colors">Requirements</Link></li>
              <li><Link href="#" className="hover:text-pista-400 transition-colors">Campus Tours</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>5JG8+R87, Near BOI ATM</li>
              <li>BJB Nagar, Khurdha</li>
              <li>Bhubaneshwar, Odisha 752056</li>
              <li>Email: admissions@kuntaladevi.edu</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Kuntaladevi Nursing School. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Accessibility Statement</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
