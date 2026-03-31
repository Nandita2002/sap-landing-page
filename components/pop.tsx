"use client";

import React, { useEffect, useState } from "react";

const Popup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("popupShown");

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShow(true);
        sessionStorage.setItem("popupShown", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-md relative">
        
        {/* Close */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-500"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-2">
          Join Our Upcoming SAP Masterclass
        </h2>

        <p className="text-gray-600 mb-4">
          Free live session on SAP MM, FICO & ABAP.
        </p>

        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-2 rounded"
          />

          <button className="bg-orange-500 text-white py-2 rounded font-semibold">
            Reserve My Spot
          </button>
        </form>

        <button
          onClick={() => setShow(false)}
          className="mt-3 text-sm text-gray-500 underline"
        >
          Maybe Later
        </button>
      </div>
    </div>
  );
};

export default Popup;