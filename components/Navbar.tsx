"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 w-full bg-[#050505]/95 backdrop-blur-md border-b border-white/10 transition-all">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative h-11 w-44 sm:w-48 flex items-center">
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
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => scrollTo("about")}
            className="hover:text-[#FF8A00] transition-colors cursor-pointer"
          >
            About COWRIN
          </button>
          <button
            onClick={() => scrollTo("courses")}
            className="hover:text-[#FF8A00] transition-colors cursor-pointer"
          >
            Our Courses
          </button>
          <button
            onClick={() => scrollTo("curriculum")}
            className="hover:text-[#FF8A00] transition-colors cursor-pointer"
          >
            What You&apos;ll Learn
          </button>
          <button
            onClick={() => scrollTo("reviews")}
            className="hover:text-[#FF8A00] transition-colors cursor-pointer"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollTo("faqs")}
            className="hover:text-[#FF8A00] transition-colors cursor-pointer"
          >
            FAQs
          </button>
        </nav>

        {/* Action Button: One Focused CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={handleEnquire}
            className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white transition-all duration-300 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #FF8A00, #E07A00)",
              boxShadow: "0 10px 25px rgba(255, 138, 0, 0.35)",
            }}
          >
            <span className="relative z-10 flex items-center gap-1.5 tracking-wider uppercase font-semibold">
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
              className="text-left py-2 border-b border-white/5 hover:text-[#FF8A00]"
            >
              About COWRIN
            </button>
            <button
              onClick={() => scrollTo("courses")}
              className="text-left py-2 border-b border-white/5 hover:text-[#FF8A00]"
            >
              The 3 Courses
            </button>
            <button
              onClick={() => scrollTo("curriculum")}
              className="text-left py-2 border-b border-white/5 hover:text-[#FF8A00]"
            >
              What You&apos;ll Learn &amp; Benefits
            </button>
            <button
              onClick={() => scrollTo("reviews")}
              className="text-left py-2 border-b border-white/5 hover:text-[#FF8A00]"
            >
              Learner Reviews
            </button>
            <button
              onClick={() => scrollTo("faqs")}
              className="text-left py-2 border-b border-white/5 hover:text-[#FF8A00]"
            >
              Frequently Asked Questions
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={handleEnquire}
              className="w-full py-3 rounded-xl font-bold text-sm text-white text-center flex items-center justify-center gap-2 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #FF8A00, #E07A00)",
                boxShadow: "0 10px 25px rgba(255, 138, 0, 0.4)",
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
