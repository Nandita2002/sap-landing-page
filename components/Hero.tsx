"use client";

import React, { useEffect, useRef } from "react";

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
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.8 + 0.4,
        alpha: Math.random() * 0.4 + 0.1,
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
        ctx.fillStyle = `rgba(14, 120, 220, ${p.alpha})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(14, 120, 220, ${0.07 * (1 - dist / 110)})`;
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
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap');

        .hero-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #0a1628;
        }
        .hero-body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
          color: #4a5a75;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 100px;
          padding: 6px 16px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.75rem;
          color: #1d4ed8;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-weight: 600;
        }
        .badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 0 2px rgba(37,99,235,0.25);
          animation: pulse-dot 1.8s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 2px rgba(37,99,235,0.25); }
          50%       { box-shadow: 0 0 0 5px rgba(37,99,235,0.08); }
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 0.875rem;
          letter-spacing: 0.01em;
          padding: 14px 30px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          box-shadow: 0 4px 14px rgba(37,99,235,0.3);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37,99,235,0.4);
          background: linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%);
        }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #1d4ed8;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 0.875rem;
          letter-spacing: 0.01em;
          padding: 13px 30px;
          border-radius: 8px;
          border: 1.5px solid #bfdbfe;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .btn-outline:hover {
          border-color: #2563eb;
          background: #eff6ff;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(37,99,235,0.1);
        }
        .stat-card {
          background: #fff;
          border: 1px solid #e0eaff;
          border-radius: 12px;
          padding: 18px 22px;
          box-shadow: 0 2px 12px rgba(37,99,235,0.06);
          transition: all 0.3s ease;
          text-align: center;
        }
        .stat-card:hover {
          border-color: #93c5fd;
          box-shadow: 0 6px 24px rgba(37,99,235,0.12);
          transform: translateY(-2px);
        }
        .stat-val {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          background: linear-gradient(135deg, #1d4ed8, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stat-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 4px;
        }
        .dashboard-panel {
          background: #fff;
          border: 1px solid #dbeafe;
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 20px 60px rgba(37,99,235,0.1), 0 4px 20px rgba(0,0,0,0.04);
          position: relative;
          overflow: hidden;
        }
        .dashboard-panel::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #1d4ed8, #3b82f6, #93c5fd);
        }
        .module-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 6px;
          padding: 6px 12px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.75rem;
          color: #1d4ed8;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .module-chip:hover { background: #dbeafe; border-color: #93c5fd; }
        .module-chip-dot { width: 6px; height: 6px; border-radius: 50%; background: #2563eb; }
        .progress-bar-track {
          height: 6px;
          background: #eff6ff;
          border-radius: 99px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          border-radius: 99px;
          background: linear-gradient(90deg, #1d4ed8, #3b82f6);
          animation: fillBar 1.8s cubic-bezier(0.4,0,0.2,1) forwards;
          width: 0%;
        }
        @keyframes fillBar { to { width: var(--target-w); } }
        .live-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 99px;
          padding: 4px 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.68rem;
          color: #dc2626;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .live-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #ef4444;
          animation: pulse-dot 1.2s ease-in-out infinite;
        }
        .hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; opacity: 0; }
        .fade-up-1 { animation-delay: 0.05s; }
        .fade-up-2 { animation-delay: 0.15s; }
        .fade-up-3 { animation-delay: 0.28s; }
        .fade-up-4 { animation-delay: 0.42s; }
        .fade-up-5 { animation-delay: 0.56s; }
        .fade-up-6 { animation-delay: 0.68s; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .float-panel { animation: floatPanel 5s ease-in-out infinite; }
        @keyframes floatPanel {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        .trust-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 400;
          color: #4a5a75;
        }
        .trust-check {
          width: 18px; height: 18px;
          border-radius: 50%;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .panel-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>

      <div className="hero-grid" />
      <div style={{ position:"absolute", top:-100, right:-80, width:500, height:500, background:"radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)", borderRadius:"50%", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:-60, left:-60, width:350, height:350, background:"radial-gradient(circle, rgba(219,234,254,0.35) 0%, transparent 70%)", borderRadius:"50%", pointerEvents:"none" }} />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.5 }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-2 items-center gap-16">

        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="hero-badge fade-up fade-up-1">
            <span className="badge-dot" />
            Live Training Available Now
          </div>

          <h1 className="hero-title mt-6 text-4xl sm:text-5xl lg:text-6xl fade-up fade-up-2">
            Master SAP<br />
            <span style={{
              background: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 60%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Skills That Scale
            </span>
          </h1>

          <p className="hero-body mt-5 text-base md:text-lg max-w-md fade-up fade-up-3" style={{ lineHeight: "1.8" }}>
            Learn SAP MM, FICO & ABAP through live demos, real-world projects,
            and expert mentorship — built for the modern enterprise.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 fade-up fade-up-4">
            <button className="btn-primary">
              Join Free Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-outline">View Modules</button>
          </div>

          <div className="mt-7 flex flex-col gap-2.5 fade-up fade-up-5">
            {["No prior SAP experience needed", "Weekend & weekday batches", "Certificate upon completion"].map((t) => (
              <div className="trust-row" key={t}>
                <div className="trust-check">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4l2 2 3-3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {t}
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 w-full max-w-sm mx-auto md:mx-0 fade-up fade-up-6">
            {[{ val: "500+", label: "Students" }, { val: "3", label: "Modules" }, { val: "98%", label: "Placement" }].map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-val">{s.val}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end fade-up fade-up-3">
          <div className="float-panel" style={{ width: "clamp(300px, 40vw, 420px)" }}>
            <div className="dashboard-panel">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:"1rem", color:"#0a1628" }}>SAP Training Portal</div>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:"0.75rem", color:"#64748b", marginTop:2, fontWeight:400 }}>Your Learning Dashboard</div>
                </div>
                <div className="live-tag"><span className="live-dot" /> Live</div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["SAP MM", "SAP FICO", "SAP ABAP"].map((m) => (
                  <div className="module-chip" key={m}><span className="module-chip-dot" />{m}</div>
                ))}
              </div>

              <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
                {[{ label:"Materials Management (MM)", pct:78 }, { label:"Finance & Controlling (FICO)", pct:55 }, { label:"ABAP Programming", pct:40 }].map((item) => (
                  <div key={item.label}>
                    <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                      <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:"0.78rem", color:"#334155", fontWeight:500 }}>{item.label}</span>
                      <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:"0.78rem", color:"#1d4ed8", fontWeight:700 }}>{item.pct}%</span>
                    </div>
                    <div className="progress-bar-track">
                      <div className="progress-bar-fill" style={{ "--target-w": `${item.pct}%` } as React.CSSProperties} />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ height:1, background:"#e0eaff", margin:"22px 0" }} />

              <div style={{ background:"#eff6ff", border:"1px solid #bfdbfe", borderRadius:10, padding:"14px 16px", display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ width:38, height:38, borderRadius:8, background:"linear-gradient(135deg,#1d4ed8,#3b82f6)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.5"/>
                    <path d="M9 5.5v4l2.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:"0.78rem", color:"#1d4ed8" }}>Next Live Session</div>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:"0.73rem", color:"#4a5a75", marginTop:2, fontWeight:400 }}>SAP MM · Today at 7:00 PM IST</div>
                </div>
                <div style={{ marginLeft:"auto" }}>
                  <div style={{ background:"#1d4ed8", color:"#fff", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:"0.7rem", padding:"5px 12px", borderRadius:6, cursor:"pointer", whiteSpace:"nowrap" }}>Join →</div>
                </div>
              </div>

              <div style={{ display:"flex", alignItems:"center", gap:10, marginTop:18 }}>
                <div style={{ display:"flex" }}>
                  {["#1d4ed8","#2563eb","#3b82f6","#60a5fa"].map((c, i) => (
                    <div key={i} style={{ width:28, height:28, borderRadius:"50%", background:c, border:"2px solid #fff", marginLeft:i===0?0:-8, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.58rem", color:"#fff", fontWeight:700, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
                      {["A","R","S","K"][i]}
                    </div>
                  ))}
                </div>
                <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:"0.75rem", color:"#64748b", fontWeight:400 }}>
                  +<strong style={{ color:"#1d4ed8", fontWeight:700 }}>490</strong> students enrolled
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background:"linear-gradient(90deg, transparent, rgba(37,99,235,0.25), transparent)" }} />
    </section>
  );
};

export default Hero;