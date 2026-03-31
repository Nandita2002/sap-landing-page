"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
      <div className="flex items-center gap-2">
  <Image
    src="/logo.jpeg"
    alt="Rise Infotech Logo"
    width={60}
    height={20}
    className="object-contain"
  />
  <h1 className="font-bold text-lg">Rise Infotech</h1>
</div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#modules" className="hover:text-orange-500">Modules</a>
          <a href="#demo" className="hover:text-orange-500">Demo</a>
          <a href="#faq" className="hover:text-orange-500">FAQ</a>
        </nav>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded">
          Join Demo
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 ${
          open ? "max-h-60 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 text-sm">
          
          <a href="#modules" onClick={() => setOpen(false)}>
            Modules
          </a>

          <a href="#demo" onClick={() => setOpen(false)}>
            Demo
          </a>

          <a href="#faq" onClick={() => setOpen(false)}>
            FAQ
          </a>

          <button
            onClick={() => {
              setOpen(false);
              window.open("https://wa.me/91XXXXXXXXXX", "_blank");
            }}
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            Join Demo
          </button>

        </nav>
      </div>
    </header>
  );
};

export default Header;