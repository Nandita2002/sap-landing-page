"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#modules", label: "Modules" },
    { href: "#demo", label: "Demo" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .header-root {
          font-family: 'DM Sans', sans-serif;
        }
        .nav-link {
          position: relative;
          color: rgba(148, 163, 184, 0.85);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.25s ease;
          padding-bottom: 4px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #38bdf8, #818cf8);
          transition: width 0.3s ease;
        }
        .nav-link:hover {
          color: #e2e8f0;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .cta-btn {
          font-family: 'Syne', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: white;
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          border: none;
          padding: 10px 24px;
          border-radius: 3px;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 3px;
          background: linear-gradient(135deg, #38bdf8, #818cf8);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .cta-btn:hover::before { opacity: 1; }
        .cta-btn:hover { box-shadow: 0 0 24px rgba(14, 165, 233, 0.45); transform: translateY(-1px); }
        .cta-btn span { position: relative; z-index: 1; }

        .mobile-link {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(148, 163, 184, 0.9);
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: color 0.2s ease;
        }
        .mobile-link:hover { color: #38bdf8; }
        .mobile-link-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #38bdf8;
          opacity: 0;
          transition: opacity 0.2s ease;
          flex-shrink: 0;
        }
        .mobile-link:hover .mobile-link-dot { opacity: 1; }

        .drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(4px);
          z-index: 48;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        .drawer {
          position: fixed;
          top: 0;
          right: 0;
          height: 100%;
          width: min(340px, 85vw);
          background: #080d1a;
          border-left: 1px solid rgba(14, 165, 233, 0.15);
          z-index: 50;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
        }
        .drawer.open { transform: translateX(0); }
        .logo-bracket {
          font-family: 'Syne', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(56, 189, 248, 0.5);
        }
      `}</style>

      <header
        className="header-root fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(8, 13, 26, 0.92)"
            : "rgba(8, 13, 26, 0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(14, 165, 233, 0.15)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between gap-8">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 flex-shrink-0">
            <div style={{ position: "relative" }}>
              <Image
                src="/logor.jpeg"
                alt="Rise Infotech Logo"
                width={90}
                height={54}
                className="object-contain"
                priority
                style={{ filter: "brightness(1.05) contrast(1.05)" }}
              />
            </div>
            <div className="hidden sm:flex flex-col justify-center leading-none">
              <span className="logo-bracket">[ SAP Training ]</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="cta-btn hidden md:block"
              onClick={() => window.open("https://wa.me/91XXXXXXXXXX", "_blank")}
            >
              <span>Join Demo</span>
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded"
              style={{
                background: "rgba(14,165,233,0.08)",
                border: "1px solid rgba(14,165,233,0.2)",
                color: "#7dd3fc",
              }}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(14,165,233,0.5), rgba(99,102,241,0.5), transparent)",
            opacity: scrolled ? 1 : 0.4,
            transition: "opacity 0.3s ease",
          }}
        />
      </header>

      {/* Backdrop */}
      <div
        className="drawer-backdrop"
        style={{ opacity: open ? 1 : 0, visibility: open ? "visible" : "hidden" }}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`drawer ${open ? "open" : ""}`}>

        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: "1px solid rgba(14,165,233,0.12)" }}
        >
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#38bdf8",
            }}
          >
            Navigation
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{
              color: "#64748b",
              transition: "color 0.2s",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e2e8f0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6 pt-4 flex-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mobile-link"
              onClick={() => setOpen(false)}
            >
              <span className="mobile-link-dot" />
              {l.label}
            </a>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className="px-6 pb-10 pt-4">
          <button
            type="button"
            className="cta-btn w-full"
            style={{ borderRadius: "4px" }}
            onClick={() => {
              setOpen(false);
              window.open("https://wa.me/91XXXXXXXXXX", "_blank");
            }}
          >
            <span>Join Demo on WhatsApp</span>
          </button>

          <p
            style={{
              marginTop: 16,
              fontSize: "0.7rem",
              color: "rgba(100,116,139,0.7)",
              textAlign: "center",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Weekday & Weekend sessions
          </p>
        </div>

        {/* Bottom corner accent */}
        <svg
          style={{ position: "absolute", bottom: 0, left: 0, opacity: 0.3 }}
          width="80" height="80" viewBox="0 0 80 80" fill="none"
        >
          <path d="M0 50 L0 80 L30 80" stroke="#38bdf8" strokeWidth="1"/>
        </svg>
      </div>
    </>
  );
};

export default Header;