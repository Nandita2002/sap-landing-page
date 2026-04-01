"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const LeadPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("popupShown");

    if (!shown) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("popupShown", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      
      {/* Popup Box */}
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-xl">

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close popup"
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-blue-600">
          Admissions Open for April-26 Batch!
        </h2>

        <p className="text-sm text-blue-500 mt-1">
          Get 25% Off on All SAP Courses - Enroll Now!
        </p>

        {/* Form */}
        <form className="mt-5 space-y-4">

          {/* Name */}
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email ID
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="text-sm font-medium">
              Phone No
            </label>
            <div className="flex mt-1">
              <div className="px-3 py-2 border rounded-l-lg bg-gray-100 text-sm">
                🇮🇳 +91
              </div>
              <input
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                className="w-full border rounded-r-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="text-sm font-medium">
              How we can help?
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder="Type your message"
              className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="button"
            onClick={() => {
              window.open("https://wa.me/91XXXXXXXXXX", "_blank");
            }}
            className="w-full mt-4 bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] text-white py-3 rounded-lg font-semibold shadow-md hover:opacity-90 hover:scale-105 transition duration-300"
          >
            Submit
          </button>

        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-6 text-xl">
          
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 hover:scale-110 transition" />
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-blue-600 hover:scale-110 transition" />
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-black hover:scale-110 transition" />
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-blue-700 hover:scale-110 transition" />
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-red-600 hover:scale-110 transition" />
          </a>

        </div>

      </div>
    </div>
  );
};

export default LeadPopup;