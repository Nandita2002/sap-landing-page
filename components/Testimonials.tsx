"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          What Our Students Say
        </h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Hear from learners who transformed their careers with our SAP training.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 text-left"
            >
              
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 text-sm leading-relaxed">
                &quot{item.review}&quot
              </p>

              {/* User */}
              <div className="flex items-center gap-3 mt-5">
                <div className="relative w-10 h-10">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;