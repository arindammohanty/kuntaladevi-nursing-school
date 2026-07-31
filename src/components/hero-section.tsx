"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const highlights = [
  {
    title: "Compassion",
    highlight: "Meets Competence",
    description: "At Kuntaladevi Nursing School, we blend rigorous clinical practice with holistic student development to shape the future leaders of global healthcare.",
  },
  {
    title: "100% Clinical",
    highlight: "Placement Rate",
    description: "Our graduates are highly sought after by top-tier hospitals globally, ensuring an immediate transition from academic excellence to professional success.",
  },
  {
    title: "State-of-the-Art",
    highlight: "Simulation Labs",
    description: "Experience hands-on training in our advanced simulation facilities designed to mirror high-pressure, real-world clinical environments safely.",
  },
  {
    title: "Empowering Future",
    highlight: "Healthcare Leaders",
    description: "We are committed to nurturing not just skilled practitioners, but visionary leaders dedicated to elevating the standard of community health.",
  },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % highlights.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-pista-50/50 -skew-y-3 origin-top-left z-0" />
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left min-h-[450px] flex flex-col justify-center relative">
          <span className="inline-block py-1 px-3 rounded-full bg-pista-100 text-pista-800 font-semibold text-sm mb-6 border border-pista-200 shadow-sm w-fit mx-auto md:mx-0">
            Recognized for Excellence in Healthcare Education
          </span>
          
          <div className="relative min-h-[400px] md:min-h-[320px] w-full flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full flex flex-col justify-start"
              >
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
                  {highlights[currentIndex].title} <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pista-600 to-pista-400">
                    {highlights[currentIndex].highlight}
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                  {highlights[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mt-2">
            <button className="w-full sm:w-auto px-8 py-4 bg-pista-600 text-white rounded-xl font-bold text-lg hover:bg-pista-700 hover:shadow-lg transition-all focus:ring-2 focus:ring-offset-2 focus:ring-pista-600 outline-none">
              Explore Programs
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 rounded-xl font-bold text-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-slate-200 outline-none">
              Virtual Tour
            </button>
          </div>
          
          {/* Navigation Dots for Hero */}
          <div className="flex justify-center md:justify-start gap-2 mt-8 z-20 relative">
            {highlights.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? "bg-pista-600 w-6" : "bg-slate-300 hover:bg-pista-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="flex-1 relative w-full h-[300px] md:h-auto">
          <div className="absolute -inset-4 bg-pista-200 rounded-[3rem] blur-2xl opacity-40 animate-pulse" />
          <img 
            src="/hero.png" 
            alt="Nursing students in a simulation lab" 
            className="relative z-10 rounded-[2rem] shadow-2xl border-4 border-white object-cover aspect-[4/3] w-full"
          />
        </div>
      </div>
    </section>
  );
}
