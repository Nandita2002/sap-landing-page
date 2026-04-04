"use client";

import React from "react";
import { useRouter } from "next/navigation";

const tracks = [
  {
    title: "Functional Modules",
    desc: "Business-focused SAP training covering finance, procurement, sales, production, and HR.",
    courses: [
      { name: "SAP MM", slug: "sap-mm" },
      { name: "SAP SD", slug: "sap-sd" },
      { name: "SAP FICO", slug: "sap-fico" },
      { name: "SAP PP", slug: "sap-pp" },
      { name: "SAP HCM", slug: "sap-hcm" },
      { name: "SAP SRM", slug: "sap-srm" },
    ],
  },
  {
    title: "Technical Modules",
    desc: "Technical SAP training covering programming, system admin, analytics, and cloud.",
    courses: [
      { name: "SAP ABAP", slug: "sap-abap" },
      { name: "SAP BASIS", slug: "sap-basis" },
      { name: "SAP BI/BW", slug: "sap-bi-bw" },
      { name: "SAP BTP", slug: "sap-btp" },
      { name: "SAP EWM", slug: "sap-ewm" },
      { name: "SAP CPI", slug: "sap-cpi" },
    ],
  },
];

const Curriculum = () => {
  const router = useRouter();

  return (
    <section className="py-24 px-6 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">
            SAP Course Curriculum
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Choose from functional and technical SAP modules designed with real-time projects and placement support.
          </p>
        </div>

        {/* Tracks */}
        <div className="grid md:grid-cols-2 gap-10">

          {tracks.map((track, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {track.title}
              </h3>

              <p className="text-gray-600 text-sm mb-6">
                {track.desc}
              </p>

              {/* Course list */}
              <div className="grid grid-cols-2 gap-3">
                {track.courses.map((course, i) => (
                  <button
                    key={i}
                    onClick={() => router.push(`/courses/${course.slug}`)}
                    className="text-sm px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 font-medium hover:bg-blue-100 transition"
                  >
                    {course.name}
                  </button>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Curriculum;