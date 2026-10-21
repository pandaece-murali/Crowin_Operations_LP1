"use client";

import React from "react";
import { Star, CheckCircle2, Sparkles } from "lucide-react";

export default function TestimonialsSection() {

  const testimonials = [
    {
      id: 1,
      name: "Ananya Sharma",
      role: "B.Com Graduate &bull; Trainee Billing Executive",
      location: "Bengaluru",
      course: "All Three Courses (Bundle)",
      rating: 5,
      avatarColor: "from-orange-500 to-amber-600",
      content:
        "Coming from a commerce background with zero medical experience, I had no idea how hospitals calculate tariffs or handle insurance. COWRIN made the entire IPD/OPD billing and TPA approval cycle so easy to understand. I secured an operational role within two months.",
    },
    {
      id: 2,
      name: "Rahul Mehra",
      role: "Junior Claims Associate",
      location: "Delhi NCR",
      course: "Health Insurance Specialist",
      rating: 5,
      avatarColor: "from-teal-500 to-emerald-600",
      content:
        "Understanding how cashless pre-authorization, initial approval, and final discharge summaries are coordinated between hospitals and TPAs was my biggest takeaway. The course cuts through unnecessary medical jargon and focuses strictly on real workflows.",
    },
    {
      id: 3,
      name: "Pooja Krishnan",
      role: "Hospital Administration Intern",
      location: "Chennai",
      course: "Hospital Billing Learning System",
      rating: 5,
      avatarColor: "from-blue-500 to-indigo-600",
      content:
        "I was always confused about itemized service charges, pharmacy billing, and bed categories. This course systematically walked through the patient journey from admission registration to final billing clearance. Truly practical operations training.",
    },
    {
      id: 4,
      name: "Vikramaditya Sengupta",
      role: "Career Switcher &bull; RCM Associate",
      location: "Kolkata",
      course: "Revenue Cycle Management Mastery",
      rating: 5,
      avatarColor: "from-purple-500 to-pink-600",
      content:
        "The denial management and aging accounts receivable modules gave me a massive edge in my interviews. Learning how hospitals analyze claim rejections and follow up on pending payments made me stand out from other candidates.",
    },
    {
      id: 5,
      name: "Sneha Patel",
      role: "Life Sciences Graduate &bull; Operations Coordinator",
      location: "Ahmedabad",
      course: "All Three Courses (Bundle)",
      rating: 5,
      avatarColor: "from-rose-500 to-orange-500",
      content:
        "Enrolling in the complete bundle was the best decision. Instead of looking at hospital billing in isolation, I understood how front-desk patient registration connects to insurance claims and ends with revenue optimization reports.",
    },
    {
      id: 6,
      name: "Arjun Nambiar",
      role: "Medical Records & Billing Associate",
      location: "Kochi",
      course: "Hospital Billing Learning System",
      rating: 5,
      avatarColor: "from-cyan-500 to-blue-600",
      content:
        "Clear, structured, and completely realistic. The lessons on hospital tariff sheets, surgical package billing, and day-care admission clearance gave me practical knowledge I apply every day in my hospital desk job.",
    },
    {
      id: 7,
      name: "Divya Nair",
      role: "BBA Healthcare Management Graduate",
      location: "Hyderabad",
      course: "All Three Courses (Bundle)",
      rating: 5,
      avatarColor: "from-amber-500 to-yellow-600",
      content:
        "College taught us generic healthcare administration theory, but COWRIN showed us actual industry operations: pre-auth forms, TPA coordination portals, claim settlement reconciliation, and denial resolution workflows.",
    },
    {
      id: 8,
      name: "Karthik Iyer",
      role: "Insurance Verification Analyst",
      location: "Mumbai",
      course: "Health Insurance Specialist",
      rating: 5,
      avatarColor: "from-emerald-500 to-teal-600",
      content:
        "The breakdown of policy exclusions, network hospital cashless approval timelines, and claim denial codes was extremely detailed and easy to follow. Perfect for anyone wanting to work in insurance coordination desks.",
    },
    {
      id: 9,
      name: "Meenakshi Sundaram",
      role: "Accounts Executive in Clinic Network",
      location: "Pune",
      course: "Revenue Cycle Management Mastery",
      rating: 5,
      avatarColor: "from-violet-500 to-purple-600",
      content:
        "I needed to understand how payment tracking and claims follow-up support hospital cash flows. The RCM mastery program explained the financial mechanics behind healthcare services without any ambiguity.",
    },
    {
      id: 10,
      name: "Siddharth Roy",
      role: "B.Sc Graduate &bull; Healthcare Operations Trainee",
      location: "Gurugram",
      course: "All Three Courses (Bundle)",
      rating: 5,
      avatarColor: "from-orange-600 to-red-600",
      content:
        "The promise of zero medical background needed is 100% genuine. The mentors explained hospital operations from the ground up. The verified certificate and practical knowledge helped me transition smoothly into a corporate hospital career.",
    },
  ];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#0B0B0B] text-white relative overflow-hidden bg-grid-dark border-t border-white/10">
      {/* Inline styles for guaranteed CSS animation across all bundlers */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes cowrinScroll {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(-50%, 0, 0);
              }
            }

            .cowrin-marquee-track {
              display: flex !important;
              flex-direction: row !important;
              width: max-content !important;
              will-change: transform;
              animation: cowrinScroll 42s linear infinite !important;
            }

            .cowrin-marquee-track:hover {
              animation-play-state: paused !important;
            }
          `,
        }}
      />

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF5A1F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 text-center space-y-3">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F]">
          <span>LEARNER SUCCESS STORIES</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Real Stories from{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] to-[#ff8453]">
            Healthcare Operations Learners
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-normal">
          Hear how students, freshers, and career switchers built their foundational knowledge of hospital billing, insurance, and revenue cycle operations.
        </p>
      </div>

      {/* Single-Row Auto-scrolling Marquee */}
      <div className="relative overflow-hidden w-full py-4 select-none">
        {/* Left & Right gradient edge masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-16 sm:w-32 bg-gradient-to-r from-[#0B0B0B] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 sm:w-32 bg-gradient-to-l from-[#0B0B0B] to-transparent" />

        {/* Single Row: Continuous Infinite Auto-Scroll Track */}
        <div className="cowrin-marquee-track flex gap-6">
          {[...testimonials, ...testimonials].map((item, idx) => (
            <div
              key={`testimonial-card-${idx}`}
              className="w-[330px] sm:w-[410px] shrink-0 p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#FF5A1F]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top: Rating & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#FF5A1F]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" /> Verified Learner
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author & Location */}
              <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${item.avatarColor} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-md`}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div className="truncate">
                    <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                      {item.name}
                    </h4>
                    <p
                      className="text-[11px] text-slate-400 truncate"
                      dangerouslySetInnerHTML={{ __html: item.role }}
                    />
                  </div>
                </div>

                <span className="text-[10px] font-mono text-[#FF5A1F] bg-[#FF5A1F]/10 px-2.5 py-0.5 rounded-full border border-[#FF5A1F]/20 shrink-0">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
