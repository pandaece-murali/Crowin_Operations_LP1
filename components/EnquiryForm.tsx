"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Shield, ArrowRight, Sparkles } from "lucide-react";

interface EnquiryFormProps {
  initialCourse?: string;
  id?: string;
}

export default function EnquiryForm({
  initialCourse = "All Three Courses (Bundle)",
  id = "enquiry-form",
}: EnquiryFormProps) {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interestedCourse, setInterestedCourse] = useState(initialCourse);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Keep state in sync if external buttons pre-select a course
  useEffect(() => {
    if (initialCourse) setInterestedCourse(initialCourse);
  }, [initialCourse]);

  const courseOptions = [
    {
      name: "Hospital Billing Learning System",
      badge: "01",
    },
    {
      name: "Health Insurance Specialist",
      badge: "02",
    },
    {
      name: "Revenue Cycle Management Mastery",
      badge: "03",
    },
    {
      name: "All Three Courses (Bundle)",
      tagline: "Complete 3-in-1 pathway",
      highlight: true,
      badge: "POPULAR",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName || !email || !phone) {
      setErrorMessage("Please fill in all required fields (Full Name, Email, and Phone Number).");
      return;
    }

    setIsSubmitting(true);

    const fallbackRef = `COW-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      // Send directly to Next.js API route which forwards to GoHighLevel (GHL)
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          interestedCourse,
        }),
      });

      const data = await res.json();
      const refId = (res.ok && data?.referenceId) ? data.referenceId : fallbackRef;

      // Direct instant redirection to Thank You page (no inline form state)
      window.location.assign(
        `/thank-you?ref=${encodeURIComponent(refId)}&name=${encodeURIComponent(
          fullName
        )}&course=${encodeURIComponent(interestedCourse)}`
      );
    } catch (err) {
      console.error("Submission error:", err);
      // Even on network error, redirect directly to Thank You page
      window.location.assign(
        `/thank-you?ref=${encodeURIComponent(fallbackRef)}&name=${encodeURIComponent(
          fullName
        )}&course=${encodeURIComponent(interestedCourse)}`
      );
    }
  };

  return (
    <div
      id={id}
      className="relative rounded-2xl bg-[#0B0B0B] border border-white/10 p-6 sm:p-8 shadow-2xl transition-all"
      style={{
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 90, 31, 0.12)",
      }}
    >
      {/* Decorative top orange indicator */}
      <div className="absolute -top-px left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#FF5A1F] to-transparent" />

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form Header */}
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Enquire About Our Courses
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Share your details and our team can help you explore the right learning program.
          </p>
        </div>

        {/* Error Banner */}
        {errorMessage && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
            {errorMessage}
          </div>
        )}

        {/* Full Name */}
        <div className="space-y-1 text-left">
          <label className="block text-xs font-semibold text-slate-300">
            Full Name <span className="text-[#FF5A1F]">*</span>
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-colors"
          />
        </div>

        {/* Email Address */}
        <div className="space-y-1 text-left">
          <label className="block text-xs font-semibold text-slate-300">
            Email Address <span className="text-[#FF5A1F]">*</span>
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-colors"
          />
        </div>

        {/* Phone Number */}
        <div className="space-y-1 text-left">
          <label className="block text-xs font-semibold text-slate-300">
            Phone Number <span className="text-[#FF5A1F]">*</span>
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-colors"
          />
        </div>

        {/* Interested Course */}
        <div className="space-y-2 text-left pt-1">
          <label className="block text-xs font-semibold text-slate-300">
            Interested Course <span className="text-[#FF5A1F]">*</span>
          </label>
          <div className="space-y-2">
            {courseOptions.map((course) => {
              const isSelected = interestedCourse === course.name;
              const isHighlight = course.highlight;

              return (
                <label
                  key={course.name}
                  onClick={() => setInterestedCourse(course.name)}
                  className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? "bg-[#FF5A1F]/15 border-[#FF5A1F] text-white shadow-md shadow-[#FF5A1F]/10"
                      : isHighlight
                      ? "bg-white/[0.04] border-[#FF5A1F]/30 text-white hover:border-[#FF5A1F]/60"
                      : "bg-black/60 border-white/10 text-slate-300 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? "border-[#FF5A1F] bg-[#FF5A1F]" : "border-slate-500 bg-transparent"
                      }`}
                    >
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <div className="truncate">
                      <div className="text-xs sm:text-sm font-semibold truncate leading-tight">
                        {course.name}
                      </div>
                      {course.tagline && (
                        <div className="text-[11px] text-[#FF5A1F] font-medium flex items-center gap-1 mt-0.5">
                          <Sparkles className="w-3 h-3" />
                          <span>{course.tagline}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {course.badge && (
                    <span
                      className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ml-2 shrink-0 ${
                        isHighlight
                          ? "bg-[#FF5A1F] text-white"
                          : "bg-white/10 text-slate-400"
                      }`}
                    >
                      {course.badge}
                    </span>
                  )}
                </label>
              );
            })}
          </div>
        </div>

        {/* Submit Enquiry Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            style={{
              background: "linear-gradient(135deg, #FF5A1F, #E14B16)",
              border: "1px solid #FF5A1F",
              boxShadow: "0 12px 30px rgba(255, 90, 31, 0.35)",
            }}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Submitting &amp; Redirecting...</span>
              </>
            ) : (
              <>
                <span>Submit Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Privacy and trust footnote */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span>100% Privacy. Zero spam. Fast academic support callback.</span>
        </div>
      </form>
    </div>
  );
}
