"use client";

import React from "react";

const TopBanner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 text-blue-100 text-sm py-2 overflow-hidden border-b border-white/10">
      <div className="relative flex w-max animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-10 px-6 whitespace-nowrap">
            <span className="font-semibold text-white">
              Admissions Open for April 2026 Batch
            </span>
            <span className="text-blue-100/90">
              Get up to 25% Scholarship on{" "}
              <span className="font-semibold text-white">SAP</span> Courses
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBanner;