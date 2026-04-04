"use client";
import React from "react";
import Image from "next/image";

const highlights = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="7" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Enterprise Experience",
    text: "Worked with enterprise-level SAP systems across manufacturing, retail & services",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 5v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Project-Based Teaching",
    text: "Real-time, hands-on training with live SAP system access and industry scenarios",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2L3 5v4c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V5L9 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Certified SAP Professional",
    text: "Industry-certified consultant with deep expertise in MM, FICO & ABAP modules",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="7" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 16c0-2.761 2.239-5 5-5s5 2.239 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 8a2 2 0 000-4M15 16c0-1.864-1.196-3.438-2.857-4.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Career Mentorship",
    text: "One-on-one guidance, mock interviews & placement support for every student",
  },
];

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "8+", label: "Years Experience" },
  { value: "98%", label: "Placement Rate" },
  { value: "3", label: "SAP Modules" },
];

const badges = ["SAP MM", "SAP FICO", "SAP ABAP", "S/4HANA", "Live Projects"];

const Instructor = () => {
  return (
    <section
      id="instructor"
      aria-labelledby="instructor-heading"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      className="relative py-24 px-4 bg-white overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap');

        .inst-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(37,99,235,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.035) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
        .inst-image-wrap {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          border: 2px solid #e0eaff;
          box-shadow: 0 20px 60px rgba(37,99,235,0.12), 0 4px 20px rgba(0,0,0,0.05);
          transition: box-shadow 0.4s ease;
        }
        .inst-image-wrap:hover {
          box-shadow: 0 28px 80px rgba(37,99,235,0.18), 0 4px 20px rgba(0,0,0,0.06);
        }
        .inst-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 99px;
          padding: 4px 12px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #1d4ed8;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .highlight-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: #fafbff;
          border: 1.5px solid #e0eaff;
          border-radius: 14px;
          padding: 16px 18px;
          transition: all 0.25s ease;
        }
        .highlight-card:hover {
          background: #eff6ff;
          border-color: #93c5fd;
          transform: translateX(4px);
        }
        .highlight-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1d4ed8;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }
        .highlight-card:hover .highlight-icon {
          background: linear-gradient(135deg, #1d4ed8, #3b82f6);
          border-color: transparent;
          color: #fff;
        }
        .stat-card {
          background: #fff;
          border: 1.5px solid #e0eaff;
          border-radius: 14px;
          padding: 18px 14px;
          text-align: center;
          box-shadow: 0 2px 10px rgba(37,99,235,0.06);
          transition: all 0.25s ease;
          flex: 1;
        }
        .stat-card:hover {
          border-color: #93c5fd;
          box-shadow: 0 6px 24px rgba(37,99,235,0.12);
          transform: translateY(-3px);
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 14px 32px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(37,99,235,0.3);
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(37,99,235,0.42);
          background: linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%);
        }
        .cta-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #1d4ed8;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 13px 28px;
          border-radius: 10px;
          border: 1.5px solid #bfdbfe;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .cta-btn-outline:hover {
          border-color: #2563eb;
          background: #eff6ff;
          transform: translateY(-2px);
        }
        .verified-badge {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.95);
          border: 1px solid #bfdbfe;
          border-radius: 12px;
          padding: 10px 18px;
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(37,99,235,0.12);
          backdrop-filter: blur(8px);
        }
        .fade-in-up {
          animation: fadeInUp 0.7s ease forwards;
          opacity: 0;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fi-1 { animation-delay: 0.05s; }
        .fi-2 { animation-delay: 0.15s; }
        .fi-3 { animation-delay: 0.25s; }
        .fi-4 { animation-delay: 0.35s; }
        .fi-5 { animation-delay: 0.45s; }
      `}</style>

      {/* BG */}
      <div className="inst-grid-bg" />
      <div style={{ position:"absolute", top:-80, right:-60, width:420, height:420, background:"radial-gradient(circle,rgba(219,234,254,0.55) 0%,transparent 70%)", borderRadius:"50%", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:-60, left:-40, width:340, height:340, background:"radial-gradient(circle,rgba(219,234,254,0.4) 0%,transparent 70%)", borderRadius:"50%", pointerEvents:"none" }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16 fade-in-up fi-1">
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#eff6ff", border:"1px solid #bfdbfe", borderRadius:100, padding:"5px 16px", marginBottom:18 }}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="3" fill="#2563eb"/></svg>
            <span style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", color:"#1d4ed8" }}>Meet Your Instructor</span>
          </div>
          <h2
            id="instructor-heading"
            style={{ fontWeight:800, fontSize:"clamp(1.9rem,4vw,2.75rem)", color:"#0a1628", margin:"0 0 14px", lineHeight:1.1, letterSpacing:"-0.025em" }}
          >
            Learn from{" "}
            <span style={{ background:"linear-gradient(135deg,#1d4ed8 0%,#3b82f6 60%,#60a5fa 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Industry Experts
            </span>
          </h2>
          <p style={{ color:"#4a5a75", maxWidth:500, margin:"0 auto", lineHeight:1.8, fontSize:"1rem", fontWeight:400 }}>
            Get mentored by a certified SAP consultant with real-world enterprise project experience and a strong track record of student placements.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT — Image */}
          <div className="flex justify-center fade-in-up fi-2">
            <div style={{ position:"relative", width:"100%", maxWidth:400 }}>

              {/* Decorative bg card behind image */}
              <div style={{ position:"absolute", top:20, left:20, right:-20, bottom:-20, background:"#eff6ff", borderRadius:24, border:"1.5px solid #bfdbfe", zIndex:0 }} />

              <div className="inst-image-wrap" style={{ position:"relative", zIndex:1 }}>
                <div style={{ width:"100%", aspectRatio:"4/5", position:"relative", background:"#f0f7ff" }}>
                  <Image
                    src="/instructor.png"
                    alt="Rahul Sharma – SAP Consultant and Instructor"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Verified badge */}
                <div className="verified-badge">
                  <div style={{ width:28, height:28, borderRadius:8, background:"linear-gradient(135deg,#1d4ed8,#3b82f6)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1L2 3v4c0 2.8 2 5.2 5 6 3-0.8 5-3.2 5-6V3L7 1z" stroke="white" strokeWidth="1.3" strokeLinejoin="round"/>
                      <path d="M4.5 7l2 2 3-3" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:"0.78rem", color:"#0a1628", lineHeight:1 }}>Certified SAP Professional</div>
                    <div style={{ fontWeight:400, fontSize:"0.68rem", color:"#64748b", marginTop:2 }}>SAP MM · FICO · ABAP</div>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <div style={{ position:"absolute", top:28, right:-32, background:"#fff", border:"1.5px solid #e0eaff", borderRadius:14, padding:"12px 16px", boxShadow:"0 8px 28px rgba(37,99,235,0.12)", zIndex:2, textAlign:"center", minWidth:90 }}>
                <div style={{ fontWeight:800, fontSize:"1.4rem", background:"linear-gradient(135deg,#1d4ed8,#3b82f6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", lineHeight:1 }}>8+</div>
                <div style={{ fontWeight:600, fontSize:"0.62rem", color:"#64748b", textTransform:"uppercase", letterSpacing:"0.08em", marginTop:4 }}>Years Exp.</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="fade-in-up fi-3" style={{ display:"flex", flexDirection:"column", gap:24 }}>

            {/* Name + role */}
            <div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:12 }}>
                {badges.map(b => (
                  <span className="inst-badge-pill" key={b}>
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none"><circle cx="3" cy="3" r="2.5" fill="#2563eb"/></svg>
                    {b}
                  </span>
                ))}
              </div>
              <h3 style={{ fontWeight:800, fontSize:"clamp(1.5rem,3vw,2rem)", color:"#0a1628", margin:"0 0 6px", letterSpacing:"-0.02em" }}>
                Rahul Sharma
              </h3>
              <p style={{ color:"#2563eb", fontWeight:600, fontSize:"0.88rem", margin:0, letterSpacing:"0.01em" }}>
                SAP Consultant &amp; Corporate Trainer · 8+ Years Experience
              </p>
            </div>

            {/* Bio */}
            <p style={{ color:"#4a5a75", lineHeight:1.82, fontSize:"0.93rem", fontWeight:400, margin:0 }}>
              Rahul is a certified SAP professional specializing in{" "}
              <strong style={{ color:"#0a1628", fontWeight:700 }}>MM, FICO, and ABAP</strong>{" "}
              with hands-on exposure to enterprise implementations across industries. He has trained{" "}
              <strong style={{ color:"#0a1628", fontWeight:700 }}>500+ students</strong>{" "}
              and guided them into successful SAP careers — combining real-world project insight with structured, placement-focused mentorship.
            </p>

            {/* Stats row */}
            <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
              {stats.map(s => (
                <div className="stat-card" key={s.label} style={{ minWidth:70 }}>
                  <div style={{ fontWeight:800, fontSize:"1.3rem", background:"linear-gradient(135deg,#1d4ed8,#3b82f6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", lineHeight:1 }}>{s.value}</div>
                  <div style={{ fontWeight:600, fontSize:"0.62rem", color:"#64748b", textTransform:"uppercase", letterSpacing:"0.08em", marginTop:5 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {highlights.map(h => (
                <div className="highlight-card" key={h.title}>
                  <div className="highlight-icon">{h.icon}</div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:"0.85rem", color:"#0a1628", marginBottom:3 }}>{h.title}</div>
                    <div style={{ fontWeight:400, fontSize:"0.79rem", color:"#4a5a75", lineHeight:1.55 }}>{h.text}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display:"flex", flexWrap:"wrap", gap:12, marginTop:4 }}>
              <button
                className="cta-btn"
                aria-label="Join a free demo session"
                onClick={() => window.open("https://wa.me/91XXXXXXXXXX","_blank")}
              >
                Join Free Demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="cta-btn-outline"
                aria-label="View full curriculum"
              >
                View Curriculum
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div style={{ height:1, background:"linear-gradient(90deg,transparent,rgba(37,99,235,0.2),transparent)", maxWidth:1160, margin:"72px auto 0" }} />
    </section>
  );
};

export default Instructor;