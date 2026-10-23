"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Layers, ShieldCheck, TrendingUp, Zap, Gift } from "lucide-react";

interface CoursesSectionProps {
  onSelectCourse: (courseName: string) => void;
}

export default function CoursesSection({ onSelectCourse }: CoursesSectionProps) {

  const courses = [
    {
      id: "01",
      badge: "CORE FOUNDATION",
      code: "Hospital Billing Learning System",
      title: "Hospital Billing Learning System",
      subtitle: "Understand How Hospital Billing Works",
      description:
        "Learn the basics of patient registration, hospital billing workflows, pharmacy billing, itemized billing, and collections.",
      topics: [
        "Patient registration and billing processes",
        "Hospital service and pharmacy billing",
        "Itemized bills and collections workflows",
      ],
      ctaText: "EXPLORE HOSPITAL BILLING",
      icon: Layers,
    },
    {
      id: "02",
      badge: "INSURANCE & TPAS",
      code: "Health Insurance Specialist",
      title: "Health Insurance Specialist",
      subtitle: "Understand Insurance Claims and Coordination",
      description:
        "Learn how health insurance processes work and how hospitals coordinate with insurers and Third-Party Administrators (TPAs).",
      topics: [
        "Insurance verification and pre-authorization",
        "Cashless and reimbursement claims",
        "Insurance and TPA coordination",
      ],
      ctaText: "EXPLORE HEALTH INSURANCE",
      icon: ShieldCheck,
      featured: true,
    },
    {
      id: "03",
      badge: "END-TO-END RCM",
      code: "Revenue Cycle Management Mastery",
      title: "Revenue Cycle Management Mastery",
      subtitle: "Understand the Complete Healthcare Revenue Process",
      description:
        "Learn how healthcare organizations manage revenue-related activities, from patient services and billing through payments and follow-up.",
      topics: [
        "Revenue cycle workflows",
        "Claim denials and accounts receivable",
        "Revenue analytics and optimization",
      ],
      ctaText: "EXPLORE REVENUE CYCLE MANAGEMENT",
      icon: TrendingUp,
    },
  ];

  const handleCtaClick = (courseCode: string) => {
    onSelectCourse(courseCode);
    const element = document.getElementById("enquiry-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="courses" className="relative py-14 sm:py-16 bg-[#050505] text-[#F2F4F7] overflow-hidden border-t border-white/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#FF8A00]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#1D4ED8]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-[#FF8A00]/10 border border-[#FF8A00]/30 text-[#FF8A00]">
            <span>OUR COURSES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
            Explore the Three Essential{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A00] to-[#FFA834]">
              Healthcare Skills.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Explore the key functions involved in healthcare revenue operations through three specialized programs.
          </p>
        </div>

        {/* The 3 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {courses.map((course) => {
            const isFeatured = course.featured;

            return (
              <div
                key={course.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group ${
                  isFeatured
                    ? "bg-gradient-to-b from-[#0D1B2A]/90 to-[#0D1B2A]/50 border-2 border-[#FF8A00] shadow-[0_20px_60px_rgba(255,138,0,0.25)]"
                    : "bg-[#0D1B2A]/40 border border-white/10 hover:border-[#FF8A00]/50 shadow-xl"
                }`}
              >
                {/* Top Badge for Featured */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-[#FF8A00] text-white shadow-md flex items-center gap-1 whitespace-nowrap">
                    <Zap className="w-3 h-3" /> HIGH DEMAND SKILL
                  </div>
                )}

                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black tracking-tighter text-[#FF8A00]/80 font-mono">
                      {course.id}.
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {course.badge}
                    </span>
                  </div>

                  {/* Course Title & Subtitle */}
                  <div className="space-y-2 mb-4">
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#FF8A00]">
                      {course.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {course.description}
                  </p>

                  {/* You'll explore list */}
                  <div className="pt-4 border-t border-white/10 mb-8 space-y-3">
                    <p className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">
                      You&apos;ll explore:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {course.topics.map((topic, tidx) => (
                        <li key={tidx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Primary Card CTA Button */}
                <div className="pt-2">
                  {/* Free Medical Terminology & Human Anatomy Course Label */}
                  <div className="mb-3 py-2 px-3 rounded-xl bg-[#FF8A00]/10 border border-[#FF8A00]/25 flex items-center justify-center text-center gap-1.5 text-xs font-semibold text-[#FF8A00] leading-snug">
                    <Gift className="w-3.5 h-3.5 shrink-0 text-[#FF8A00]" />
                    <span>Includes Free Medical Terminology &amp; Human Anatomy Course</span>
                  </div>

                  <button
                    onClick={() => handleCtaClick(course.code)}
                    className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-black tracking-wide text-white uppercase transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.02] cursor-pointer"
                    style={{
                      background: isFeatured
                        ? "linear-gradient(135deg, #FF8A00, #E07A00)"
                        : "rgba(255, 255, 255, 0.08)",
                      border: isFeatured ? "1px solid #FF8A00" : "1px solid rgba(255, 255, 255, 0.15)",
                      boxShadow: isFeatured ? "0 10px 25px rgba(255, 138, 0, 0.35)" : "none",
                    }}
                  >
                    <span>{course.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
