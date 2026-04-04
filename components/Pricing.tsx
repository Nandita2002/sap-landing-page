"use client";

import React from "react";

const PHONE = "91XXXXXXXXXX";

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
      30% OFF
    </div>

    <div className="text-center">

      <h3 className="text-xl font-semibold text-gray-900">
        SAP Training Program
      </h3>

      <p className="text-gray-500 text-xs mt-1">
        Offer valid till end of this month
      </p>

      <p className="text-green-600 text-sm font-medium mt-1">
        Special Offer Available
      </p>

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

      {/* CTA */}
      <div className="mt-6">
        <button className="px-6 py-2.5 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-500 shadow hover:scale-105 transition">
          Claim Offer Now
        </button>

        <p className="text-red-500 text-xs mt-2">
          ⚡ Limited seats available
        </p>
      </div>

    </div>
  </div>
</div>
  );
};

export default Pricing;