"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, FileText, ShieldAlert, CreditCard, PieChart, Sparkles } from "lucide-react";

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export default function AboutSection({ onLearnMore }: AboutSectionProps) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const workflowSteps = [
    {
      num: "01",
      title: "Patient & Hospital Billing",
      desc: "Patient registration, OPD/IPD workflows, itemized tariffs, pharmacy & diagnostics billing.",
      icon: FileText,
    },
    {
      num: "02",
      title: "Health Insurance & TPAs",
      desc: "Policy verification, cashless pre-authorization, claim submission & insurer coordination.",
      icon: ShieldAlert,
    },
    {
      num: "03",
      title: "Collections & AR Tracking",
      desc: "Tracking outstanding balances, payment follow-ups, and handling denial management.",
      icon: CreditCard,
    },
    {
      num: "04",
      title: "Revenue Optimization",
      desc: "Hospital financial audits, revenue leak prevention, and healthcare performance analytics.",
      icon: PieChart,
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-white text-slate-900 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Grid: Narrative Copy on Left, Dual Photo Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT COWRIN</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Learn the Business Side of Healthcare
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>
                Healthcare involves more than patient care. Hospitals also need teams to manage billing, coordinate insurance claims, track payments, and maintain revenue workflows.
              </p>
              <p>
                <strong className="text-slate-900 font-semibold">COWRIN</strong> offers career-focused learning programs designed to help learners understand these essential healthcare operations.
              </p>
              <p>
                The <span className="text-[#FF5A1F] font-semibold">Healthcare Revenue Operations Mastery Program</span> brings three learning areas together, helping you build knowledge of the processes that support hospital administration and financial operations.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => scrollTo("courses")}
                className="px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide text-white transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #FF5A1F, #E14B16)",
                  boxShadow: "0 10px 25px rgba(255, 90, 31, 0.28)",
                }}
              >
                <span>View The 3 Learning Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Clean, Perfectly Aligned Dual Photography Showcase */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Doctor & Insurance Coordination */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 group flex flex-col">
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <Image
                    src="/images/doctor-insurance-coordination.jpg"
                    alt="Doctor and Healthcare Operations Specialist Reviewing Claims"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white">
                    <span className="text-[10px] font-bold text-[#FF5A1F] uppercase tracking-wider block">
                      Hospital Administration
                    </span>
                    <span className="text-xs font-semibold leading-snug block">
                      Doctor &amp; TPA Claim Coordination
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Billing & EHR Operations Desk */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 group flex flex-col">
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <Image
                    src="/images/hospital-billing-desk.jpg"
                    alt="Hospital Billing Operations and Electronic Health Records"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white">
                    <span className="text-[10px] font-bold text-[#FF5A1F] uppercase tracking-wider block">
                      Operations Desk
                    </span>
                    <span className="text-xs font-semibold leading-snug block">
                      Hospital Billing &amp; EHR Workflows
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* The 4 Connected Process Cards Strip */}
        <div className="pt-6 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider font-extrabold text-[#FF5A1F]">
                PROCESS ARCHITECTURE
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                The Hospital Revenue Operations Cycle
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              4 Interconnected Functions Taught Across the Pathway
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#FF5A1F]/50 hover:bg-white hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-black text-[#FF5A1F]">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-orange-100/70 group-hover:bg-[#FF5A1F] text-[#FF5A1F] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
