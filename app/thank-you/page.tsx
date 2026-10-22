"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ArrowLeft, ArrowRight, ShieldCheck, ExternalLink } from "lucide-react";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Learner";
  const course = searchParams.get("course") || "Healthcare Revenue Operations Mastery";
  const ref = searchParams.get("ref") || "COW-849201";

  const firstName = name.trim().split(" ")[0] || "Learner";

  return (
    <div className="min-h-screen bg-[#050505] text-[#F2F4F7] flex flex-col justify-between selection:bg-[#FF8A00] selection:text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FF8A00]/15 rounded-full blur-[140px] pointer-events-none" />

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
                className="object-contain filter brightness-110"
                priority
              />
            </div>
          </Link>

          <Link
            href="/"
            className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF8A00]" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10 w-full flex flex-col justify-center">
        <div className="text-center space-y-7">
          
          {/* Animated Success Badge */}
          <div className="relative inline-block">
            <div className="w-20 h-20 rounded-full bg-[#FF8A00]/20 border-2 border-[#FF8A00] flex items-center justify-center text-[#FF8A00] mx-auto shadow-[0_0_50px_rgba(255,138,0,0.4)] animate-pulse-subtle">
              <CheckCircle2 className="w-12 h-12" />
            </div>
          </div>

          {/* Eyebrow & Headline */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black tracking-widest uppercase bg-[#FF8A00]/15 border border-[#FF8A00]/30 text-[#FF8A00]">
              <span>ENQUIRY RECEIVED &bull; ADMISSIONS OPEN</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-2xl mx-auto font-heading">
              Thank You, <span className="text-[#FF8A00]">{firstName}</span>! Your Enquiry Has Been Received.
            </h1>
          </div>

          {/* Enquiry Summary Card */}
          <div className="max-w-md mx-auto rounded-2xl bg-[#0D1B2A]/60 border border-white/15 p-6 text-left shadow-2xl space-y-3.5">
            <div className="flex justify-between items-center text-xs sm:text-sm text-slate-400 pb-2.5 border-b border-white/10">
              <span className="font-medium">Reference Number</span>
              <span className="text-[#FF8A00] font-mono font-bold tracking-wider">{ref}</span>
            </div>
            <div className="flex justify-between items-center text-xs sm:text-sm text-slate-400 pb-2.5 border-b border-white/10">
              <span className="font-medium">Selected Program</span>
              <span className="text-white font-semibold text-right truncate max-w-[220px]">{course}</span>
            </div>
            <div className="flex justify-between items-center text-xs sm:text-sm text-slate-400">
              <span className="font-medium">Submission Status</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Confirmed
              </span>
            </div>
          </div>

          {/* Message Content */}
          <div className="max-w-xl mx-auto space-y-3 pt-2">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              A COWRIN course advisor will contact you via phone or WhatsApp within 24 hours to understand your interests, guide you through the available programs, and help you choose a learning pathway that suits your goals.
            </p>
            <p className="text-base sm:text-lg font-semibold text-white">
              We look forward to helping you get started!
            </p>
          </div>

          {/* Action CTA */}
          <div className="pt-4">
            <Link
              href="/#courses"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-white transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              style={{
                background: "linear-gradient(135deg, #FF8A00, #E07A00)",
                boxShadow: "0 12px 30px rgba(255, 138, 0, 0.4)",
              }}
            >
              <span>Explore our programs while you wait</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Trust Footnote */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero Medical Background Required &bull; Certified Practical Training</span>
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
            <div className="w-8 h-8 border-2 border-[#FF8A00] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm text-slate-400">Loading confirmation details...</p>
          </div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
