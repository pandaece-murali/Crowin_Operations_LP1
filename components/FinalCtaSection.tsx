"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface FinalCtaSectionProps {
  onEnquireNow?: () => void;
}

export default function FinalCtaSection({ onEnquireNow }: FinalCtaSectionProps) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEnquire = () => {
    if (onEnquireNow) {
      onEnquireNow();
    } else {
      scrollTo("enquiry-form");
    }
  };

  return (
    <section className="relative py-14 sm:py-18 bg-[#050505] text-[#F2F4F7] overflow-hidden border-t border-white/10">
      {/* Intense centered ambient glow in COWRIN brand color */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF8A00]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-7">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-[#FF8A00]/15 border border-[#FF8A00]/30 text-[#FF8A00]">
          <span>TAKE THE FIRST STEP TODAY</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] max-w-4xl mx-auto">
          Start Building Your Healthcare{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A00] via-[#FFA834] to-[#FF8A00]">
            Operations Knowledge
          </span>
        </h2>

        {/* Subtitle & Paragraphs */}
        <div className="max-w-2xl mx-auto space-y-3">
          <p className="text-lg sm:text-xl font-medium text-slate-200">
            Explore the processes behind hospital billing, health insurance, and revenue cycle management learning pathway.
          </p>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            Whether you are a student, a fresher, or exploring a career in healthcare administration, begin by understanding how these essential operations work.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleEnquire}
            className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-base tracking-widest uppercase text-white transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer shadow-lg hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #FF8A00, #E07A00)",
              border: "1px solid #FF8A00",
              boxShadow: "0 20px 50px rgba(255, 138, 0, 0.45)",
            }}
          >
            <span>ENQUIRE NOW</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Micro Checklist */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF8A00]" />
            <span>Structured 3-Course Learning Pathway</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF8A00]" />
            <span>Open to Non-Medical Backgrounds</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF8A00]" />
            <span>Course Completion Certificate</span>
          </div>
        </div>

      </div>
    </section>
  );
}
