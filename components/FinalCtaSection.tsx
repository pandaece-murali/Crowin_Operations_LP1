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
    <section className="relative py-12 sm:py-20 bg-[#050505] text-[#F2F4F7] overflow-hidden border-t border-white/10">
      {/* Background ambient glow in brand colors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] h-[280px] sm:h-[400px] bg-[#FF8A00]/15 rounded-full blur-[120px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[240px] sm:w-[350px] h-[240px] sm:h-[350px] bg-[#1D4ED8]/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 sm:space-y-6">
        
        {/* Eyebrow */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-black tracking-widest uppercase bg-[#FF8A00]/15 border border-[#FF8A00]/30 text-[#FF8A00]">
            <span>TAKE THE FIRST STEP TODAY</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] max-w-3xl mx-auto">
          Start Building Your Healthcare{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A00] via-[#FFA834] to-[#FF8A00]">
            Operations Knowledge
          </span>
        </h2>

        {/* Subtitle & Paragraphs */}
        <div className="max-w-2xl mx-auto space-y-2">
          <p className="text-sm sm:text-lg font-medium text-slate-200 leading-snug">
            Explore the processes behind hospital billing, health insurance, and revenue cycle management learning pathway.
          </p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
            Whether you are a student, a fresher, or exploring a career in healthcare administration, begin by understanding how these essential operations work.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2 sm:pt-4 flex justify-center">
          <button
            onClick={handleEnquire}
            className="w-full sm:w-auto px-6 sm:px-9 py-3.5 sm:py-4.5 rounded-xl font-extrabold text-sm sm:text-base text-white transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #FF8A00, #E07A00)",
              border: "1px solid #FF8A00",
              boxShadow: "0 16px 40px rgba(255, 138, 0, 0.40)",
            }}
          >
            <span className="text-center leading-snug">
              Enquire Now to Find the Right Program
            </span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Micro Checklist */}
        <div className="pt-5 sm:pt-7 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-6 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0" />
            <span>Structured 3-Course Learning Pathway</span>
          </div>
          <div className="flex items-center gap-2 text-center sm:text-left">
            <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0" />
            <span>Free Medical Terminology &amp; Human Anatomy Course</span>
          </div>
          <div className="flex items-center gap-2 text-center sm:text-left">
            <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0" />
            <span>Open to Non-Medical Backgrounds</span>
          </div>
          <div className="flex items-center gap-2 text-center sm:text-left">
            <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0" />
            <span>Course Completion Certificate</span>
          </div>
        </div>

      </div>
    </section>
  );
}
