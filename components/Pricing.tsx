"use client";

import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Your SAP Journey Today
        </h2>

        <p className="mt-3 text-blue-100">
          Limited seats available for upcoming batches. Grab your spot now.
        </p>

        {/* Offer Card */}
        <div className="mt-10 bg-white text-black rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          
          {/* Discount Badge */}
          <div className="absolute top-4 right-4 bg-orange-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
            30% OFF
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold">
            SAP Training Program
          </h3>

          {/* Fake struck price for psychology */}
          <p className="mt-2 text-gray-400 ">
            Offer on Regular Price Valid till month end.
          </p>

          <p className="text-lg font-semibold text-green-600">
            Special Offer Available
          </p>

          {/* Features */}
          <div className="mt-6 space-y-2 text-gray-700 text-left max-w-sm mx-auto">
            <p>✔ Live Interactive Sessions</p>
            <p>✔ Real-Time Projects</p>
            <p>✔ Certification Support</p>
            <p>✔ Career Guidance</p>
          </div>

          {/* CTA */}
          <button
            onClick={() =>
              window.open("https://wa.me/91XXXXXXXXXX", "_blank")
            }
            className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition shadow-lg"
          >
            Claim Offer Now
          </button>

          {/* Urgency */}
          <p className="mt-3 text-sm text-red-500">
            Limited seats available for this batch
          </p>

        </div>

      </div>
    </section>
  );
};

export default Pricing;