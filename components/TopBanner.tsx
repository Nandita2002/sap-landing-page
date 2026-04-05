"use client";

import React from "react";

const TopBanner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white text-sm py-2 overflow-hidden">

      <div className="flex animate-marquee whitespace-nowrap">

        {/* Duplicate content for smooth loop */}
        <div className="flex gap-8 px-4">
          <span className="font-semibold">
            Admissions Open for April-26 Batch!
          </span>
          <span>
            Get 25% Off on All SAP Courses – Enroll Now!
          </span>
        </div>

        <div className="flex gap-8 px-4">
          <span className="font-semibold">
            Admissions Open for April-26 Batch!
          </span>
          <span>
            Get 25% Off on All SAP Courses – Enroll Now!
          </span>
        </div>

      </div>

    </div>
  );
};

export default TopBanner;