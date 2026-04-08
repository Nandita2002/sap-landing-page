"use client";

import React, { useEffect, useState } from "react";

type FormType = { name: string; email: string; phone: string; message: string };
type FieldName = keyof FormType;

const inputBase =
  "w-full border border-slate-200 bg-slate-50 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition placeholder:text-slate-400";

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
    {children}
  </label>
);

const StickyEnquiry: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [form, setForm] = useState<FormType>({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setOpen(!mobile); // open on desktop, closed on mobile
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openEnquiry", handler);
    return () => window.removeEventListener("openEnquiry", handler);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as FieldName;
    setForm((prev) => ({ ...prev, [name]: e.target.value }));
  };

 const handleSubmit = async () => {
  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbwwEmBx_JIisguX5XsfNHRzEEbbBRIBH4AvhqiLy7UFBNWZ0eaSOjD_HXGy48TCuiF1Ng/exec",
      {
        method: "POST",
        body: JSON.stringify({
          ...form,
          source: "sticky" // optional but useful
        }),
      }
    );

    const data = await res.json();

    if (data.status === "success") {
      alert("🚀 Your first milestone is unlocked! You’re already halfway to becoming a SAP professional. Our team will guide you through the next steps.");



      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setOpen(false);
    } else {
      alert("Error submitting form");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

  return (
    <>
      {/* MOBILE BACKDROP */}
      {open && isMobile && (
        <div
          className="fixed inset-0 bg-black/40 z-[9998]"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="fixed bottom-6 right-4 sm:right-6 z-[9999] flex flex-col items-end gap-3">

        {/* FORM PANEL */}
        {open && (
          <div
            className={`bg-white border border-slate-200 overflow-hidden shadow-xl
              ${isMobile
                ? "fixed bottom-0 left-0 right-0 w-full rounded-t-2xl rounded-b-none"
                : "w-[300px] rounded-2xl"
              }`}
          >
            <div className="bg-blue-600 px-4 py-3 flex justify-between items-center">
              <div>
                <p className="text-[10px] font-semibold text-blue-200 uppercase tracking-widest mb-0.5">
                  Free demo · April batch
                </p>
                <p className="text-sm font-semibold text-white">Book your free demo</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="bg-white/15 hover:bg-white/25 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs transition"
              >
                ✕
              </button>
            </div>

            <div className="p-3 flex flex-col gap-2.5">
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:grid-cols-2">
                <div>
                  <Label>Name</Label>
                  <input type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="John Doe" className={inputBase} />
                </div>
                <div>
                  <Label>Email</Label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="you@email.com" className={inputBase} />
                </div>
              </div>

              <div>
                <Label>Phone</Label>
                <div className="flex border border-slate-200 rounded-lg overflow-hidden bg-slate-50 focus-within:ring-2 focus-within:ring-blue-500 transition">
                  <span className="px-2.5 flex items-center text-xs text-slate-500 border-r border-slate-200 bg-slate-100 whitespace-nowrap">
                    +91
                  </span>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="9876543210"
                    className="flex-1 px-2.5 py-1.5 text-xs text-slate-900 outline-none bg-transparent placeholder:text-slate-400" />
                </div>
              </div>

              <div>
                <Label>How can we help?</Label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={2}
                  placeholder="Tell us what you're looking for..."
                  className={inputBase + " resize-none"} />
              </div>

              <button onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-xs font-semibold transition">
                Submit enquiry →
              </button>

              <div className="flex justify-center gap-3">
                <span className="text-[10px] text-slate-400">🔒 No spam</span>
                <span className="text-[10px] text-slate-400">⚡ Instant reply</span>
                <span className="text-[10px] text-slate-400">🎓 Free demo</span>
              </div>
            </div>
          </div>
        )}

        {/* SINGLE FAB — only renders when panel is closed */}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg transition flex items-center gap-2"
          >
            ✎ Enquire now
          </button>
        )}

      </div>
    </>
  );
};

export default StickyEnquiry;