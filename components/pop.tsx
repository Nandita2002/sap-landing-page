"use client";

import React, { useEffect, useState } from "react";

const Popup = () => {
  const [open, setOpen] = useState(false);

  // Auto open after 3 sec (only once per session)
  useEffect(() => {
    const shown = sessionStorage.getItem("popupShown");

    if (!shown) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("popupShown", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      
      {/* Card */}
      <div className="relative w-full max-w-md">

        {/* Glow Border */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] blur opacity-30"></div>

        {/* Main Box */}
        <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl">

          {/* Close */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close popup"
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
          >
            ✕
          </button>

          {/* Badge */}
          <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            🚀 Limited Offer
          </span>

          {/* Heading */}
          <h2 className="text-xl font-bold mt-3 text-gray-900">
            Start Your SAP Journey
          </h2>

          <p className="text-sm text-gray-600 mt-1">
            Join our live demo & explore real-time SAP training
          </p>

          {/* Form */}
          <div className="mt-6 space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <input
              type="email"
              placeholder="Email (Optional)"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            {/* CTA */}
            <button
              type="button"
              onClick={() => {
                window.open("https://wa.me/91XXXXXXXXXX", "_blank");
              }}
              className="w-full mt-2 bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] text-white py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition duration-300"
            >
              Book Free Demo
            </button>

            {/* Trust */}
            <p className="text-xs text-gray-500 text-center">
              ✔ No spam • ✔ Free demo • ✔ Instant response
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Popup;