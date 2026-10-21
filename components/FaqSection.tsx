"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Search, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      q: "What is the Healthcare Revenue Operations Mastery Program?",
      a: "It is a combined learning pathway covering hospital billing, health insurance operations, and revenue cycle management through three specialized programs.",
    },
    {
      q: "Who can join this program?",
      a: "It is designed for students, freshers, aspiring healthcare operations professionals, and learners interested in hospital billing, insurance coordination, or revenue cycle management.",
    },
    {
      q: "Do I need a medical background?",
      a: "No, you don’t need a medical background to enrol in this program. It is suitable for students, freshers, and individuals from non-medical backgrounds who want to learn about hospital billing and healthcare operations.",
    },
    {
      q: "What is included in the complete bundle?",
      a: "The bundle includes:\n• Hospital Billing Learning System\n• Health Insurance Specialist\n• Revenue Cycle Management Mastery Program\n\nTogether, these cover key processes involved in healthcare billing, insurance claims, and revenue management.",
    },
    {
      q: "What is Revenue Cycle Management (RCM)?",
      a: "Revenue Cycle Management is the process of managing the financial activities associated with healthcare services, including billing, insurance claims, payment tracking, and follow-ups.",
    },
    {
      q: "What is the difference between hospital billing and RCM?",
      a: "Hospital billing focuses on activities such as preparing bills and processing charges. RCM covers the broader revenue process, including billing, claims, payments, denials, and accounts receivable.",
    },
    {
      q: "Will I receive a certificate?",
      a: "Yes, you will receive a certificate upon successful completion of the course, subject to the program's completion requirements.",
    },
    {
      q: "Can this program help me prepare for a healthcare operations career?",
      a: "The program is designed to build foundational knowledge relevant to healthcare operations. Career outcomes depend on your skills, qualifications, experience, and employer requirements; employment is not guaranteed.",
    },
    {
      q: "How can I get more information about enrolment?",
      a: "Submit an enquiry through the website or contact COWRIN to learn about eligibility, course access, learning arrangements, and enrolment.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 sm:py-32 bg-[#0B0B0B] text-white relative overflow-hidden bg-grid-dark">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FF5A1F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>5. FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Have Questions About the Program?
          </h2>

          <p className="text-base text-slate-400 max-w-xl mx-auto">
            Everything you need to know about course prerequisites, bundle contents, certification, and admissions.
          </p>

          {/* Quick Search */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions (e.g. certificate, medical background, bundle)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#FF5A1F] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              No matching questions found. Try typing another keyword or submit an enquiry below.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? "bg-white/[0.06] border-[#FF5A1F]/50 shadow-lg"
                      : "bg-white/[0.025] border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-xs font-mono font-bold text-[#FF5A1F] shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-white leading-snug">
                        {faq.q}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-[#FF5A1F] text-white rotate-180"
                          : "bg-white/10 text-slate-400"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 whitespace-pre-line pl-12 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
}
