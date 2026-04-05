"use client";

import React from "react";

/* 🔥 ENQUIRY TRIGGER */
const handleEnquiry = () => {
  const event = new CustomEvent("openEnquiry");
  window.dispatchEvent(event);
};

const Pricing = () => {
  return (
<div className="max-w-3xl mx-auto relative z-10">

  {/* Heading */}
  <div className="text-center mb-6">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
      Start Your <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">SAP Journey</span>
    </h2>
    <p className="text-gray-600 mt-2 text-sm">
      Limited seats available. Secure your spot now.
    </p>
  </div>

  {/* Card */}
  <div className="relative rounded-xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-md px-6 py-6">

    {/* Badge */}
    <div className="absolute top-3 right-3 bg-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
      Limited Seats
    </div>

    <div className="text-center">

      <h3 className="text-xl font-semibold text-gray-900">
        SAP Training Program
      </h3>

      <p className="text-gray-500 text-xs mt-1">
        Customized learning path based on your goals
      </p>

      {/* 🔥 VALUE STATEMENT (REPLACES PRICE) */}
      <div className="mt-4">
        <p className="text-sm text-gray-700 font-medium">
          Get a personalized roadmap, demo session, and course details before enrolling.
        </p>
      </div>

      {/* Features */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-700 text-left max-w-md mx-auto">
        {[
          "Live Interactive Sessions",
          "Real-Time Projects",
          "Certification Support",
          "Career Guidance",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-blue-600">✓</span>
            {item}
          </div>
        ))}
      </div>

      {/* 🔥 TRUST + SOCIAL PROOF */}
      <p className="text-xs text-gray-500 mt-4">
        120+ students enrolled this month
      </p>

      {/* CTA */}
      <div className="mt-5">
        <button
          onClick={handleEnquiry}
          className="px-6 py-2.5 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-500 shadow hover:scale-105 transition"
        >
          Book Free Demo →
        </button>

        <p className="text-red-500 text-xs mt-2">
          ⚡ Only few seats left
        </p>
      </div>

    </div>
  </div>
</div>
  );
};

export default Pricing;