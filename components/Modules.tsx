"use client";

import React from "react";

const modules = [
  {
    name: "SAP MM",
    description: "Learn procurement, inventory management & real-time operations.",
    duration: "45 Days",
    status: "active",
  },
  {
    name: "SAP FICO",
    description: "Master financial accounting and cost controlling systems.",
    duration: "45 Days",
    status: "active",
  },
  {
    name: "SAP ABAP",
    description: "Develop SAP applications, reports & custom programs.",
    duration: "45 Days",
    status: "active",
  },
  {
    name: "SAP SD",
    description: "Sales and distribution processes in SAP.",
    duration: "",
    status: "coming",
  },
  {
    name: "SAP EWM",
    description: "Warehouse management and logistics handling.",
    duration: "",
    status: "coming",
  },
];

const Modules = () => {
  return (
    <section id="modules" className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          SAP Training Modules
        </h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Choose your specialization and start your SAP journey with industry-focused training.
        </p>

        {/* AVAILABLE */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-green-600 mb-4">
            Available Modules
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules
              .filter((m) => m.status === "active")
              .map((module, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition"
                >
                  <h4 className="text-xl font-semibold">{module.name}</h4>

                  <p className="mt-2 text-gray-600 text-sm">
                    {module.description}
                  </p>

                  <p className="mt-3 text-sm text-gray-500">
                    ⏱ Duration: {module.duration}
                  </p>

                  <button onClick={() => window.open("https://wa.me/91XXXXXXXXXX", "_blank")} className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold">
                    Enroll Now
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* COMING SOON */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">
            Coming Soon
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {modules
              .filter((m) => m.status === "coming")
              .map((module, index) => (
                <div
                  key={index}
                  className="bg-gray-100 border rounded-xl p-6 opacity-80"
                >
                  <h4 className="text-xl font-semibold">{module.name}</h4>

                  <p className="mt-2 text-gray-600 text-sm">
                    {module.description}
                  </p>

                  <span className="inline-block mt-4 text-sm bg-yellow-200 text-yellow-700 px-3 py-1 rounded">
                    Launching Soon
                  </span>
                </div>
              ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Modules;