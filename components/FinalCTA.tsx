"use client";

import React from "react";

const FinalCTA = () => {
  return (
    <section id="final-cta" className="py-24 px-4 bg-gradient-to-r from-[#1e2a47] to-[#0f172a] text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-blue-500 opacity-10 blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Start Your SAP Career Today
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Join our upcoming demo session and take the first step towards a high-paying SAP career.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          
          {/* Primary CTA */}
          <button
            onClick={() =>
              window.open("https://wa.me/91XXXXXXXXXX", "_blank")
            }
           className="bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 hover:scale-105 transition duration-300"
          >
            Join Free Demo
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() =>
              window.open("https://wa.me/91XXXXXXXXXX", "_blank")
            }
           className="bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 hover:scale-105 transition duration-300"
          >
            Talk to Mentor
          </button>

        </div>

        {/* Urgency Line */}
        <p className="mt-6 text-sm text-red-400">
          Limited seats available • Next batch filling fast
        </p>

      </div>
    </section>
  );
};

export default FinalCTA;