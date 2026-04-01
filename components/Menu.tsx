"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
          <Image
            src="/logor.jpeg"
            alt="Rise Infotech Logo"
            width={180}
            height={80}
            className="object-contain"
            priority
            
          /> </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#modules" className="hover:text-blue-600 transition">
            Modules
          </a>
          <a href="#demo" className="hover:text-blue-600 transition">
            Demo
          </a>
          <a href="#faq" className="hover:text-blue-600 transition">
            FAQ
          </a>
        </nav>

        {/* Desktop CTA */}
        <button
          type="button"
          onClick={() =>
            window.open("https://wa.me/91XXXXXXXXXX", "_blank")
          }
          className="hidden md:block bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition duration-300"
        >
          Join Demo
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        {/* Menu Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-lg">Menu</h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col p-6 gap-6 text-lg font-medium">
          
          <a href="#modules" onClick={() => setOpen(false)}>
            Modules
          </a>

          <a href="#demo" onClick={() => setOpen(false)}>
            Demo
          </a>

          <a href="#faq" onClick={() => setOpen(false)}>
            FAQ
          </a>

          {/* CTA Button */}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              window.open("https://wa.me/91XXXXXXXXXX", "_blank");
            }}
            className="mt-4 bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] text-white py-3 rounded-full font-semibold shadow-md hover:opacity-90 hover:scale-105 transition duration-300"
          >
            Join Demo
          </button>

        </nav>
      </div>

    </header>
  );
};

export default Header;