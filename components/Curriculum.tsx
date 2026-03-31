"use client";

import React from "react";
import { Check } from "lucide-react";

const data = [
  {
    title: "SAP MM",
    points: [
      "Procurement lifecycle",
      "Inventory management",
      "Vendor management",
      "Purchase order process",
    ],
  },
  {
    title: "SAP FICO",
    points: [
      "Financial accounting basics",
      "Cost controlling",
      "General ledger & reporting",
      "Real-time financial tracking",
    ],
  },
  {
    title: "SAP ABAP",
    points: [
      "SAP programming basics",
      "Reports & forms",
      "Data dictionary",
      "Custom development",
    ],
  },
];

const Curriculum = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          What You’ll Learn
        </h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Gain practical knowledge and hands-on experience across key SAP modules.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-5">
                {item.title}
              </h3>

              <ul className="space-y-3 text-left">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <Check size={18} className="text-green-500 mt-1" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Curriculum;