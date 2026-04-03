"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#080d1a] text-white"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      {/* Import Syne font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }
        .hero-body {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
        }
        .glow-btn-primary {
          position: relative;
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          border: none;
          color: white;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 14px 32px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.875rem;
          text-transform: uppercase;
        }
        .glow-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(14, 165, 233, 0.5);
        }
        .glow-btn-outline {
          position: relative;
          background: transparent;
          border: 1px solid rgba(14, 165, 233, 0.5);
          color: #7dd3fc;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 14px 32px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.875rem;
          text-transform: uppercase;
        }
        .glow-btn-outline:hover {
          border-color: #38bdf8;
          background: rgba(14, 165, 233, 0.08);
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(14, 165, 233, 0.2);
        }
        .phone-glow {
          filter: drop-shadow(0 0 40px rgba(14, 165, 233, 0.35));
          transition: filter 0.4s ease;
        }
        .phone-glow:hover {
          filter: drop-shadow(0 0 60px rgba(14, 165, 233, 0.55));
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(14, 165, 233, 0.1);
          border: 1px solid rgba(14, 165, 233, 0.25);
          border-radius: 2px;
          padding: 6px 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          color: #7dd3fc;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 8px #38bdf8;
          animation: pulse-dot 1.8s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }
        .stat-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 6px;
          padding: 14px 20px;
          backdrop-filter: blur(10px);
          transition: border-color 0.3s ease;
        }
        .stat-card:hover {
          border-color: rgba(14, 165, 233, 0.35);
        }
        .accent-line {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, #0ea5e9, transparent);
          margin-bottom: 28px;
        }
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(14, 165, 233, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .corner-accent {
          position: absolute;
          width: 120px;
          height: 120px;
          pointer-events: none;
        }
        .scan-line {
          position: absolute;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(14,165,233,0.3), transparent);
          animation: scan 6s linear infinite;
          pointer-events: none;
        }
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .fade-up {
          animation: fadeUp 0.8s ease forwards;
          opacity: 0;
        }
        .fade-up-1 { animation-delay: 0.1s; }
        .fade-up-2 { animation-delay: 0.25s; }
        .fade-up-3 { animation-delay: 0.4s; }
        .fade-up-4 { animation-delay: 0.55s; }
        .fade-up-5 { animation-delay: 0.7s; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .phone-float {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: rotate(2deg) translateY(0px); }
          50% { transform: rotate(2deg) translateY(-12px); }
        }
      `}</style>

      {/* Animated particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Grid overlay */}
      <div className="grid-overlay" />

      {/* Scan line */}
      <div className="scan-line" />

      {/* Corner accents */}
      <svg className="corner-accent top-8 left-8" viewBox="0 0 120 120" fill="none">
        <path d="M0 40 L0 0 L40 0" stroke="rgba(14,165,233,0.4)" strokeWidth="1.5"/>
      </svg>
      <svg className="corner-accent top-8 right-8" viewBox="0 0 120 120" fill="none">
        <path d="M120 40 L120 0 L80 0" stroke="rgba(14,165,233,0.4)" strokeWidth="1.5"/>
      </svg>
      <svg className="corner-accent bottom-8 left-8" viewBox="0 0 120 120" fill="none">
        <path d="M0 80 L0 120 L40 120" stroke="rgba(14,165,233,0.4)" strokeWidth="1.5"/>
      </svg>
      <svg className="corner-accent bottom-8 right-8" viewBox="0 0 120 120" fill="none">
        <path d="M120 80 L120 120 L80 120" stroke="rgba(14,165,233,0.4)" strokeWidth="1.5"/>
      </svg>

      {/* Radial glow blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%", left: "-10%", width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0%", right: "-5%", width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-2 items-center gap-16">

        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="badge fade-up fade-up-1">
            <span className="badge-dot" />
            Live Training Available Now
          </div>

          <div className="accent-line fade-up fade-up-1" />

          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white fade-up fade-up-2">
            Master SAP<br />
            <span
              style={{
                background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Skills That Scale
            </span>
          </h1>

          <p className="hero-body mt-6 text-base md:text-lg text-slate-400 max-w-md fade-up fade-up-3" style={{ lineHeight: "1.75" }}>
            Learn SAP MM, FICO & ABAP through live demos, real-world projects,
            and expert mentorship — built for the modern enterprise.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 fade-up fade-up-4">
            <button className="glow-btn-primary">Join Free Demo</button>
            <button className="glow-btn-outline">View Modules</button>
          </div>

          <p className="hero-body mt-5 text-xs text-slate-600 tracking-widest uppercase fade-up fade-up-5">
            — Weekday & Weekend Sessions Available —
          </p>

          {/* Stats row */}
          <div className="mt-10 grid grid-cols-3 gap-3 w-full max-w-sm mx-auto md:mx-0 fade-up fade-up-5">
            {[
              { val: "500+", label: "Students" },
              { val: "3", label: "Modules" },
              { val: "98%", label: "Placement" },
            ].map((s) => (
              <div key={s.label} className="stat-card text-center">
                <div
                  className="text-xl font-bold"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    background: "linear-gradient(135deg, #38bdf8, #818cf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.val}
                </div>
                <div className="text-xs text-slate-500 mt-1 tracking-wide uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Phone mockup */}
        <div className="flex justify-center md:justify-end">
          <div className="relative phone-float phone-glow">
            {/* Decorative ring */}
            <div
              className="absolute -inset-6 rounded-full pointer-events-none"
              style={{
                background: "conic-gradient(from 180deg, rgba(14,165,233,0.15), transparent, rgba(99,102,241,0.15), transparent)",
                borderRadius: "50%",
                animation: "spin 12s linear infinite",
              }}
            />
            <style>{`
              @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            `}</style>

            {/* Phone shell */}
            <div
              style={{
                width: "clamp(220px, 30vw, 300px)",
                background: "#0d1117",
                borderRadius: "2.5rem",
                padding: "10px",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 0 1px rgba(14,165,233,0.15), inset 0 0 20px rgba(0,0,0,0.5)",
                position: "relative",
              }}
            >
              {/* Notch */}
              <div
                style={{
                  position: "absolute",
                  top: "18px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px",
                  height: "24px",
                  background: "#0d1117",
                  borderRadius: "12px",
                  zIndex: 10,
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              />
              {/* Screen */}
              <div style={{ borderRadius: "2rem", overflow: "hidden", background: "#fff" }}>
                <Image
                  src="/sap-image.png"
                  alt="SAP Training"
                  width={400}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating tag */}
            <div
              style={{
                position: "absolute",
                bottom: "30px",
                right: "-20px",
                background: "rgba(8,13,26,0.9)",
                border: "1px solid rgba(14,165,233,0.3)",
                borderRadius: "8px",
                padding: "10px 16px",
                backdropFilter: "blur(12px)",
                fontSize: "0.75rem",
                fontFamily: "'DM Sans', sans-serif",
                color: "#7dd3fc",
                whiteSpace: "nowrap",
                boxShadow: "0 0 20px rgba(14,165,233,0.15)",
              }}
            >
              <div style={{ color: "#38bdf8", fontWeight: 600, marginBottom: 2 }}>LIVE SESSION</div>
              SAP MM · Starting Soon
            </div>

            {/* Module indicator */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "-24px",
                background: "rgba(8,13,26,0.9)",
                border: "1px solid rgba(99,102,241,0.3)",
                borderRadius: "8px",
                padding: "10px 14px",
                backdropFilter: "blur(12px)",
                fontSize: "0.75rem",
                fontFamily: "'DM Sans', sans-serif",
                color: "#a5b4fc",
                boxShadow: "0 0 20px rgba(99,102,241,0.15)",
              }}
            >
              <div style={{ color: "#818cf8", fontWeight: 600, marginBottom: 2 }}>MODULE</div>
              FICO · ABAP · MM
            </div>
          </div>
        </div>

      </div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(14,165,233,0.3), transparent)" }}
      />
    </section>
  );
};

export default Hero;