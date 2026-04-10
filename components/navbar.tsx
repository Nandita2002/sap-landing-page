"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, BookOpen, User, Layers, HelpCircle } from "lucide-react";

/* 🔥 ENQUIRY TRIGGER */
const handleEnquiry = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("openEnquiry"));
  }
};

/* 🔥 SCROLL FUNCTION */
const scrollToSection = (id: string) => {
  if (typeof document !== "undefined") {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
};

const navLinks = [
  { label: "Curriculum", id: "curriculum", icon: BookOpen },
  { label: "Instructor", id: "instructor", icon: User },
  { label: "Program", id: "pricing", icon: Layers },
  { label: "FAQ", id: "faq", icon: HelpCircle },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  /* Scroll detection */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 120;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock scroll */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="#home" aria-label="Go to homepage">
          <Image
            src="/logor.png"
            alt="Company Logo"
            width={110}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              aria-label={`Go to ${link.label}`}
              title={link.label}
              className={`relative text-sm font-medium transition ${
                active === link.id
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
                  active === link.id ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          title={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
                menuOpen ? "rotate-45 top-2" : "top-0"
              }`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
                menuOpen ? "opacity-0" : "top-2"
              }`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
                menuOpen ? "-rotate-45 top-2" : "top-4"
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* RIGHT DRAWER */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transform transition-all duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
            <span className="text-lg font-semibold text-gray-800">
              Menu
            </span>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              title="Close menu"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* CONTENT */}
          <div className="p-5 flex flex-col gap-6">

            {/* NAVIGATION */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase mb-3">
                Navigation
              </p>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNav(link.id)}
                      aria-label={`Go to ${link.label}`}
                      title={link.label}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition ${
                        active === link.id
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      }`}
                    >
                      <Icon size={18} className="text-gray-500" />
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ACTION */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase mb-3">
                Get Started
              </p>

              <button
                onClick={() => {
                  handleEnquiry();
                  setMenuOpen(false);
                }}
                aria-label="Open enquiry form"
                title="Enquire Now"
                className="w-full bg-blue-600 text-white py-3 rounded-xl text-base font-semibold shadow-md hover:bg-blue-700 transition-all duration-200"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}