"use client";
import React from "react";
import Image from "next/image";

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
            Get mentored by a certified SAP consultant with real-world enterprise experience.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">

              <div className="absolute top-5 left-5 right-[-20px] bottom-[-20px] bg-blue-50 border border-blue-200 rounded-2xl" />

              <div className="relative rounded-2xl overflow-hidden border border-blue-100 shadow-xl">
                <div className="relative w-full aspect-[4/5] bg-blue-50">
                  <Image
                    src="/instructor.png"
                    alt="SAP Instructor"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Badge */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white border border-blue-200 rounded-lg px-4 py-2 text-xs shadow-md">
                  Certified SAP Professional
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">

            <div>
              <h3 className="text-2xl font-bold text-[#0a1628]">
                Rahul Sharma
              </h3>
              <p className="text-blue-600 font-medium text-sm">
                SAP Consultant · 8+ Years Experience
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">
              Certified SAP professional specializing in MM, FICO, and ABAP with real-world project experience and proven placement success.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "500+", label: "Students" },
                { val: "8+", label: "Years Exp" },
                { val: "98%", label: "Placement" },
                { val: "3", label: "Modules" },
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

            {/* CTA */}
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => window.open("https://wa.me/91XXXXXXXXXX")}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Join Free Demo
              </button>

              <button className="border border-blue-200 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                View Curriculum
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;