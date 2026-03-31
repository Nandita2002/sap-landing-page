"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#1e2a47] text-white py-24 px-4 relative overflow-hidden">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] [background-size:20px_20px]" />

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 text-center md:text-left">
  
  {/* LEFT SIDE */}
  <div>
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Master SAP Skills with Real-Time Training
    </h1>

    <p className="mt-4 text-lg text-gray-300">
      Learn SAP MM, FICO & ABAP through live demos, real projects, and expert guidance.
    </p>

    <div className="mt-6 flex flex-col sm:flex-row md:justify-start justify-center gap-4">
      <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold">
        Join Free Demo
      </button>

      <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black">
        View Modules
      </button>
    </div>

    <p className="mt-4 text-sm text-gray-400">
      Weekday & Weekend Demo Sessions Available
    </p>
  </div>

  {/* RIGHT SIDE */}
  <div className="flex justify-center md:justify-end mt-10 md:mt-0">
    <div className="relative w-[260px] sm:w-[300px] md:w-[340px] rotate-3">
      
      <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
        <div className="bg-white rounded-[2rem] overflow-hidden">
         <Image
          src="/sap-image.png"
          alt="SAP Training"
          width={400}
          height={700}
          className="w-full h-auto object-cover"
          priority
        />
        </div>
      </div>

      <div className="absolute -z-10 inset-0 bg-blue-500 blur-3xl opacity-30"></div>
    </div>
  </div>

</div>
    </section>
  );
};

export default Hero;