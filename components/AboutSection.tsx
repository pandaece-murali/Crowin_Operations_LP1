"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, FileText, ShieldAlert, CreditCard, PieChart } from "lucide-react";

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
      title: "Hospital Billing",
      desc: "Record patient services, calculate charges, and prepare bills.",
      icon: FileText,
    },
    {
      num: "02",
      title: "Health Insurance & Claims",
      desc: "Verify coverage, coordinate approvals, and submit insurance claims.",
      icon: ShieldAlert,
    },
    {
      num: "03",
      title: "Payment Follow-ups",
      desc: "Track pending payments and resolve delayed or denied claims.",
      icon: CreditCard,
    },
    {
      num: "04",
      title: "Revenue Improvement",
      desc: "Identify process gaps and improve billing and payment performance.",
      icon: PieChart,
    },
  ];

  return (
    <section id="about" className="relative py-14 sm:py-16 bg-[#050505] text-[#F2F4F7] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Main Grid: Narrative Copy on Left, Dual Photo Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#FF8A00]/10 border border-[#FF8A00]/30 text-[#FF8A00]">
              <span>ABOUT COWRIN</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Learn the Business Side of Healthcare
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              <p>
                Healthcare involves more than patient care. Hospitals also need teams to manage billing, coordinate insurance claims, track payments, and maintain revenue workflows.
              </p>
              <p>
                <strong className="text-white font-semibold">COWRIN</strong> offers career-focused learning programs designed to help learners understand these essential healthcare operations.
              </p>
              <p>
                The <span className="text-[#FF8A00] font-semibold">Healthcare Revenue Operations Mastery Program</span> brings three learning areas together, helping you build knowledge of the processes that support hospital administration and financial operations.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onLearnMore || (() => scrollTo("courses"))}
                className="px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide text-white transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #FF8A00, #E07A00)",
                  boxShadow: "0 10px 25px rgba(255, 138, 0, 0.35)",
                }}
              >
                <span>Explore Our Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Dual Photography Showcase */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Card 1: Doctor & Insurance Coordination */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0D1B2A]/40 group flex flex-col">
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
                    <span className="text-[10px] font-bold text-[#FF8A00] uppercase tracking-wider block">
                      Hospital Administration
                    </span>
                    <span className="text-xs font-semibold leading-snug block">
                      Doctor &amp; TPA Claim Coordination
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Billing & EHR Operations Desk */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0D1B2A]/40 group flex flex-col">
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
                    <span className="text-[10px] font-bold text-[#FF8A00] uppercase tracking-wider block">
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
        <div className="pt-8 border-t border-white/10">
          <div className="max-w-3xl mb-6 space-y-2">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#FF8A00]">
              BEHIND THE SCENES OF HEALTHCARE
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              From Hospital Billing to Payments: How It All Connects
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
              Every hospital visit involves more than patient care. Discover how billing, insurance claims, payment follow-ups, and revenue improvement work together behind the scenes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-[#0D1B2A]/40 border border-white/10 hover:border-[#FF8A00]/50 hover:bg-[#0D1B2A]/70 transition-all group flex flex-col justify-between relative shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-black text-[#FF8A00] px-2.5 py-0.5 rounded-full bg-[#FF8A00]/15 border border-[#FF8A00]/30">
                        {step.num}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:bg-[#FF8A00] text-[#FF8A00] group-hover:text-white group-hover:border-[#FF8A00] flex items-center justify-center transition-colors shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  {/* Flow arrow connector between cards on desktop */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#050505] border border-white/15 text-slate-400 items-center justify-center shadow-xs pointer-events-none">
                      <ArrowRight className="w-3 h-3 text-[#FF8A00]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
