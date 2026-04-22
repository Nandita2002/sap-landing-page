"use client";

import { useState } from "react";

type HeroFormData = {
  name: string;
  email: string;
  phone: string;
  course: string;
};

type HeroFormErrors = {
  name?: string;
  email?: string;
  phone?: string;
};

export default function Hero() {
  const [form, setForm] = useState<HeroFormData>({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [errors, setErrors] = useState<HeroFormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: HeroFormErrors = {};
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
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
        body: JSON.stringify({
          ...form,
          goal: "Submitted via hero consultation form",
          source: "consultation",
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || "Failed to submit form");
      }

      if (data.status === "success") {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", course: "" });
      } else {
        alert("Error: " + (data.message || "Please try again."));
      }
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToCourses = () => {
    const el = document.getElementById("courses");
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-24 bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-16 right-0 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8 items-start">
          <div className="text-center lg:text-left bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 lg:p-8 shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
            <div className="inline-flex flex-wrap justify-center lg:justify-start items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-blue-700 shadow-sm backdrop-blur mb-5 sm:mb-6">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              SAP Training · May 2026 Cohort
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3rem] xl:text-[3.2rem] font-extrabold tracking-tight text-slate-900 leading-tight mb-5 sm:mb-6">
              Build a High-Value{" "}
              <span className="bg-gradient-to-r from-blue-700 to-indigo-500 bg-clip-text text-transparent">
                SAP Career
              </span>{" "}
              with Real Project Experience
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-7 sm:mb-8 max-w-3xl mx-auto lg:mx-0">
              Master SAP S/4HANA modules with expert-led sessions, live
              implementation scenarios, and interview-focused mentorship designed
              for beginners and working professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-7">
              <a
                href="/brochure.pdf"
                download
                className="w-full sm:w-auto px-7 sm:px-10 py-3.5 sm:py-4 rounded-xl text-center text-white font-semibold text-sm sm:text-base shadow-[0_16px_32px_rgba(37,99,235,0.25)] bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 active:scale-95 transition-all duration-200"
              >
                Download Brochure
              </a>

              <button
                onClick={scrollToCourses}
                className="w-full sm:w-auto px-7 sm:px-10 py-3.5 sm:py-4 rounded-xl border border-slate-300 bg-white/90 text-slate-700 font-semibold text-sm sm:text-base hover:bg-white active:scale-95 transition"
              >
                View Courses
              </button>
            </div>

            <p className="text-sm text-slate-500 mb-6">Limited slots available this month</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 max-w-3xl mx-auto lg:mx-0">
              {[
                "1000+ Students Trained",
                "Placement & Interview Support",
                "Mentors from Top MNCs",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-[0_14px_34px_rgba(15,23,42,0.08)] p-5 md:p-6 lg:p-7 border border-slate-200">
            <div className="mb-4">
              <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Get Free Consultation
              </h2>
              <p className="text-slate-600 mt-1 text-sm">
                Talk to SAP experts and get a career roadmap.
              </p>
            </div>

            {success && (
              <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg text-center text-sm font-medium">
                Submitted successfully! Our team will contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
              <div>
                <label htmlFor="hero-name" className="text-sm font-medium text-gray-600 mb-1 block">
                  Full Name
                </label>
                <input
                  id="hero-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="hero-email" className="text-sm font-medium text-gray-600 mb-1 block">
                  Email Address
                </label>
                <input
                  id="hero-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="hero-phone" className="text-sm font-medium text-gray-600 mb-1 block">
                  Phone Number
                </label>
                <input
                  id="hero-phone"
                  name="phone"
                  type="tel"
                  maxLength={10}
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="hero-course" className="text-sm font-medium text-gray-600 mb-1 block">
                  Course
                </label>
                <select
                  id="hero-course"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                >
                  <option value="">Select Course</option>
                  <option>SAP MM</option>
                  <option>SAP FICO</option>
                  <option>SAP SD</option>
                  <option>SAP ABAP</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-1 w-full py-3.5 rounded-xl text-white font-semibold text-sm shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 active:scale-[0.98] disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Book Free Consultation"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}