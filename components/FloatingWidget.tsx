"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

const FloatingWidget: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {/* Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          title="Open chat"
          aria-label="Open chat"
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
        >
          <MessageCircle size={22} />
        </button>
      )}

      {/* Panel */}
      <div
        className={`fixed bottom-6 right-6 w-[90%] max-w-sm z-50 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="relative">

          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] blur opacity-30"></div>

          <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl">

            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-800">Talk to Us</h3>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <EnquiryForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingWidget;