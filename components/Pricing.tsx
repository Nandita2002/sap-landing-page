"use client";

import React from "react";

const PHONE = "91XXXXXXXXXX";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative py-28 px-4 bg-[#F5F7FA] overflow-hidden"
    >
      {/* Tech Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a1628] leading-tight">
          Start Your{" "}
          <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent">
            SAP Journey
          </span>{" "}
          Today
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Limited seats available for upcoming batches. Secure your spot now.
        </p>

        {/* Card */}
        <div className="mt-12 relative group">

          {/* Glow Border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 blur opacity-20 group-hover:opacity-40 transition duration-500" />

          <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-10 shadow-xl border border-white/40">

            {/* Discount Badge */}
            <div className="absolute top-5 right-5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm px-4 py-1 rounded-full font-semibold shadow-md animate-pulse">
              30% OFF
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#0a1628]">
              SAP Training Program
            </h3>

            <p className="mt-2 text-gray-500">
              Offer valid till end of this month
            </p>

            <p className="text-lg font-semibold text-green-600 mt-1">
              Special Offer Available
            </p>

            {/* Features */}
            <div className="mt-8 space-y-3 text-gray-700 text-left max-w-sm mx-auto">
              {[
                "Live Interactive Sessions",
                "Real-Time Projects",
                "Certification Support",
                "Career Guidance",
              ].map((f) => (
                <p key={f} className="flex items-center gap-2">
                  <span className="text-blue-600">✔</span> {f}
                </p>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => window.open(`https://wa.me/${PHONE}`, "_blank")}
              className="mt-8 relative px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-500 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10">Claim Offer Now</span>

              {/* Glow effect */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-400 blur opacity-30 group-hover:opacity-60 transition"></span>
            </button>

            {/* Urgency */}
            <p className="mt-4 text-sm text-red-500 font-medium animate-pulse">
              ⚡ Limited seats available for this batch
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;