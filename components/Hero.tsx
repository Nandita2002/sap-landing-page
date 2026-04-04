"use client";

import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#F5F7FA]"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-blue-100 opacity-40" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-2 items-center gap-16">

        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1 text-xs font-semibold text-blue-700 uppercase tracking-wide">
            ● Live Training Available
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0a1628]">
            Master SAP & <br />
            <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              Get Job Ready
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 text-base md:text-lg text-gray-600 max-w-md leading-relaxed">
            Get trained in SAP MM, FICO, ABAP & more with real-time projects,
            expert mentors, and placement support.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold shadow-md hover:shadow-xl transition hover:-translate-y-1">
              Book Free Demo
            </button>

            <button className="px-6 py-3 rounded-lg border border-blue-200 text-blue-700 font-semibold hover:bg-blue-50 transition hover:-translate-y-1">
              Explore Courses
            </button>
          </div>

          {/* Trust Points */}
          <div className="mt-7 flex flex-col gap-2 text-sm text-gray-600">
            {[
              "No prior SAP experience needed",
              "Weekend & weekday batches",
              "Certification included",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="w-4 h-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs">✓</span>
                {t}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 w-full max-w-sm">
            {[
              { val: "500+", label: "Students Trained" },
              { val: "12+", label: "SAP Modules" },
              { val: "90%", label: "Placement Support" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center"
              >
                <div className="text-lg font-bold text-blue-600">{s.val}</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex justify-center md:justify-end">
          <div className="w-[clamp(300px,40vw,420px)]">

            <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-xl">

              {/* Header */}
              <div className="flex justify-between items-center mb-5">
                <div>
                  <h4 className="font-semibold text-gray-800">
                    SAP Training Portal
                  </h4>
                  <p className="text-xs text-gray-500">
                    Your Learning Dashboard
                  </p>
                </div>
                <span className="text-xs font-bold text-red-500 bg-red-100 px-2 py-1 rounded-full">
                  LIVE
                </span>
              </div>

              {/* Modules */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["SAP MM", "SAP FICO", "SAP ABAP"].map((m) => (
                  <span
                    key={m}
                    className="text-xs px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded-md font-medium"
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* Progress */}
              {[
                { label: "SAP MM", pct: 78 },
                { label: "SAP FICO", pct: 55 },
                { label: "ABAP", pct: 40 },
              ].map((item) => (
                <div key={item.label} className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span>{item.label}</span>
                    <span className="text-blue-600 font-semibold">
                      {item.pct}%
                    </span>
                  </div>

                  <div className="h-2 bg-blue-50 rounded-full">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}

              {/* Next Session */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-xs text-blue-700 font-semibold">
                    Next Live Session
                  </p>
                  <p className="text-xs text-gray-600">
                    SAP MM · Today 7:00 PM
                  </p>
                </div>
                <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-md">
                  Join →
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
    </section>
  );
};

export default Hero;