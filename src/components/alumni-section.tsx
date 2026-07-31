import React from "react";
import { InfiniteMarquee } from "./infinite-marquee";
import { Quote } from "lucide-react";

const alumniData = [
  {
    name: "Sarah Jenkins",
    year: "2019",
    role: "Clinical Nurse Expediter",
    quote: "The rigorous clinical training prepared me for the realities of fast-paced trauma care.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Michael Chen",
    year: "2021",
    role: "Advanced Practice Registered Nurse",
    quote: "Faculty mentorship was the key to my successful transition into advanced practice.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Emily Rodriguez",
    year: "2018",
    role: "Pediatric ICU Charge Nurse",
    quote: "The simulation labs provided a safe space to master complex pediatric protocols before entering the field.",
    image: "https://images.unsplash.com/photo-1594824436998-058a23116fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "David Thompson",
    year: "2022",
    role: "Surgical Oncology Nurse",
    quote: "The holistic approach to patient care taught here has defined my daily practice in oncology.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
];

export function AlumniSection() {
  const alumniCards = alumniData.map((alumnus, idx) => (
    <div 
      key={idx} 
      className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 flex flex-col h-full min-h-[250px] justify-between group hover:border-pista-300 transition-colors whitespace-normal"
    >
      <div className="flex gap-4 items-start">
        <img 
          src={alumnus.image} 
          alt={`Portrait of ${alumnus.name}`} 
          className="w-16 h-16 rounded-full object-cover shadow-md"
        />
        <div>
          <h4 className="font-bold text-slate-800">{alumnus.name}</h4>
          <p className="text-sm text-pista-600 font-medium">{alumnus.role}</p>
          <p className="text-xs text-slate-500">Class of {alumnus.year}</p>
        </div>
      </div>
      <div className="relative mt-4 bg-slate-50 p-4 rounded-2xl">
        <Quote size={16} className="text-pista-300 absolute -top-2 -left-1 bg-white" />
        <p className="text-slate-600 text-sm italic relative z-10 leading-relaxed">"{alumnus.quote}"</p>
      </div>
    </div>
  ));

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Alumni Legacy</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Graduates of Kuntaladevi Nursing School lead with empathy and excellence across the global healthcare landscape.
        </p>
      </div>
      
      {/* 
        Alumni marquee runs right-to-left continuously.
        It does not require strict interactivity controls as it is primarily passive consumption.
      */}
      <InfiniteMarquee 
        items={alumniCards} 
        baseVelocity={-40} 
        itemWidth={380} 
        gap={24}
        ariaLabel="Alumni success stories"
        isInteractive={false} // WCAG: Passive content doesn't strictly need pause, but good to have if requested. The prompt says Notices carousel strictly needs it.
      />
    </section>
  );
}
