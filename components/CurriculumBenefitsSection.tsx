"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, FileSpreadsheet, ShieldCheck, RefreshCw, AlertTriangle, DollarSign, BarChart3, Check, Sparkles, Building2 } from "lucide-react";

interface CurriculumBenefitsSectionProps {
  onEnquireBundle?: () => void;
}

export default function CurriculumBenefitsSection({
  onEnquireBundle,
}: CurriculumBenefitsSectionProps) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEnquire = () => {
    if (onEnquireBundle) {
      onEnquireBundle();
    } else {
      scrollTo("enquiry-form");
    }
  };

  const coreModules = [
    {
      title: "Hospital Billing Workflows",
      desc: "Understand how patient information, hospital services, billing, and collections fit together.",
      icon: FileSpreadsheet,
      tag: "PATIENT BILLING",
    },
    {
      title: "Health Insurance Operations",
      desc: "Learn the basics of insurance verification, authorization, claims processing, and reimbursement.",
      icon: ShieldCheck,
      tag: "INSURANCE & TPA",
    },
    {
      title: "Revenue Cycle Management",
      desc: "Discover how billing, claims, payment follow-ups, and revenue tracking connect across the healthcare revenue cycle.",
      icon: RefreshCw,
      tag: "LIFECYCLE",
    },
    {
      title: "Claims & Denial Management",
      desc: "Understand why claims may be denied and how denial management and follow-up support revenue operations.",
      icon: AlertTriangle,
      tag: "REVENUE PROTECTION",
    },
    {
      title: "Accounts Receivable",
      desc: "Learn what outstanding payments mean and how healthcare teams track amounts due.",
      icon: DollarSign,
      tag: "AR TRACKING",
    },
    {
      title: "Healthcare Revenue Analytics",
      desc: "Get introduced to the role of data and reporting in understanding revenue performance.",
      icon: BarChart3,
      tag: "DATA & REPORTING",
    },
  ];

  const pathwayBenefits = [
    {
      bold: "Three programs in one pathway",
      text: "Study hospital billing, health insurance, and revenue cycle management.",
    },
    {
      bold: "Connected learning",
      text: "Understand how these functions relate to one another.",
    },
    {
      bold: "Practical process knowledge",
      text: "Explore workflows used in healthcare revenue operations.",
    },
    {
      bold: "Career-oriented foundation",
      text: "Build subject knowledge relevant to healthcare administration, billing, insurance coordination, and revenue cycle roles.",
    },
    {
      bold: "Structured progression",
      text: "Develop an understanding of individual processes and how they contribute to the wider revenue cycle.",
    },
  ];

  return (
    <section id="curriculum" className="py-24 sm:py-32 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F]">
            <span>WHAT YOU&apos;LL LEARN &amp; PROGRAM BENEFITS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Understand the Processes Behind{" "}
            <span className="text-[#FF5A1F]">Healthcare Revenue</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Build your knowledge across three connected areas of healthcare operations.
          </p>
        </div>

        {/* 6 Core Curriculum Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {coreModules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#FF5A1F]/50 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-orange-100/70 text-[#FF5A1F] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FF5A1F] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-slate-200/70 text-slate-700">
                      {mod.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#FF5A1F] transition-colors">
                    {mod.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {mod.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-semibold text-[#FF5A1F]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Key Healthcare Skill</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sub-section: Why Choose the Combined Learning Pathway? */}
        <div className="rounded-3xl bg-[#0B0B0B] text-white p-8 sm:p-12 lg:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle glowing orb */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5A1F]/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-6xl mx-auto space-y-10 relative z-10">
            <div className="text-center space-y-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#FF5A1F]/20 text-[#FF5A1F] border border-[#FF5A1F]/30">
                THE COWRIN ADVANTAGE
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Why Choose the Combined Learning Pathway?
              </h3>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
                Discover the value of studying hospital billing, health insurance, and revenue cycle management as an integrated, real-world framework.
              </p>
            </div>

            {/* 2-Column Grid: Benefits on Left, Visual Operations Image on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Column: Benefits List */}
              <div className="lg:col-span-7 space-y-3.5">
                {pathwayBenefits.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#FF5A1F]/40 transition-colors flex items-start gap-3.5"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#FF5A1F]/20 text-[#FF5A1F] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white font-bold">{item.bold}:</strong>{" "}
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Authentic Operations Photo */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl relative bg-slate-900 group">
                  <Image
                    src="/images/hospital-billing-desk.jpg"
                    alt="Hospital Billing Operations and Electronic Health Records"
                    width={500}
                    height={340}
                    className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white">
                    <span className="text-[10px] font-bold text-[#FF5A1F] uppercase tracking-wider block">
                      Practical Process Knowledge
                    </span>
                    <span className="text-xs font-medium text-slate-200">
                      Real-world workflows used in hospital administration &amp; billing
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Single Focused CTA */}
            <div className="pt-2 text-center">
              <button
                onClick={handleEnquire}
                className="px-8 py-4 rounded-xl font-black text-sm tracking-wider uppercase text-white transition-all duration-300 inline-flex items-center gap-2 group cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #FF5A1F, #E14B16)",
                  border: "1px solid #FF5A1F",
                  boxShadow: "0 16px 40px rgba(255, 90, 31, 0.4)",
                }}
              >
                <span>ENQUIRE ABOUT THE COMPLETE PROGRAM</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
