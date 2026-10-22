"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Gift } from "lucide-react";

interface StickyBottomCtaProps {
  onEnquireClick: () => void;
}

export default function StickyBottomCta({ onEnquireClick }: StickyBottomCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user scrolls past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-md border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.85)] py-2.5 sm:py-3 px-3.5 sm:px-6 transition-all duration-300 animate-in slide-in-from-bottom pb-[max(0.6rem,env(safe-area-inset-bottom))]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4">

        {/* Content (Visible on Both Mobile and Desktop) */}
        <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2 min-w-0">
          <div className="min-w-0 text-left w-full sm:w-auto">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs sm:text-sm font-bold text-white truncate font-heading">
                Healthcare Revenue Operations Mastery
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#FF8A00] text-white shadow-xs shrink-0">
                <Gift className="w-3 h-3 shrink-0" /> FREE MT&amp;A COURSE
              </span>
            </div>
            <p className="text-[11px] text-slate-300 truncate mt-0.5">
              🎁 Includes <strong className="text-white">Human Anatomy &amp; Medical Terminology</strong> course 100% FREE with enrolment
            </p>
          </div>
        </div>

        {/* Right CTA Button */}
        <div className="w-full sm:w-auto shrink-0 flex justify-center">
          <button
            onClick={onEnquireClick}
            className="w-full sm:w-auto px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl font-black text-xs sm:text-sm tracking-wider uppercase text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #FF8A00, #E07A00)",
              boxShadow: "0 8px 25px rgba(255, 138, 0, 0.45)",
            }}
          >
            <span>ENQUIRE NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
