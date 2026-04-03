"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const FloatingWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open contact form"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <MessageCircle size={22} />
      </button>

      {/* Panel */}
      <div
        className={`fixed bottom-6 right-6 w-[90%] max-w-sm z-50 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="relative">

          {/* Glow */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] blur opacity-30"></div>

          {/* Box */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl">

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">
                Talk to Us
              </h3>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Inputs */}
            <div className="space-y-3">

              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() => {
                  window.open("https://wa.me/91XXXXXXXXXX", "_blank");
                }}
                className="w-full bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] text-white py-2 rounded-lg font-semibold hover:scale-105 transition"
              >
                Contact Now
              </button>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingWidget;