"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  course: string;
  goal: string;
};

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
};

export default function FreeConsultationForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    course: "",
    goal: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: Errors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(form.email))
      newErrors.email = "Enter a valid email";

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!form.phone) newErrors.phone = "Phone is required";
    else if (!phoneRegex.test(form.phone))
      newErrors.phone = "Enter valid 10-digit number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwmYxQoo0FTD1sv7831Ul8b5sd7mWiE6rKpd5Ox_0AJweph1B7lA6SSF24s-BvGpndE/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      setSuccess(true);
      setForm({ name: "", email: "", phone: "", course: "", goal: "" });
    } catch (err) {
      alert("Submission failed");
    }

    setLoading(false);
  };

  return (
    <section id="consultation" className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get Your Free Consultation
          </h2>
          <p className="text-gray-500 mt-2 text-base">
            Speak with our experts and get a personalized roadmap
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">

          {success && (
            <div className="mb-5 p-3 bg-green-50 text-green-700 rounded-lg text-center text-sm font-medium">
              ✅ Submitted successfully! Our team will contact you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">

            {/* NAME */}
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-600 mb-1 block">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* EMAIL */}
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-600 mb-1 block">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* PHONE */}
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-gray-600 mb-1 block">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {/* COURSE */}
            <div>
              <label htmlFor="course" className="text-sm font-medium text-gray-600 mb-1 block">
                Course Interested In
              </label>
              <select
                id="course"
                name="course"
                value={form.course}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
              >
                <option value="">Select Course</option>
                <option>SAP MM</option>
                <option>SAP FICO</option>
                <option>SAP SD</option>
                <option>Other</option>
              </select>
            </div>

            {/* 🔥 FIXED TEXTAREA (SEPARATE BLOCK) */}
            <div className="md:col-span-2 mt-2">
              <label htmlFor="goal" className="text-sm font-medium text-gray-600 mb-1 block">
                Your Goal (Optional)
              </label>
              <textarea
                id="goal"
                name="goal"
                value={form.goal}
                onChange={handleChange}
                placeholder="Tell us what you want to achieve..."
                rows={3}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* BUTTON */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-lg text-white font-semibold text-base shadow-md 
                bg-gradient-to-r from-blue-600 to-blue-500 
                hover:from-blue-700 hover:to-blue-600 
                transition-all duration-200"
              >
                {loading ? "Submitting..." : "Book Free Demo Class"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}