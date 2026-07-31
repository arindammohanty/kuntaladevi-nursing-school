"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { GraduationCap, Stethoscope, Award, FileText, ArrowRight } from "lucide-react";

export function BentoGrid() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
        {/* Primary Card: Our Programs (Spans 2 cols, 2 rows on large screens) */}
        <motion.div
          variants={cardVariants}
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-pista-500 rounded-3xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden text-white"
        >
          <div className="absolute -right-10 -top-10 opacity-10">
            <GraduationCap size={200} />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 z-10 relative text-white">Our Academic Programs</h2>
            <p className="text-pista-50 font-medium z-10 relative mb-6 max-w-md">
              Comprehensive nursing education designed to produce compassionate, highly-skilled healthcare leaders.
            </p>
            <div className="flex flex-col gap-3 z-10 relative">
              {['B.Sc. Nursing', 'M.Sc. Nursing', 'General Nursing and Midwifery (GNM)'].map((prog) => (
                <div key={prog} className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-4 py-3 rounded-2xl w-fit hover:bg-white/30 transition-colors cursor-pointer border border-white/10 shadow-sm">
                  <span className="font-semibold">{prog}</span>
                  <ArrowRight size={16} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Media Card: Clinical Facilities */}
        <motion.div
          variants={cardVariants}
          className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 rounded-3xl relative overflow-hidden shadow-xl bg-slate-900 group"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 z-10">
            <div className="flex items-center gap-2 text-pista-300 mb-2">
              <Stethoscope size={20} />
              <span className="font-semibold text-sm uppercase tracking-wider">Facilities</span>
            </div>
            <h3 className="text-xl font-bold text-white">State-of-the-Art Simulation Labs</h3>
          </div>
        </motion.div>

        {/* Statistics Card: Institutional Excellence */}
        <motion.div
          variants={cardVariants}
          className="col-span-1 rounded-3xl bg-white shadow-xl border border-slate-100 p-6 flex flex-col justify-center items-center text-center"
        >
          <div className="bg-pista-100 p-4 rounded-full text-pista-600 mb-4">
            <Award size={32} />
          </div>
          <h3 className="text-4xl font-extrabold text-slate-800 mb-2">100%</h3>
          <p className="text-slate-500 font-medium">Clinical Placement Rate</p>
        </motion.div>

        {/* Action Card: Admissions */}
        <motion.div
          variants={cardVariants}
          className="col-span-1 rounded-3xl bg-pista-900 text-white shadow-xl p-6 flex flex-col justify-between"
        >
          <div>
            <div className="bg-white/10 w-fit p-3 rounded-2xl mb-4">
              <FileText size={24} className="text-pista-200" />
            </div>
            <h3 className="text-xl font-bold mb-2">Admissions & Aid</h3>
            <p className="text-pista-100 text-sm mb-6">
              Review requirements, deadlines, and financial aid opportunities for the upcoming term.
            </p>
          </div>
          <button className="w-full py-3 bg-white text-pista-900 font-bold rounded-xl hover:bg-pista-50 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pista-900 outline-none">
            Apply Now
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
