"use client";

import React, { useState } from "react";
import { useSheetSubmit } from "@/lib/useSheetSubmit";

const EnquiryForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const { state, submit } = useSheetSubmit();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit({
      source: "Floating Widget",
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
    });
  };

  const isLoading = state === "loading";
  const isSuccess = state === "success";

  return (
    <div className="w-full">

      {isSuccess ? (
        <div className="py-6 text-center flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">✓</div>
          <p className="text-sm font-semibold text-gray-800">Enquiry received!</p>
          <p className="text-xs text-gray-500">We'll reach out within 24 hours.</p>
        </div>
      ) : (
        <>
          {/* Heading */}
          <div className="mb-4">
            <h3 className="text-blue-700 font-semibold text-sm">
              Admissions Open for April-26 Batch!
            </h3>
            <p className="text-xs text-gray-500">
              Get 25% Off on All SAP Courses – Enroll Now!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              required
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Email ID"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <div className="flex">
              <span className="px-3 flex items-center text-sm bg-gray-100 border border-r-0 rounded-l-lg">
                +91
              </span>
              <input
                required
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-gray-200 rounded-r-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <textarea
              placeholder="How can we help?"
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] text-white py-2.5 rounded-lg text-sm font-semibold hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? "Submitting…" : "Submit"}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default EnquiryForm;
