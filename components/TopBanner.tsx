"use client";

import React from "react";

const TopBanner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm py-2 overflow-hidden">

      <div className="relative flex w-max animate-marquee">

        {/* 🔥 Repeat multiple times to avoid empty gap */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-10 px-6 whitespace-nowrap">
            <span className="font-semibold">
              Admissions Open for April-26 Batch!
            </span>
            <span>
              Get 25% Off on All <span className="font-semibold">SAP</span> Courses – Enroll Now!
            </span>
          </div>
        ))}

      </div>

    </div>
  );
};

export default TopBanner;