"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  onEnquireClick?: (courseName?: string) => void;
}

export default function Navbar({ onEnquireClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEnquire = () => {
    setMobileMenuOpen(false);
    if (onEnquireClick) {
      onEnquireClick();
    } else {
      scrollTo("enquiry-form");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0B0B]/90 backdrop-blur-md border-b border-white/10 transition-all">
      {/* Top micro announcement bar */}
      {/* <div className="bg-gradient-to-r from-[#0B0B0B] via-[#1a0f0a] to-[#0B0B0B] border-b border-[#FF5A1F]/20 py-1.5 px-4 text-center text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#FF5A1F]/15 text-[#FF5A1F] border border-[#FF5A1F]/30">
            <Sparkles className="w-3 h-3" /> ADMISSIONS OPEN
          </span>
          <span className="text-slate-300">
            Healthcare Revenue Operations Mastery &bull; 3 Programs in 1 Career Pathway
          </span>
        </div>
      </div> */}

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative h-10 w-36 sm:w-44 flex items-center">
            <Image
              src="https://cdn.edbound.app/public/05f7c860-a46a-4c3c-a4a1-0b4d951f5071/customfile/23042026/c856c.webp"
              alt="COWRIN Learning Platform"
              width={160}
              height={40}
              className="object-contain filter brightness-110"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Navigation Links (strictly within landing page) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => scrollTo("about")}
            className="hover:text-white transition-colors"
          >
            About COWRIN
          </button>
          <button
            onClick={() => scrollTo("courses")}
            className="hover:text-white transition-colors"
          >
            Our Courses
          </button>
          <button
            onClick={() => scrollTo("curriculum")}
            className="hover:text-white transition-colors"
          >
            What You&apos;ll Learn
          </button>
          <button
            onClick={() => scrollTo("reviews")}
            className="hover:text-white transition-colors"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollTo("faqs")}
            className="hover:text-white transition-colors"
          >
            FAQs
          </button>
        </nav>

        {/* Action Button: One Focused CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={handleEnquire}
            className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #FF5A1F, #E14B16)",
              boxShadow: "0 10px 25px rgba(255, 90, 31, 0.35)",
            }}
          >
            <span className="relative z-10 flex items-center gap-1.5 tracking-wide">
              ENQUIRE NOW
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0B0B] border-b border-white/10 px-5 py-4 space-y-3">
          <div className="flex flex-col space-y-2 text-sm text-slate-200">
            <button
              onClick={() => scrollTo("about")}
              className="text-left py-2 border-b border-white/5 hover:text-[#FF5A1F]"
            >
              About COWRIN
            </button>
            <button
              onClick={() => scrollTo("courses")}
              className="text-left py-2 border-b border-white/5 hover:text-[#FF5A1F]"
            >
              The 3 Courses
            </button>
            <button
              onClick={() => scrollTo("curriculum")}
              className="text-left py-2 border-b border-white/5 hover:text-[#FF5A1F]"
            >
              What You&apos;ll Learn &amp; Benefits
            </button>
            <button
              onClick={() => scrollTo("reviews")}
              className="text-left py-2 border-b border-white/5 hover:text-[#FF5A1F]"
            >
              Learner Reviews
            </button>
            <button
              onClick={() => scrollTo("faqs")}
              className="text-left py-2 border-b border-white/5 hover:text-[#FF5A1F]"
            >
              Frequently Asked Questions
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={handleEnquire}
              className="w-full py-3 rounded-xl font-bold text-sm text-white text-center flex items-center justify-center gap-2 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #FF5A1F, #E14B16)",
                boxShadow: "0 10px 25px rgba(255, 90, 31, 0.4)",
              }}
            >
              ENQUIRE NOW <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
