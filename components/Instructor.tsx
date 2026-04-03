"use client";
import React from "react";
import Image from "next/image";
import { BadgeCheck, Briefcase, GraduationCap, Users } from "lucide-react";

const highlights = [
  { icon: <Briefcase className="w-4 h-4" />, text: "Worked with enterprise-level SAP systems" },
  { icon: <GraduationCap className="w-4 h-4" />, text: "Real-time project-based teaching" },
  { icon: <Users className="w-4 h-4" />, text: "Career guidance & mentorship" },
];

const stats = [
  { value: "100+", label: "Students Trained" },
  { value: "8+", label: "Years Experience" },
  { value: "3", label: "SAP Modules" },
];

const Instructor = () => {
  return (
    <section
      aria-labelledby="instructor-heading"
      className="relative py-24 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Section Label + Heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-sky-400 bg-sky-400/10 border border-sky-400/20 px-4 py-1.5 rounded-full mb-4">
            Meet Your Instructor
          </span>
          <h2
            id="instructor-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Learn from{" "}
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Industry Experts
            </span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-sky-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative w-[320px] h-[380px] sm:w-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/instructor.png"
                  alt="Rahul Sharma – SAP Consultant and Instructor"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3">
                  <BadgeCheck className="text-sky-400 w-5 h-5 shrink-0" />
                  <span className="text-white text-sm font-medium">Certified SAP Professional</span>
                </div>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="text-white space-y-6">

            {/* Name & Role */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Rahul Sharma
              </h3>
              <p className="text-sky-400 mt-1 text-sm font-medium tracking-wide">
                SAP Consultant • 8+ Years Experience
              </p>
            </div>

            {/* Bio */}
            <p className="text-slate-300 leading-relaxed text-base">
              Experienced SAP professional specializing in{" "}
              <span className="text-white font-medium">MM, FICO, and ABAP</span>{" "}
              with real-world project exposure. Trained 100+ students and helped
              them build successful careers in SAP.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-sky-400/30 transition"
                >
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <ul className="space-y-3" aria-label="Instructor highlights">
              {highlights.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-sm hover:border-sky-400/30 hover:text-white transition"
                >
                  <span className="text-sky-400 shrink-0">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              aria-label="Join a free demo session with Rahul Sharma"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Join Free Demo
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;