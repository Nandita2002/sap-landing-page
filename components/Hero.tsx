"use client";

import React, { useState } from "react";

/* 🔥 ENQUIRY TRIGGER */
const handleEnquiry = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("openEnquiry"));
  }
};

const Hero = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwmYxQoo0FTD1sv7831Ul8b5sd7mWiE6rKpd5Ox_0AJweph1B7lA6SSF24s-BvGpndE/exec",
        {
          method: "POST",
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.status === "success") {
        setSuccess(true);

        setForm({
          name: "",
          email: "",
          phone: "",
        });
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <section
      id="home"
      className="relative bg-white overflow-hidden pt-14 pb-14"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, #eff6ff 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">

          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-[11px] font-bold text-blue-700 uppercase tracking-widest mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Live SAP Training – Limited Batch
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.15] text-[#0a1628] mb-4">
            Master SAP &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get Job Ready
            </span>
          </h1>

          <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md mb-7">
            Master SAP S/4HANA MM & become a job-ready consultant — No
            coding required, only real-time skills that get you hired faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-7">
            <button
              type="button"
              onClick={handleEnquiry}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
            >
              Book Free Demo
            </button>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-lg border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition"
            >
              Explore Courses
            </button>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full max-w-md mx-auto md:ml-auto">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">

            <div className="p-6">

              <h3 className="text-lg font-bold mb-2">
                Book Your Free Demo
              </h3>

              <p className="text-xs text-gray-400 mb-4">
                We’ll contact you within 24 hrs.
              </p>

              {success ? (
                <div className="text-center py-6 px-4">
                  <h3 className="text-lg font-bold text-green-600 mb-2">
                    🚀 Your first milestone is unlocked!
                  </h3>

                  <p className="text-sm text-gray-600">
                    You’re already halfway to becoming a SAP professional.
                    Our team will guide you through the next steps.
                  </p>

                  <p className="text-xs text-gray-400 mt-3">
                    ⏳ Expect a call within 24 hours
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">

                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                  />

                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                  />

                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                  />

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Reserve My Seat →
                  </button>

                </form>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;