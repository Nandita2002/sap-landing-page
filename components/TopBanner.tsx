"use client";

import React from "react";

const TopBanner: React.FC = () => {
  return (
   <div className="sticky top-0 z-[999] w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white text-sm py-2">

      <div className="whitespace-nowrap animate-marquee">
        <span className="mx-8 font-semibold">
          Admissions Open for April-26 Batch!
        </span>

        <span className="mx-8">
          Get 25% Off on All SAP Courses – Enroll Now!
        </span>

        {/* repeat for smooth loop */}
        <span className="mx-8 font-semibold">
          Admissions Open for April-26 Batch!
        </span>

        <span className="mx-8">
          Get 25% Off on All SAP Courses – Enroll Now!
        </span>
      </div>
    </div>
  );
};

export default TopBanner;