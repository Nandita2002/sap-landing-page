"use client";

import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start overflow-hidden bg-white"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-blue-100 opacity-40" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-8 pb-16 md:pt-12 md:pb-20 grid md:grid-cols-2 items-center gap-12">

        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1 text-xs font-semibold text-blue-700 uppercase tracking-wide">
            🔥 Live SAP Training – Limited Batch
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
          <div className="mt-6 flex flex-col gap-2 text-sm text-gray-600">
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
          <div className="mt-8 grid grid-cols-3 gap-4 w-full max-w-sm">
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

        {/* RIGHT → CONVERSION FORM */}
        <div className="flex justify-center md:justify-end">
          <div className="w-[clamp(300px,40vw,420px)]">

            <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-2xl p-6 shadow-2xl relative overflow-hidden">

              {/* Glow Effect */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/20 blur-3xl" />

              {/* Header */}
              <div className="mb-5">
                <h4 className="font-bold text-gray-900 text-lg">
                  Book Your Free Demo
                </h4>
                <p className="text-xs text-gray-500">
                  Limited seats available
                </p>
              </div>

              {/* Form */}
              <form className="flex flex-col gap-3">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg outline-none transition"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg outline-none transition"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-lg outline-none transition"
                />

                <button className="mt-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition hover:-translate-y-1">
                  Reserve My Seat →
                </button>
              </form>

              {/* Trust Line */}
              <p className="text-[11px] text-gray-500 mt-3 text-center">
                🔒 No spam. We’ll contact you within 24 hrs.
              </p>

              {/* Urgency Tag */}
              <div className="absolute top-4 right-4 text-[10px] bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold animate-pulse">
                12 seats left
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