"use client";

import React, { useEffect, useRef, useState } from "react";

const inputClass =
  "w-full border border-slate-200 bg-slate-50 rounded-xl px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition placeholder:text-slate-400";

const Popup = () => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const hasOpened = useRef(false); // ✅ prevents double opening

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const openHandler = () => {
      if (!hasOpened.current) {
        setOpen(true);
        hasOpened.current = true;
      }
    };

    window.addEventListener("openEnquiry", openHandler);

    const timer = setTimeout(() => {
      if (!hasOpened.current) {
        setOpen(true);
        hasOpened.current = true;
      }
    }, 3000);

    return () => {
      window.removeEventListener("openEnquiry", openHandler);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  if (!open) return null;

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzUUxx36ndeem-cNIPDF_VnzNWXCY6fn6-fZ0cj4fwljB9FJiN6X5tyuFghJ76DrkA4DA/exec",
        {
          method: "POST",
          body: JSON.stringify(form),
        }
      );

      const text = await res.text();
      const data = JSON.parse(text);

      if (data.status === "success") {
        setSuccess(true);

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        // ✅ Auto close after 2.5 sec
        setTimeout(() => {
          setOpen(false);
          setSuccess(false);
        }, 2500);
      } else {
        console.error("Error saving data", data);
      }
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200">

        {/* Header */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-5 flex justify-between items-start">
          <div>
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1">
              Admissions Open · April 2026
            </p>
            <h2 className="text-[17px] font-semibold text-slate-900">
              Get 25% off all SAP courses
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">
              Enroll now — limited seats available
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full w-7 h-7 flex items-center justify-center text-xs"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">

          {success ? (
            <div className="text-center py-6">
              <h3 className="text-lg font-bold text-green-600 mb-2">
                🚀 First step done!
              </h3>
              <p className="text-sm text-gray-600">
                You&rsquo;re now closer to your SAP career. Our team will contact you shortly.
              </p>
              <p className="text-xs text-gray-400 mt-3">
                ⏳ Closing automatically...
              </p>
            </div>
          ) : (
            <div className="space-y-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className={inputClass}
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className={inputClass}
                />
              </div>

              <input
                type="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className={inputClass}
              />

              <textarea
                rows={3}
                placeholder="How can we help?"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className={inputClass}
              />

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-semibold"
              >
                Submit enquiry →
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Popup;