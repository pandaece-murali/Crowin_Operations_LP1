/**
 * Platform: COWRIN Healthcare Revenue Operations LP1
 * Lead Developer: NandaElavarasu K (Senior Full Stack Developer)
 */

"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import CurriculumBenefitsSection from "@/components/CurriculumBenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import StickyBottomCta from "@/components/StickyBottomCta";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState("All Three Courses (Bundle)");

  const handleSelectCourse = (courseName: string) => {
    setSelectedCourse(courseName);
    const formElement = document.getElementById("enquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGeneralEnquire = () => {
    const formElement = document.getElementById("enquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] selection:bg-[#FF8A00] selection:text-white">
      {/* Official Header & Navigation (No external links, Single CTA) */}
      <Navbar onEnquireClick={handleGeneralEnquire} />

      <main className="flex-1">
        {/* 1. Hero Section (BLACK BACKGROUND with Brand #FF8A00 Glow, 1 Primary CTA, Embedded Form) */}
        <HeroSection
          onExploreClick={() => {
            const el = document.getElementById("courses");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          selectedCourse={selectedCourse}
        />

        {/* 2. About COWRIN (WHITE BACKGROUND Section, 1 Primary CTA) */}
        <AboutSection
          onLearnMore={() => {
            const el = document.getElementById("courses");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* 3. Our Courses (BLACK BACKGROUND Section, 1 CTA per Course Card + 1 Bundle CTA) */}
        <CoursesSection onSelectCourse={handleSelectCourse} />

        {/* 4. What You'll Learn & Program Benefits (WHITE BACKGROUND Section, 1 Pathway CTA) */}
        <CurriculumBenefitsSection
          onEnquireBundle={() => handleSelectCourse("All Three Courses (Bundle)")}
        />

        {/* 5. 10 Realistic Learner Testimonials (BLACK BACKGROUND with smooth auto-scroll marquee) */}
        <TestimonialsSection />

        {/* 6. Frequently Asked Questions (BLACK BACKGROUND Section with interactive accordion) */}
        <FaqSection />

        {/* 6. Final CTA (BLACK & BRAND GLOW Section, 1 Focused CTA) */}
        <FinalCtaSection onEnquireNow={handleGeneralEnquire} />
      </main>

      {/* Footer (No external links except Privacy Policy: https://www.cowrin.com/page/privacy-policy) */}
      <Footer />

      {/* Sticky Fixed Bottom Final CTA Bar (Pinned across all screens) */}
      <StickyBottomCta onEnquireClick={handleGeneralEnquire} />
    </div>
  );
}
