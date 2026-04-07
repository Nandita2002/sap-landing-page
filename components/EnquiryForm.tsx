"use client";

import React from "react";

const EnquiryForm: React.FC = () => {
  return (
    <div className="w-full">

      {/* Heading */}
      <div className="mb-4">
        <h3 className="text-blue-700 font-semibold text-sm">
          Admissions Open for April-26 Batch!
        </h3>
        <p className="text-xs text-gray-500">
          Get 25% Off on All SAP Courses – Enroll Now!
        </p>
      </div>

      <div className="space-y-3">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="email"
          placeholder="Email ID"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <div className="flex">
          <span className="px-3 flex items-center text-sm bg-gray-100 border border-r-0 rounded-l-lg">
            +91
          </span>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-200 rounded-r-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <textarea
          placeholder="How can we help?"
          rows={3}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          className="w-full bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] text-white py-2.5 rounded-lg text-sm font-semibold hover:scale-[1.02] transition"
        >
          Submit
        </button>

      </div>
    </div>
  );
};

export default EnquiryForm;