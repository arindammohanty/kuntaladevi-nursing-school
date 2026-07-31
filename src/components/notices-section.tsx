import React from "react";
import { InfiniteMarquee } from "./infinite-marquee";
import { Calendar, BellRing, ExternalLink } from "lucide-react";
import Link from "next/link";

const noticesData = [
  {
    id: 1,
    category: "Academic",
    date: "Oct 15, 2024",
    title: "Revised Examination Schedule for B.Sc. 2nd Year",
    link: "#",
    urgent: true,
  },
  {
    id: 2,
    category: "Clinical",
    date: "Oct 18, 2024",
    title: "Mandatory Clinical Rotation Briefing (Pediatrics)",
    link: "#",
    urgent: false,
  },
  {
    id: 3,
    category: "Event",
    date: "Nov 02, 2024",
    title: "Annual Healthcare Symposium: Innovations in Nursing",
    link: "#",
    urgent: false,
  },
  {
    id: 4,
    category: "Administrative",
    date: "Oct 25, 2024",
    title: "Deadline for Semester Fee Submission Extended",
    link: "#",
    urgent: true,
  },
  {
    id: 5,
    category: "Community",
    date: "Nov 10, 2024",
    title: "DISHA Initiative: Rural Health Camp Volunteers Needed",
    link: "#",
    urgent: false,
  }
];

export function NoticesSection() {
  const noticeCards = noticesData.map((notice) => (
    <div 
      key={notice.id} 
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col h-full min-h-[180px] justify-between transition-all hover:shadow-md hover:border-pista-300 whitespace-normal"
    >
      <div>
        <div className="flex justify-between items-start mb-3">
          <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
            notice.urgent ? "bg-red-100 text-red-700" : "bg-pista-100 text-pista-800"
          }`}>
            {notice.category}
          </span>
          <div className="flex items-center text-slate-400 text-sm gap-1">
            <Calendar size={14} />
            <span aria-label={`Date: ${notice.date}`}>{notice.date}</span>
          </div>
        </div>
        <h4 className="font-bold text-slate-800 leading-snug line-clamp-2">
          {notice.title}
        </h4>
      </div>
      
      {/* 
        The link must be keyboard accessible. 
        Focus rings are explicitly defined for high visibility (WCAG 2.4.13 Focus Appearance)
      */}
      <Link 
        href={notice.link}
        className="inline-flex items-center gap-2 text-sm font-semibold text-pista-700 hover:text-pista-800 group w-fit focus:outline-none focus:ring-2 focus:ring-pista-600 focus:ring-offset-2 rounded-sm"
        aria-label={`Read more about ${notice.title}`}
      >
        <span>Read Full Notice</span>
        <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  ));

  return (
    <section className="py-16 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 mb-6 flex items-center gap-3">
        <div className="bg-pista-100 p-2 rounded-xl text-pista-600">
          <BellRing size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Institutional Notices</h2>
      </div>
      
      {/* 
        Notices marquee runs left-to-right (positive velocity).
        Strict interactivity controls are mandated here for accessibility.
      */}
      <InfiniteMarquee 
        items={noticeCards} 
        baseVelocity={30} 
        itemWidth={320} 
        gap={20}
        ariaLabel="Recent institutional notices"
        isInteractive={true} 
      />
    </section>
  );
}
