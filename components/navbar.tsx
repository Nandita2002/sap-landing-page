"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
  { label: "Curriculum", id: "curriculum" },
  { label: "Instructor", id: "instructor" },
  { label: "Program", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  /* 🔥 Scroll detection */
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

  /* 🔥 Lock scroll */
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
        <Link href="#home" className="flex items-center">
          <Image
            src="/logor.jpeg"
            alt="logo"
            width={110}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`relative text-sm font-medium transition ${
                active === link.id
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {link.label}

              {/* ACTIVE UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
                  active === link.id ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-2">

          {/* CTA
          <button
            onClick={handleEnquiry}
            className="hidden sm:block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-sm hover:bg-blue-700 hover:scale-105 transition-all duration-200"
          >
            Enquire
          </button> */}

          {/* MENU BUTTON */}
        <button
  type="button"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
>
  <div className="space-y-1.5">
    <span className={`block w-6 h-0.5 bg-black transition ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
    <span className={`block w-6 h-0.5 bg-black transition ${menuOpen ? "opacity-0" : ""}`} />
    <span className={`block w-6 h-0.5 bg-black transition ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
  </div>
</button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* PANEL */}
        <div
          className={`absolute top-16 left-0 right-0 bg-white rounded-b-3xl p-6 shadow-xl transition-all duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-6"
          }`}
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-left text-lg font-medium transition ${
                  active === link.id
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* CTA */}
            <button
              onClick={() => {
                handleEnquiry();
                setMenuOpen(false);
              }}
              className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl text-base font-semibold shadow hover:bg-blue-700 transition"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}