"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ankit Verma",
    role: "SAP MM Student",
    image: "/user1.jpg",
    review:
      "The training was very practical and easy to understand. I gained real confidence in SAP MM within weeks.",
  },
  {
    name: "Priya Sharma",
    role: "SAP FICO Student",
    image: "/user2.jpg",
    review:
      "Best decision to join this program. The live demos and mentorship really helped me understand real-world scenarios.",
  },
  {
    name: "Rohit Kumar",
    role: "SAP ABAP Student",
    image: "/user3.jpg",
    review:
      "The instructor explains concepts clearly and focuses on real-time projects. Highly recommended for beginners.",
  },
];

const Testimonials = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative py-24 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto text-center">

        {/* Section Label + Heading */}
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-sky-400 bg-sky-400/10 border border-sky-400/20 px-4 py-1.5 rounded-full mb-4">
          Student Reviews
        </span>

        <h2
          id="testimonials-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
        >
          What Our{" "}
          <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
            Students Say
          </span>
        </h2>

        <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
          Hear from learners who transformed their careers with our SAP training.
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <article
              key={index}
              aria-label={`Testimonial from ${item.name}`}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:border-sky-400/30 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 opacity-10 group-hover:opacity-20 transition">
                <Quote className="w-10 h-10 text-sky-400" />
              </div>

              {/* Stars */}
              <div
                className="flex gap-1 mb-4"
                aria-label="5 out of 5 stars"
                role="img"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className="text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-slate-300 text-sm leading-relaxed">
                &ldquo;{item.review}&rdquo;
              </p>

              {/* Divider */}
              <div className="my-5 border-t border-white/10" />

              {/* User */}
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 shrink-0 rounded-full ring-2 ring-sky-400/30 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.name} – ${item.role}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-sky-400 mt-0.5">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-14 inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
          <div className="flex -space-x-2">
            {["/user1.jpg", "/user2.jpg", "/user3.jpg"].map((src, i) => (
              <div
                key={i}
                className="relative w-7 h-7 rounded-full ring-2 ring-slate-900 overflow-hidden"
              >
                <Image src={src} alt={`Student ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
          <p className="text-slate-300 text-sm">
            Joined by{" "}
            <span className="text-white font-semibold">100+ students</span>{" "}
            across India
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;