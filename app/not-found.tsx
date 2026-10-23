/**
 * Platform: COWRIN Healthcare Revenue Operations LP1
 * Lead Developer: NandaElavarasu K (Senior Full Stack Developer)
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  BookOpen,
  ArrowRight,
  HelpCircle,
  FileText,
  ShieldCheck,
  CreditCard,
  PhoneCall,
} from "lucide-react";

export default function NotFound() {
  const popularCourses = [
    {
      title: "Hospital Billing Learning System",
      code: "01",
      desc: "Master patient services registration, inpatient/outpatient billing, and charge sheets.",
      icon: FileText,
      href: "/#courses",
    },
    {
      title: "Health Insurance Specialist",
      code: "02",
      desc: "Learn cashless vs reimbursement claims, pre-authorization, and TPA coordination.",
      icon: ShieldCheck,
      href: "/#courses",
    },
    {
      title: "Revenue Cycle Management Mastery",
      code: "03",
      desc: "Understand denial management, accounts receivable follow-up, and revenue audits.",
      icon: CreditCard,
      href: "/#courses",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F2F4F7] flex flex-col justify-between selection:bg-[#FF8A00] selection:text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#FF8A00]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[300px] bg-[#1D4ED8]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Header */}
      <header className="border-b border-white/10 bg-[#0B0B0B]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-44 sm:w-48">
              <Image
                src="/images/cowrin-logo.webp"
                alt="COWRIN - Content with Right Intent"
                width={180}
                height={44}
                style={{ width: "auto" }}
                className="object-contain filter brightness-110"
                priority
              />
            </div>
          </Link>

          <Link
            href="/"
            className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
          >
            <Home className="w-4 h-4 text-[#FF8A00]" />
            <span>Homepage</span>
          </Link>
        </div>
      </header>

      {/* Main 404 Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10 w-full flex flex-col justify-center items-center text-center">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black tracking-widest uppercase bg-[#FF8A00]/15 border border-[#FF8A00]/30 text-[#FF8A00] mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>ERROR 404 &bull; PAGE NOT FOUND</span>
        </div>

        {/* 404 Giant Number with Brand Glow */}
        <div className="relative mb-2">
          <span className="text-7xl sm:text-9xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600 select-none drop-shadow-[0_10px_35px_rgba(255,138,0,0.25)]">
            404
          </span>
        </div>

        {/* Headline & Description */}
        <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight max-w-2xl mx-auto font-heading mb-3">
          Looks Like You Took a Detour
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
          The page you are looking for doesn&apos;t exist, was moved, or the link may be broken. Let&apos;s guide you back to our healthcare operations learning programs.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-12">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #FF8A00, #E07A00)",
              boxShadow: "0 10px 25px rgba(255, 138, 0, 0.35)",
            }}
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/#courses"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#0D1B2A] border border-white/15 hover:border-[#FF8A00]/50 transition-all flex items-center justify-center gap-2 hover:bg-[#0D1B2A]/80 shadow-md"
          >
            <BookOpen className="w-4 h-4 text-[#FF8A00]" />
            <span>Explore Programs</span>
          </Link>

          <Link
            href="/#enquiry-form"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span>Enquire Now</span>
          </Link>
        </div>

        {/* Helpful Popular Courses Strip */}
        <div className="w-full max-w-3xl pt-8 border-t border-white/10 text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-4 text-center sm:text-left">
            POPULAR HEALTHCARE REVENUE OPERATIONS COURSES
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {popularCourses.map((c) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.code}
                  href={c.href}
                  className="p-4 rounded-xl bg-[#0D1B2A]/40 border border-white/10 hover:border-[#FF8A00]/50 hover:bg-[#0D1B2A]/70 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[10px] font-mono font-bold text-[#FF8A00] px-2 py-0.5 rounded-full bg-[#FF8A00]/15">
                        {c.code}
                      </span>
                      <Icon className="w-4 h-4 text-slate-400 group-hover:text-[#FF8A00] transition-colors" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FF8A00] transition-colors leading-snug mb-1">
                      {c.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-2 border-t border-white/5 flex items-center gap-1 text-[11px] font-semibold text-[#FF8A00]">
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/10 py-6 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>&copy; 2026 COWRIN Learning. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/#courses" className="hover:text-white transition-colors">
              Courses
            </Link>
            <a
              href="https://www.cowrin.com/page/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
