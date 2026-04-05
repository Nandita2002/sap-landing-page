"use client";

import React, { useEffect, useState } from "react";

const inputClass =
  "w-full border border-slate-200 bg-slate-50 rounded-xl px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition placeholder:text-slate-400";

const Popup = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const shown = sessionStorage.getItem("popupShown");
    if (!shown) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("popupShown", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener("openEnquiry", openHandler);
    return () => window.removeEventListener("openEnquiry", openHandler);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200">

        {/* Header */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-5 flex justify-between items-start">
          <div>
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1">
              Admissions Open · April 2026
            </p>
            <h2 className="text-[17px] font-semibold text-slate-900 leading-snug">
              Get 25% off all SAP courses
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">
              Enroll now — limited seats available
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="ml-4 mt-0.5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full w-7 h-7 flex items-center justify-center text-xs transition"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="px-6 py-5 space-y-4">

          {/* Name + Email */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                Full name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                Email ID
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
              Phone no
            </label>
            <div className="flex border border-slate-200 rounded-xl overflow-hidden bg-slate-50 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition">
              <span className="px-3 flex items-center text-sm text-slate-500 border-r border-slate-200 bg-slate-100 whitespace-nowrap">
                🇮🇳 +91
              </span>
              <input
                type="tel"
                placeholder="9876543210"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="flex-1 px-3 py-2.5 text-sm text-slate-900 outline-none bg-transparent placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
              How can we help?
            </label>
            <textarea
              rows={3}
              placeholder="Tell us what you're looking for..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={inputClass + " resize-none"}
            />
          </div>

          {/* CTA */}
          <button
            onClick={() => { console.log(form); setOpen(false); }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-semibold transition"
          >
            Submit enquiry →
          </button>

          {/* Trust */}
          <div className="flex justify-center gap-5 pt-1">
            <span className="text-xs text-slate-400">🔒 No spam</span>
            <span className="text-xs text-slate-400">⚡ Instant response</span>
            <span className="text-xs text-slate-400">🎓 Free demo</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Popup;