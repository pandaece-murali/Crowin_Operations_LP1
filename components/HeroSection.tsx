"use client";

import React from "react";
import { ArrowRight, BookOpen, Award, TrendingUp, Stethoscope, CheckCircle2, Sparkles, Building2 } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

interface HeroSectionProps {
  onExploreClick?: () => void;
  selectedCourse?: string;
}

export default function HeroSection({
  onExploreClick,
  selectedCourse,
}: HeroSectionProps) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExplore = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      scrollTo("courses");
    }
  };

  const highlights = [
    {
      icon: BookOpen,
      title: "3 Specialized Learning Programs",
      desc: "Hospital Billing, Insurance & RCM",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Operations-Focused Curriculum",
      desc: "Real-world hospital workflows",
    },
    {
      icon: Award,
      title: "Certificate Programs",
      desc: "Verified course completion credential",
    },
    {
      icon: TrendingUp,
      title: "Career-Oriented Learning",
      desc: "Foundation for hospital admin & operations",
    },
  ];

  return (
    <section className="relative min-h-[90vh] bg-[#050505] text-white pt-10 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-grid-dark">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF5A1F]/15 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[420px] bg-[#FF5A1F]/10 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Headlines, Highlights, and Value Prop */}
          <div className="lg:col-span-7 space-y-8 pt-2">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F]">
              <span>HEALTHCARE REVENUE OPERATIONS MASTERY</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                Build Your Foundation in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] via-[#ff7843] to-[#FF5A1F]">
                  Healthcare Billing, Insurance
                </span>{" "}
                &amp; Revenue Operations
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Learn how hospitals manage billing, process insurance claims, and handle the financial side of healthcare through one structured learning pathway.
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm leading-relaxed max-w-2xl flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-0.5" />
                <span>
                  <strong>Designed for:</strong> Students, freshers, and aspiring healthcare operations professionals who want to understand how healthcare revenue processes work.
                </span>
              </div>
            </div>

            {/* Primary CTA: Exactly one focused CTA */}
            <div className="pt-2">
              <button
                onClick={handleExplore}
                className="px-8 py-4 rounded-xl font-extrabold text-base tracking-wider uppercase text-white transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #FF5A1F, #E14B16)",
                  border: "1px solid #FF5A1F",
                  boxShadow: "0 16px 40px rgba(255, 90, 31, 0.35)",
                }}
              >
                <span>EXPLORE THE PROGRAM</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Key Highlights Grid */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-4">
                Program Key Highlights
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#FF5A1F]/40 transition-colors flex items-start gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 flex items-center justify-center text-[#FF5A1F] shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Micro Trust Indicators */}
            <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#FF5A1F]" />
                <span>Zero Medical Background Required</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#FF5A1F]" />
                <span>Structured Pathway</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#FF5A1F]" />
                <span>100% Practical Operations Focus</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Conversion Form (Page 2 of PDF) */}
          <div className="lg:col-span-5 relative">
            {/* Visual badge top right */}
            <div className="absolute -top-3 right-6 z-20 px-3 py-1 rounded-full text-[11px] font-bold bg-[#FF5A1F] text-white shadow-lg flex items-center gap-1">
              ADMISSIONS OPEN
            </div>

            <EnquiryForm
              initialCourse={selectedCourse}
              id="enquiry-form"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
