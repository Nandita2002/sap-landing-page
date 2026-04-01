"use client";
import React from "react";
import Image from "next/image";

const Instructor = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Learn from Industry Experts
          </h2>
        </div>

        {/* Content */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
          
          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-[350px] h-[350px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/instructor.png" // add your image
                alt="Instructor"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-2xl font-semibold">
              Rahul Sharma
            </h3>

            <p className="text-gray-500 mt-1">
              SAP Consultant • 8+ Years Experience
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Experienced SAP professional specializing in MM, FICO, and ABAP with real-world project exposure. 
              Trained 100+ students and helped them build successful careers in SAP.
            </p>

            {/* Highlights */}
            <div className="mt-6 space-y-2 text-gray-700">
              <p>✔ Worked with enterprise-level SAP systems</p>
              <p>✔ Real-time project-based teaching</p>
              <p>✔ Career guidance & mentorship</p>
            </div>

            {/* CTA */}
            <button className="mt-4  bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 hover:scale-105 transition duration-300">
              Join Free Demo
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Instructor;