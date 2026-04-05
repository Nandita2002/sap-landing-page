"use client";

import React from "react";

/* 🔥 ENQUIRY TRIGGER */
const handleEnquiry = () => {
  const event = new CustomEvent("openEnquiry");
  window.dispatchEvent(event);
};

/* 🔥 SCROLL FUNCTION */
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  return (
    <header className=" left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="text-lg font-bold text-[#0a1628]">
          Rise Infotech
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <button onClick={() => scrollToSection("home")} className="hover:text-blue-600 transition">
            Home
          </button>
          <button onClick={() => scrollToSection("curriculum")} className="hover:text-blue-600 transition">
            Curriculum
          </button>
          <button onClick={() => scrollToSection("instructor")} className="hover:text-blue-600 transition">
            Instructor
          </button>
          <button onClick={() => scrollToSection("pricing")} className="hover:text-blue-600 transition">
            Program
          </button>
          <button onClick={() => scrollToSection("faq")} className="hover:text-blue-600 transition">
            FAQ
          </button>
        </nav>

        {/* CTA */}
        <button
          onClick={handleEnquiry}
          className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow hover:scale-105 transition"
        >
          Enquire Now
        </button>

      </div>
    </header>
  );
};

export default Navbar;