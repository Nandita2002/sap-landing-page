"use client";

import React from "react";
import { Star } from "lucide-react";

/* 🔥 CTA */
const handleEnquiry = () => {
  const event = new CustomEvent("openEnquiry");
  window.dispatchEvent(event);
};

/* ✅ TYPE */
type Testimonial = {
  name: string;
  role: string;
  review: string;
};

/* ✅ DATA (FULL + CLEAN) */
const testimonials: Testimonial[] = [
  {
    name: "Basayya Ningolli",
    role: "Google Review",
    review:
      "Rise Infotech is the best SAP training institute in Bangalore. Trainers focus on concept clarity and provide high-quality study materials.",
  },
  {
    name: "Vadiraj Kulkarni",
    role: "Google Review",
    review:
      "Highly experienced trainers with real-time industry examples. Concepts are explained very clearly.",
  },
  {
    name: "Darshan Garjur",
    role: "Google Review",
    review:
      "Great learning experience. Strong focus on practical skills along with theory.",
  },
  {
    name: "Rahul Patil",
    role: "Google Review",
    review:
      "Trainer explained all SAP MM concepts clearly from basic to advanced.",
  },
  {
    name: "Soumya K",
    role: "Google Review",
    review:
      "They don't just teach SAP, they teach you how to think like a consultant.",
  },
  {
    name: "Teja Dommaraju",
    role: "Google Review",
    review:
      "Training is practical and industry-oriented with real-time examples.",
  },
];

/* ✅ CARD */
const Card = ({ item }: { item: Testimonial }) => (
  <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
    {/* Stars */}
    <div className="flex mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className="text-yellow-400"
          fill="currentColor"
        />
      ))}
    </div>

    {/* Review */}
    <p className="text-sm text-gray-600 leading-relaxed">
      &quot;{item.review}&quot;
    </p>

    {/* User */}
    <div className="mt-4 flex items-center gap-2">
      <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
        {item.name
          .split(" ")
          .map((n) => n[0])
          .slice(0, 2)
          .join("")
          .toUpperCase()}
      </div>
      <div>
        <p className="text-sm font-semibold text-[#0a1628]">
          {item.name}
        </p>
        <p className="text-xs text-blue-500">{item.role}</p>
      </div>
    </div>
  </div>
);

/* ✅ MAIN COMPONENT */
export default function Testimonials() {
  return (
    <section className="py-16 bg-[#f8faff]">
      
      {/* 🔥 HEADER */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#0a1628]">
          Trusted by <span className="text-blue-600">500+ Students</span>
        </h2>

        <div className="mt-3 flex justify-center items-center gap-2 text-gray-600">
          <span className="text-yellow-400 text-lg">★★★★★</span>
          <span className="font-semibold">4.8/5 Google Rating</span>
        </div>

        <p className="mt-3 text-gray-500 text-sm">
          Real reviews from students who successfully transitioned into SAP careers.
        </p>
      </div>

      {/* 🔥 LOGOS / SOCIAL PROOF */}
      <div className="mt-10 flex justify-center flex-wrap gap-6 opacity-70 px-4">
        <span className="text-sm font-semibold text-gray-500">Google</span>
        <span className="text-sm font-semibold text-gray-500">LinkedIn</span>
        <span className="text-sm font-semibold text-gray-500">Indeed</span>
        <span className="text-sm font-semibold text-gray-500">Glassdoor</span>
      </div>

      {/* 🔥 TESTIMONIAL GRID */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {testimonials.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>

      {/* 🔥 TRUST BADGES */}
      <div className="mt-12 flex justify-center flex-wrap gap-4 px-4">
        <div className="bg-white border px-4 py-2 rounded-full text-sm shadow-sm">
          ✔ 100% Practical Training
        </div>
        <div className="bg-white border px-4 py-2 rounded-full text-sm shadow-sm">
          ✔ Real-time Projects
        </div>
        <div className="bg-white border px-4 py-2 rounded-full text-sm shadow-sm">
          ✔ Placement Assistance
        </div>
      </div>

      {/* 🔥 CTA */}
      <div className="mt-12 text-center px-4">
        <button
          onClick={handleEnquiry}
          className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl transition hover:-translate-y-1"
        >
          Book Free Demo Class →
        </button>

        <p className="text-xs text-gray-500 mt-2">
          Limited slots available this week
        </p>
      </div>
    </section>
  );
}