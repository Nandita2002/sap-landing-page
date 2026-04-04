"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Basayya Ningolli",
    role: "Google Review",
    review:
      "Rise Infotech is one of the best SAP training institutes in Bangalore. The trainers focus on concept clarity and provide high-quality study materials. The project classes are excellent and very practical.",
  },
  {
    name: "Vadiraj Kulkarni",
    role: "Google Review",
    review:
      "My experience has been extremely positive. The trainers explain concepts with real-time industry examples, making it easy even for beginners.",
  },
  {
    name: "Darshan Garjur",
    role: "Google Review",
    review:
      "Great learning experience. The trainers are knowledgeable and focus on practical examples, not just theory.",
  },
  {
    name: "Rahul Patil",
    role: "Google Review",
    review:
      "SAP MM training was excellent. Concepts were covered from basic to advanced with real-time scenarios.",
  },
  {
    name: "Teja Dommaraju",
    role: "Google Review",
    review:
      "Very practical and industry-oriented training. Real-time examples and hands-on sessions helped a lot.",
  },
];

const Testimonials = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative py-24 px-4 bg-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto text-center">

        {/* Heading */}
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full mb-4">
          Student Reviews
        </span>

        <h2
          id="testimonials-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628]"
        >
          What Our{" "}
          <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
            Students Say
          </span>
        </h2>

        {/* Rating */}
        <div className="mt-4 flex justify-center items-center gap-2 text-sm text-gray-600">
          <span className="text-yellow-500">★★★★★</span>
          <span>4.8 rating from Google Reviews</span>
        </div>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Hear from learners who transformed their careers with our SAP training.
        </p>

        {/* Slider */}
        <div className="mt-14 overflow-hidden">
          <div className="flex gap-6 animate-scroll">

            {[...testimonials, ...testimonials].map((item, index) => (
              <article
                key={index}
                className="min-w-[300px] md:min-w-[350px] bg-white border border-gray-100 rounded-2xl p-6 text-left shadow-sm hover:shadow-xl transition"
              >
                {/* Quote */}
                <div className="absolute top-5 right-5 opacity-10">
                  <Quote className="w-10 h-10 text-blue-400" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  “{item.review}”
                </p>

                <div className="my-5 border-t border-gray-100" />

                {/* User */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-sm">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#0a1628]">{item.name}</p>
                    <p className="text-xs text-blue-600">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 inline-flex items-center gap-3 bg-white border border-gray-100 rounded-full px-6 py-3 shadow-sm">
          <p className="text-gray-600 text-sm">
            Trusted by <span className="font-semibold text-[#0a1628]">500+ students</span>
          </p>
        </div>

      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 5s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;