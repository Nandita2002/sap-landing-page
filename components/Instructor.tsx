"use client";

import React from "react";
import Image from "next/image";

/* 🔥 ENQUIRY TRIGGER */
const handleEnquiry = () => {
  const event = new CustomEvent("openEnquiry");
  window.dispatchEvent(event);
};

/* 🔥 SCROLL FUNCTION */
const scrollToCurriculum = () => {
  const el = document.getElementById("curriculum");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Instructor = () => {
  return (
    <section
      id="instructor"
      aria-labelledby="instructor-heading"
      className="relative py-24 px-4 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1 mb-4 text-xs font-semibold text-blue-700 uppercase tracking-wide">
            ● Meet Your Instructor
          </div>

          <h2
            id="instructor-heading"
            className="text-3xl md:text-4xl font-extrabold text-[#0a1628]"
          >
            Learn from{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              Industry Experts
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-md mx-auto">
            Get mentored by a certified SAP S/4HANA MM expert with real-world enterprise experience.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">

              <div className="absolute top-5 left-5 right-[-12px] bottom-[-12px] sm:right-[-20px] sm:bottom-[-20px] bg-blue-50 border border-blue-200 rounded-2xl" />

              <div className="relative rounded-2xl overflow-hidden border border-blue-100 shadow-xl">
                <div className="relative w-full aspect-[4/5] bg-blue-50">
                  <Image
                    src="/instructor.png"
                    alt="Kumaresh Bidari - SAP Instructor"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white border border-blue-200 rounded-lg px-4 py-2 text-xs shadow-md">
                  SAP S/4HANA MM Specialist
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">

            <div>
              <h3 className="text-2xl font-bold text-[#0a1628]">
                Kumaresh Bidari
              </h3>
              <p className="text-blue-600 font-medium text-sm">
                Founder & CEO, Rise Infotech · SAP S/4HANA MM Consultant
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">
              Learn directly from a seasoned SAP consultant with 10+ years of experience,
              having worked with TCS, IBM, and NTT Data on real-time S/4HANA projects.
              Gain practical knowledge, project exposure, and career guidance to confidently step into SAP roles.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "1000+", label: "Students Trained" },
                { val: "10+", label: "Years Experience" },
                { val: "4+", label: "Training Experience" },
                { val: "Top MNCs", label: "Placements" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm"
                >
                  <div className="text-lg font-bold text-blue-600">{s.val}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Differentiator */}
            <div className="text-sm text-gray-600 space-y-2">
              <p className="font-semibold text-gray-800">
                Complete Career Transformation Program:
              </p>
              <ul className="space-y-1">
                <li>✔ Real-time project exposure</li>
                <li>✔ Resume & Naukri profile optimization</li>
                <li>✔ Daily mock interviews</li>
                <li>✔ Placement-focused training</li>
              </ul>
            </div>

            {/* CTA */}
<div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

  {/* Primary CTA */}
  <button
    onClick={handleEnquiry}
    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md hover:bg-blue-700 transition text-center"
  >
    Get Free Career Consultation
  </button>

  {/* Secondary CTA */}
  <button
    onClick={scrollToCurriculum}
    className="w-full sm:w-auto px-6 py-3 rounded-xl border border-blue-200 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition text-center"
  >
    View Curriculum
  </button>

</div>

            {/* Closing Line */}
            <p className="text-sm font-semibold text-blue-600">
              This is not just training — it’s a complete career transformation.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;