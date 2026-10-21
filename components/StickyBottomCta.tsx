"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0B0B0B]/95 backdrop-blur-md border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] py-3 px-4 sm:px-6 transition-all duration-300 animate-in slide-in-from-bottom pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        {/* Left Information (Desktop only: hidden on mobile so button has clean, dedicated space) */}
        <div className="hidden sm:flex items-center gap-3 min-w-0">
          <div className="truncate">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-white truncate">
                Healthcare Revenue Operations Mastery
              </span>
              <span className="hidden md:inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">
                Admissions Open
              </span>
            </div>
            <p className="text-[11px] text-slate-400 truncate">
              Hospital Billing &bull; Insurance Specialist &bull; RCM Mastery &bull; Certificate Programs
            </p>
          </div>
        </div>

        {/* Right CTA Button: Full width & centered on mobile, right-aligned on desktop */}
        <div className="w-full sm:w-auto shrink-0 flex justify-center">
          <button
            onClick={onEnquireClick}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-3 rounded-xl font-black text-sm tracking-wider uppercase text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #FF5A1F, #E14B16)",
              boxShadow: "0 8px 25px rgba(255, 90, 31, 0.45)",
            }}
          >
            {/* Mobile: punchy and fits comfortably on all mobile screens */}
            <span className="sm:hidden">ENQUIRE NOW</span>
            {/* Desktop: detailed phrasing */}
            <span className="hidden sm:inline">Enquire Now to Find the Right Program</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
