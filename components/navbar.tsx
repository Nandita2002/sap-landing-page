"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X, BookOpen, User, HelpCircle, Sparkles } from "lucide-react";

/* 🔥 SCROLL FUNCTION */
const scrollToSection = (id: string) => {
  if (typeof document !== "undefined") {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
};

const navLinks = [
  { label: "Courses", id: "courses", icon: BookOpen },
  { label: "Instructor", id: "instructor", icon: User },
  { label: "FAQ", id: "faq", icon: HelpCircle },
];

export default function Navbar() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const handleEnquiry = () => {
    router.push("/#consultation");
    setMenuOpen(false);
  };

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

  /* NAVIGATION */
  const handleNav = (id: string) => {
    if (window.location.pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      scrollToSection(id);
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-[0_10px_32px_rgba(15,23,42,0.08)] border-b border-white/70"
          : "bg-white/35 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-6">
        <Link href="/" aria-label="Go to homepage">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.svg"
              alt="Rise Infotech Logo"
              width={36}
              height={36}
              className="h-9 w-9"
              priority
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-slate-900">Rise Infotech</p>
              <p className="text-[11px] text-slate-500">SAP Career Academy</p>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center justify-center flex-1 gap-7">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              aria-label={`Go to ${link.label}`}
              title={`Go to ${link.label}`}
              className={`relative text-[15px] font-semibold transition ${
                active === link.id
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
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

        <div className="hidden md:block">
          <button
            onClick={handleEnquiry}
            aria-label="Book free consultation"
            title="Book free consultation"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-[0_12px_24px_rgba(37,99,235,0.25)] hover:shadow-[0_16px_30px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5"
          >
            <Sparkles size={14} />
            Free Consultation
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          title="Toggle menu"
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 hover:bg-white transition"
        >
          <div className="relative w-6 h-5">
            <span className={`absolute w-6 h-0.5 bg-black ${menuOpen ? "rotate-45 top-2" : "top-0"}`} />
            <span className={`absolute w-6 h-0.5 bg-black ${menuOpen ? "opacity-0" : "top-2"}`} />
            <span className={`absolute w-6 h-0.5 bg-black ${menuOpen ? "-rotate-45 top-2" : "top-4"}`} />
          </div>
        </button>
      </div>

      <div className={`fixed inset-0 z-40 md:hidden ${menuOpen ? "visible" : "invisible"}`}>
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition`}
        >
          <div className="flex justify-between p-5 border-b bg-slate-50">
            <span className="font-semibold text-slate-800">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              title="Close menu"
            >
              <X />
            </button>
          </div>

          <div className="p-6 space-y-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  aria-label={`Go to ${link.label}`}
                  title={`Go to ${link.label}`}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50"
                >
                  <Icon size={18} />
                  {link.label}
                </button>
              );
            })}

            <button
              onClick={handleEnquiry}
              aria-label="Book free consultation"
              title="Book free consultation"
              className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-blue-800 hover:to-blue-600 transition"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}