"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const chairmanQuotes = [
  "Our mission extends beyond imparting medical knowledge. We are dedicated to nurturing profound empathy, ethical integrity, and resilient character in every student who walks through our doors. The future of healthcare relies on professionals who care as deeply as they think.",
  "In nursing, technical proficiency must be paired with genuine human connection. Our rigorous curriculum is designed to produce not just competent clinicians, but compassionate advocates for patient well-being.",
  "Education is the most powerful catalyst for change in community health. By equipping our students with state-of-the-art clinical skills and an unwavering moral compass, we are investing in the health of tomorrow's society.",
];

export function ChairmanSection() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % chairmanQuotes.length);
    }, 6000); // 6 seconds per quote slide

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-inner border border-slate-100 flex flex-col md:flex-row items-center gap-10">
          <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative rounded-full overflow-hidden border-8 border-white shadow-xl">
            <Image 
              src="/Chairman.png" 
              alt="Dr. Sushant Kumar Biswal"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left relative flex flex-col justify-center min-h-[350px]">
            <Quote size={48} className="text-pista-200 absolute -top-6 -left-6 md:-left-8 z-0 opacity-50" />
            
            <div className="relative h-[350px] md:h-[250px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuote}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <p className="text-lg md:text-2xl text-slate-700 italic leading-relaxed relative z-10 font-medium">
                    "{chairmanQuotes[currentQuote]}"
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="mt-4 relative z-10">
              <h4 className="text-xl font-bold text-slate-900">Dr. Sushant Kumar Biswal</h4>
              <p className="text-pista-600 font-semibold uppercase tracking-wide text-sm mt-1">Chairman, Kuntaladevi Nursing School</p>
            </div>

            {/* Navigation Dots for Quotes */}
            <div className="flex justify-center md:justify-start gap-2 mt-6 relative z-10">
              {chairmanQuotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentQuote(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentQuote ? "bg-pista-600 w-5" : "bg-slate-300 hover:bg-pista-400"
                  }`}
                  aria-label={`Go to quote ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
