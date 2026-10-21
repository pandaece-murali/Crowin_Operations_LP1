"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ArrowLeft, PhoneCall, Clock, BookOpen, ShieldCheck, ExternalLink, Sparkles } from "lucide-react";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Learner";
  const course = searchParams.get("course") || "Healthcare Revenue Operations Mastery";
  const ref = searchParams.get("ref") || "COW-849201";

  const firstName = name.trim().split(" ")[0] || "Learner";

  const nextSteps = [
    {
      step: "01",
      title: "Enquiry Review",
      desc: "Our academic team reviews your selected program and learning preferences.",
      icon: BookOpen,
    },
    {
      step: "02",
      title: "Advisor Contact",
      desc: "A course specialist will connect with you via Phone or WhatsApp within 24 hours.",
      icon: PhoneCall,
    },
    {
      step: "03",
      title: "Curriculum & Enrolment",
      desc: "Receive comprehensive syllabus materials, batch timings, and certification guidelines.",
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col justify-between selection:bg-[#FF5A1F] selection:text-white bg-grid-dark relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FF5A1F]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <header className="border-b border-white/10 bg-[#0B0B0B]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-36 sm:w-44">
              <Image
                src="https://cdn.edbound.app/public/05f7c860-a46a-4c3c-a4a1-0b4d951f5071/customfile/23042026/c856c.webp"
                alt="COWRIN Logo"
                width={150}
                height={38}
                className="object-contain filter brightness-110"
                priority
                unoptimized
              />
            </div>
          </Link>

          <Link
            href="/"
            className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF5A1F]" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10 w-full">
        <div className="text-center space-y-6">
          
          {/* Animated Success Badge */}
          <div className="relative inline-block">
            <div className="w-20 h-20 rounded-full bg-[#FF5A1F]/20 border-2 border-[#FF5A1F] flex items-center justify-center text-[#FF5A1F] mx-auto shadow-[0_0_50px_rgba(255,90,31,0.4)] animate-pulse-subtle">
              <CheckCircle2 className="w-12 h-12" />
            </div>
          </div>

          {/* Eyebrow & Headline */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase bg-[#FF5A1F]/15 border border-[#FF5A1F]/30 text-[#FF5A1F]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ENQUIRY RECEIVED &bull; ADMISSIONS 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Thank You, <span className="text-[#FF5A1F]">{firstName}</span>!
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
              Your enquiry has been successfully logged. Our academic team is reviewing your details to provide tailored course information.
            </p>
          </div>

          {/* Enquiry Summary Card */}
          <div className="max-w-md mx-auto rounded-2xl bg-white/[0.04] border border-white/15 p-6 text-left shadow-2xl space-y-3">
            <div className="flex justify-between items-center text-xs text-slate-400 pb-2 border-b border-white/10">
              <span>Reference Number</span>
              <span className="text-[#FF5A1F] font-mono font-bold tracking-wider">{ref}</span>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-400 pb-2 border-b border-white/10">
              <span>Selected Program</span>
              <span className="text-white font-semibold text-right truncate max-w-[200px]">{course}</span>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>Submission Status</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Confirmed
              </span>
            </div>
          </div>

          {/* What Happens Next Roadmap */}
          <div className="pt-8">
            <h2 className="text-xs uppercase font-extrabold text-slate-400 tracking-widest mb-6">
              What Happens Next?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {nextSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF5A1F]/40 transition-colors text-left space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#FF5A1F]">
                        {step.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#FF5A1F]/10 text-[#FF5A1F] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider text-white transition-all cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #FF5A1F, #E14B16)",
                boxShadow: "0 12px 30px rgba(255, 90, 31, 0.4)",
              }}
            >
              <span>Return to Course Overview</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>

          {/* Trust Footnote */}
          <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero Medical Background Required &bull; Certified Completion</span>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-500 bg-[#0B0B0B]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>&copy; 2026 COWRIN Learning. All rights reserved.</span>
          <a
            href="https://www.cowrin.com/page/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
          >
            Privacy Policy <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="w-8 h-8 border-2 border-[#FF5A1F] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm text-slate-400">Loading confirmation details...</p>
          </div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
