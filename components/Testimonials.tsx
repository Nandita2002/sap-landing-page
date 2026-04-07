"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

/* 🔥 ENQUIRY TRIGGER */
const handleEnquiry = () => {
  const event = new CustomEvent("openEnquiry");
  window.dispatchEvent(event);
};

const testimonials = [
  { name: "Basayya Ningolli", role: "Google Review", review: "Rise Infotech is truly the best SAP Training Institute in Bangalore! The trainers focus strongly on concept clarity and provide premium-quality study materials, making learning very effective." },
  { name: "Vadiraj Kulkarni", role: "Google Review", review: "My experience has been extremely positive. The trainers are highly experienced and explain every concept clearly with real-time industry examples, making it easy even for beginners to understand." },
  { name: "Darshan Garjur", role: "Google Review", review: "I am having great learning experience with Rise Infotech. The trainers are highly knowledgeable and explain concepts very clearly with strong practical examples. The training focuses not only on theory but also on practical skills." },
  { name: "Rahul Patil", role: "Google Review", review: "I had a great learning experience with Rise Infotech for SAP MM training. The trainer explained all concepts clearly from basic to advanced level." },
  { name: "Soumya K", role: "Google Review", review: "I was a bit skeptical about where to start my SAP MM journey, but joining Rise Infotech was the best decision. The faculty is very approachable — they don't just teach you the software, they teach you how to think like a consultant." },
  { name: "Teja Dommaraju", role: "Google Review", review: "I had a great learning experience at Rise Infotech. The training is very practical and industry-oriented. Instead of focusing only on theory, the trainers explain concepts with real-time examples." },
  { name: "Purnima", role: "Google Review", review: "I'm currently taking SAP training at Rise Infotech, and overall it was a very good learning experience. The trainers explain SAP concepts in a clear and practical way using real-time scenarios and system demonstrations." },
  { name: "Tejas Kumar", role: "Google Review", review: "I had an excellent learning experience at Rise Infotech. The curriculum is well-structured, covering both fundamental and advanced concepts with clarity. Trainers are highly knowledgeable and always ready to help." },
  { name: "Rachithaa", role: "Google Review", review: "I am doing SAP MM Consultant training at Rise Infotech and have had a great learning experience. The training is well organised and focused on real-time scenarios, which makes concepts easy to understand." },
  { name: "Preethigowda Preethi", role: "Google Review", review: "I had a wonderful learning experience at Rise Infotech. The trainers are very supportive and explain SAP concepts in a simple and practical way. Their guidance from basic concepts to project sessions helped me thoroughly." },
  { name: "Chandrashekar Shivaraj", role: "Google Review", review: "Rise Infotech stands out as one of the most reliable SAP training institutes in Bangalore. Their approach combines industry-relevant curriculum, hands-on practice, and strong placement support." },
  { name: "Zaid Arif", role: "Google Review", review: "I recently pursued my SAP MM training at Rise Infotech and it has been a great learning experience. The institute provides a supportive environment with well-structured sessions and clear explanations." },
  { name: "Shri Potadar", role: "Google Review", review: "Rise Infotech is truly the best SAP Training Institute in Bangalore! The trainers focus strongly on concept clarity and provide study materials, making learning very effective." },
  { name: "Basavaraju Y", role: "Google Review", review: "I recently completed the SAP MM course at Rise Infotech and had a very good learning experience. The trainer explained concepts clearly with real-time examples and practical system demonstrations." },
  { name: "Yogesh Dhavaleshwar", role: "Google Review", review: "I would like to express my sincere gratitude to Rise Infotech for their excellent teaching and continuous support. The faculty members are highly knowledgeable, friendly, and always ready to help with any doubts." },
  { name: "Abhi CK", role: "Google Review", review: "I would like to recommend this institute to all freshers and experienced candidates. SAP MM training here is good, well scheduled, and trainers are experienced — specially covering from basics till advanced level." },
  { name: "Tukarama L", role: "Google Review", review: "I had a great, incredibly positive and motivating experience. Excellent institute with professional staff. Mr. Kumar sir was very knowledgeable and patient, taking time to explain complex topics clearly." },
  { name: "Manjunath Goudar", role: "Google Review", review: "I had an excellent learning experience at Rise Infotech. The mentors demonstrated deep expertise in SAP and guided me patiently — from foundational concepts to practical sessions and project classes." },
  { name: "Yachhrappa Ganiger", role: "Google Review", review: "All teaching staff is supportive. If you want to excel your SAP knowledge then Rise Infotech is the best institute. The training is easily understandable and real-time project exposure is provided." },
  { name: "Nethra Somashekhar", role: "Google Review", review: "I would like to thank the Rise Infotech team for providing such valuable SAP MM training from scratch. A special thanks to Mr. Kumar for his excellent guidance throughout the learning journey." },
  { name: "Pragya Singh", role: "Google Review", review: "I had an excellent experience with Rise Infotech while completing my SAP MM training. The sessions were extremely well-structured, easy to follow, and filled with real-time business examples." },
];

type Testimonial = { name: string; role: string; review: string };

const TestimonialCard = ({ item }: { item: Testimonial }) => (
  <article className="relative w-[280px] sm:w-[300px] flex-shrink-0 bg-white border border-gray-100 rounded-2xl p-5 text-left shadow-sm hover:shadow-lg hover:border-blue-100 transition">
    <div className="absolute top-4 right-4 opacity-10">
      <Quote className="w-8 h-8 text-blue-400" />
    </div>

    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={13} className="text-yellow-400" fill="currentColor" />
      ))}
    </div>

    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-4">
      "{item.review}"
    </p>

    <div className="my-4 border-t border-gray-100" />

    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
        {item.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()}
      </div>
      <div>
        <p className="text-sm font-semibold text-[#0a1628] leading-tight">{item.name}</p>
        <p className="text-xs text-blue-500 mt-0.5">{item.role}</p>
      </div>
    </div>
  </article>
);

const row1 = testimonials.slice(0, 11);
const row2 = testimonials.slice(11);

const Testimonials = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative py-20 bg-[#f8faff] overflow-hidden"
    >
      {/* Header */}
      <div className="relative max-w-7xl mx-auto text-center px-4 mb-12">
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

        <div className="mt-3 flex justify-center items-center gap-2 text-sm text-gray-600 flex-wrap">
          <span className="text-yellow-400 text-base">★★★★★</span>
          <span>4.8 rating · {testimonials.length}+ Google Reviews</span>
        </div>

        <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm">
          Hear from learners who transformed their careers with our SAP training.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="overflow-hidden w-full">
        <div className="flex gap-4 pl-4 animate-scroll-left">
          {[...row1, ...row1].map((item, i) => (
            <TestimonialCard key={`r1-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="overflow-hidden w-full mt-4">
        <div className="flex gap-4 pl-4 animate-scroll-right">
          {[...row2, ...row2].map((item, i) => (
            <TestimonialCard key={`r2-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center px-4">
        <button
          onClick={handleEnquiry}
          className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl transition hover:-translate-y-1 text-sm"
        >
          Start Your SAP Journey →
        </button>

        <div className="mt-5 inline-flex items-center gap-2 bg-white border border-gray-100 rounded-full px-5 py-2.5 shadow-sm">
          <span className="text-yellow-400 text-sm">★★★★★</span>
          <p className="text-gray-600 text-sm">
            Trusted by <span className="font-semibold text-[#0a1628]">500+ students</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll-left {
          display: flex;
          width: max-content;
          animation: scrollLeft 45s linear infinite;
        }
        .animate-scroll-left:hover { animation-play-state: paused; }
        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: scrollRight 45s linear infinite;
        }
        .animate-scroll-right:hover { animation-play-state: paused; }
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
