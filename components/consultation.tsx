"use client";

import { useState } from "react";

type FormData = { name: string; email: string; phone: string; course: string; goal: string; };
type Errors = { name?: string; email?: string; phone?: string; };

export default function FreeConsultationForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", course: "", goal: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: Errors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(form.email)) newErrors.email = "Enter a valid email";
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!form.phone) newErrors.phone = "Phone is required";
    else if (!phoneRegex.test(form.phone)) newErrors.phone = "Enter valid 10-digit number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "consultation" }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || "Failed to submit form");
      }
      if (data.status === "success") {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", course: "", goal: "" });
      } else {
        alert("Error: " + (data.message || "Please try again."));
      }
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section id="consultation" className="py-14 md:py-20 px-4 bg-gradient-to-b from-white to-blue-50/70 scroll-mt-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6 md:mb-10 px-2">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold tracking-wide text-blue-700 uppercase mb-4">
            Career Guidance Session
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Get Your Free Consultation
          </h2>
          <p className="text-slate-600 mt-2 text-sm md:text-base">
            Talk to SAP experts and get a clear roadmap tailored to your goals.
          </p>
        </div>
        <div className="bg-white/95 rounded-3xl shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-5 md:p-8 border border-blue-100 backdrop-blur">
          {success && (
            <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg text-center text-sm font-medium">
              ✅ Submitted successfully! Our team will contact you shortly.
            </div>
          )}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-600 mb-1 block">Full Name</label>
              <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-blue-500 outline-none" />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-600 mb-1 block">Email Address</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-blue-500 outline-none" />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-gray-600 mb-1 block">Phone Number</label>
              <input id="phone" name="phone" type="tel" maxLength={10} value={form.phone} onChange={handleChange} placeholder="Enter your phone" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-blue-500 outline-none" />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="course" className="text-sm font-medium text-gray-600 mb-1 block">Course</label>
              <select id="course" name="course" value={form.course} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                <option value="">Select Course</option>
                <option>SAP MM</option>
                <option>SAP FICO</option>
                <option>SAP SD</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="goal" className="text-sm font-medium text-gray-600 mb-1 block">Your Goal</label>
              <textarea id="goal" name="goal" value={form.goal} onChange={handleChange} placeholder="Career switch? Job? Salary hike?" rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div className="md:col-span-2 mt-2">
              <button type="submit" disabled={loading} aria-label="Book free consultation" className="w-full py-3.5 rounded-xl text-white font-semibold text-base shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 active:scale-[0.98] disabled:opacity-60">
                {loading ? "Submitting..." : "Book Free Consultation"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}