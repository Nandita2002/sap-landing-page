"use client";

import React from "react";

const TopBanner: React.FC = () => {
  return (
    <div className="w-full bg-white text-slate-700 text-sm py-2 overflow-hidden border-b border-slate-200">
      <div className="relative flex w-max animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-10 px-6 whitespace-nowrap">
            <span className="font-semibold text-slate-900">
              Admissions Open for April 2026 Batch
            </span>
            <span className="text-slate-600">
              Get up to 25% Scholarship on{" "}
              <span className="font-semibold text-slate-900">SAP</span> Courses
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBanner;