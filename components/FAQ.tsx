"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this course beginner friendly?",
    answer:
      "Yes, the course is designed for beginners as well as professionals looking to switch careers into SAP.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes, you will receive a certificate upon successful completion of the training program.",
  },
  {
    question: "Are live sessions recorded?",
    answer:
      "Yes, recordings will be provided so you can revisit sessions anytime.",
  },
  {
    question: "What is the duration of the course?",
    answer:
      "The training program typically runs for 45 days with structured live sessions.",
  },
  {
    question: "Will I get placement support?",
    answer:
      "Yes, we provide career guidance, resume support, and interview preparation.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section  id="faq" className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-gray-600">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-10 space-y-4">
          
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition"
              >
                
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold"
                >
                  {faq.question}

                  <ChevronDown
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-5 transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-40 pb-5 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default FAQ;