"use client";

import React from "react";
import Image from "next/image";
import { ShieldAlert, ExternalLink, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#050505] text-slate-400 text-xs border-t border-white/10 pt-12 sm:pt-14 pb-24 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Top Logo */}
        <div className="flex items-center">
          <Image
            src="/images/cowrin-logo.webp"
            alt="COWRIN - Content with Right Intent"
            width={160}
            height={40}
            style={{ width: "auto" }}
            className="h-8 sm:h-9 w-auto object-contain filter brightness-110"
          />
        </div>

        {/* Main Footer Row: 3 Columns Below */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-heading">
              ABOUT COWRIN
            </h4>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              COWRIN offers career-focused learning programs designed to help learners understand essential healthcare operations, hospital billing workflows, and revenue cycle management.
            </p>
            <div className="pt-1">
              <a
                href="https://www.cowrin.com/page/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#FF8A00] text-xs transition-colors underline underline-offset-4"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF8A00]" />
                <span>Privacy Policy</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Programs Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-heading">
              SPECIALIZED PROGRAMS
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <button
                  onClick={() => scrollTo("courses")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  01. Hospital Billing Learning System
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("courses")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  02. Health Insurance Specialist
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("courses")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  03. Revenue Cycle Management Mastery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("courses")}
                  className="text-[#FF8A00] hover:underline transition-colors text-left font-semibold cursor-pointer"
                >
                  All Three Courses (Complete Bundle)
                </button>
              </li>
            </ul>
          </div>

          {/* Quick On-Page Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-heading">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <button onClick={() => scrollTo("about")} className="hover:text-white transition-colors cursor-pointer">
                  About COWRIN
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("curriculum")} className="hover:text-white transition-colors cursor-pointer">
                  What You&apos;ll Learn
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("faqs")} className="hover:text-white transition-colors cursor-pointer">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("enquiry-form")} className="hover:text-white transition-colors cursor-pointer">
                  Enquire Now
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-slate-400 text-[11px] leading-relaxed flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
          <span>
            <strong>Disclaimer:</strong> COWRIN’s programs are designed to help learners develop knowledge and practical understanding of healthcare operations. Career opportunities and progression depend on individual skills, qualifications, experience, and industry requirements. Certificates are awarded upon successful completion of the respective program requirements.
          </span>
        </div>

        {/* Copyright & Policy Link */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <div>
            &copy; 2026 COWRIN Learning. All rights reserved.
          </div>
          <div>
            <a
              href="https://www.cowrin.com/page/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              Privacy Policy <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
