"use client";

import React, { useEffect, useRef, useState } from "react";

const inputClass =
  "w-full border border-slate-200 bg-slate-50 rounded-xl px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition placeholder:text-slate-400";

/* 🔥 SOCIAL DATA */
const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/rise_infotech/",
    hoverColor: "hover:text-pink-500",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17" cy="7" r="1"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Rise-Infotech/100089059015353/",
    hoverColor: "hover:text-blue-500",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/RiseInfotech",
    hoverColor: "hover:text-black",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/rise-infotech/",
    hoverColor: "hover:text-blue-400",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@rise_infotech",
    hoverColor: "hover:text-red-500",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98"/>
      </svg>
    ),
  },
];

/* 🔥 SOCIAL ROW */
const SocialRow = () => (
  <div className="flex justify-center items-center gap-3">

    {/* Instagram */}
    <a
      href="https://www.instagram.com/rise_infotech/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-md bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm4.25 5.5A4.75 4.75 0 1 0 16.75 12 4.76 4.76 0 0 0 12 7.5zm0 7.5A2.75 2.75 0 1 1 14.75 12 2.75 2.75 0 0 1 12 15zm5.25-8.75a1 1 0 1 1-1-1 1 1 0 0 1 1 1z"/>
      </svg>
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/people/Rise-Infotech/100089059015353/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-md bg-[#1877F2]"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-3v-3h3v-2.3c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 1-2 2v2h3.4l-.5 3h-2.9v7A10 10 0 0 0 22 12z"/>
      </svg>
    </a>

    {/* X */}
    <a
      href="https://x.com/RiseInfotech"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-md bg-black"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/>
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/company/rise-infotech/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-md bg-[#0A66C2]"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    </a>

    {/* YouTube */}
    <a
      href="https://www.youtube.com/@rise_infotech"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-md bg-[#FF0000]"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98"/>
      </svg>
    </a>

  </div>
);
const Popup = () => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const autoOpenTimer = useRef<NodeJS.Timeout | null>(null);
  const openedRef = useRef(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const openPopup = () => {
      if (openedRef.current) return;
      openedRef.current = true;
      setSuccess(false);
      setOpen(true);
    };

    window.addEventListener("openEnquiry", openPopup);
    autoOpenTimer.current = setTimeout(openPopup, 3000);

    return () => {
      window.removeEventListener("openEnquiry", openPopup);
      if (autoOpenTimer.current) clearTimeout(autoOpenTimer.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  if (!open) return null;

  const handleSubmit = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzUUxx36ndeem-cNIPDF_VnzNWXCY6fn6-fZ0cj4fwljB9FJiN6X5tyuFghJ76DrkA4DA/exec",
        {
          method: "POST",
          body: JSON.stringify(form),
        }
      );

      const data = JSON.parse(await res.text());

      if (data.status === "success") {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", message: "" });

        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setOpen(false), 2500);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
      onClick={(e) => {
        if (success) return;
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200">

        {/* Header */}
        <div className="bg-slate-50 border-b px-6 py-5 flex justify-between">
          <div>
            <p className="text-xs font-semibold text-blue-600 uppercase mb-1">
              Admissions Open · April 2026
            </p>
            <h2 className="text-[17px] font-semibold">
              Get 25% off all SAP courses
            </h2>
          </div>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">

          {success ? (
            <div className="text-center py-6">
              <h3 className="text-lg font-bold text-green-600 mb-2">
                🚀 First step done!
              </h3>
              <p className="text-sm text-gray-600">
                We’ll contact you shortly.
              </p>
            </div>
          ) : (
            <div className="space-y-4">

              <input
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />

              <input
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />

              <input
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />

              <textarea
                rows={3}
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputClass}
              />

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-3 rounded-xl"
              >
                Submit enquiry →
              </button>

              {/* SOCIAL */}
              <div className="pt-3 border-t">
                <p className="text-xs text-gray-400 text-center mb-2">
                  Follow us
                </p>
                <SocialRow />
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;