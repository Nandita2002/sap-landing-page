"use client";

export default function Hero() {

  const scrollToConsultation = () => {
    if (typeof window === "undefined") return;

    const el = document.getElementById("consultation");

    // 🔴 If form not found → fail safely
    if (!el) {
      console.error("Consultation section not found");
      return;
    }

    const yOffset = -80; // adjust based on navbar height
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    // Optional: auto-focus first input
    setTimeout(() => {
      const input = document.querySelector<HTMLInputElement>(
        'input[name="name"]'
      );
      input?.focus();
    }, 500);
  };

  const scrollToCurriculum = () => {
    const el = document.getElementById("curriculum");
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-white overflow-hidden py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
          Limited Seats • April Batch Filling Fast
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Become a SAP MM Consultant <br />
          in <span className="text-blue-600">60 Days</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
          Learn SAP S/4HANA MM with real-time projects, expert mentorship & 
          placement support — even if you&quot;re starting from scratch.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">

          {/* ✅ FIXED BUTTON */}
          <button
            onClick={scrollToConsultation}
            aria-label="Go to free consultation form"
            title="Get Free Career Consultation"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 active:scale-95 transition"
          >
            Get Free Career Consultation
          </button>

          <button
            onClick={scrollToCurriculum}
            aria-label="View curriculum section"
            title="View Curriculum"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50 active:scale-95 transition"
          >
            View Curriculum
          </button>

        </div>

        {/* Micro Trust */}
        <p className="text-xs text-gray-400 mb-6">
          No spam • Free consultation • Instant response
        </p>

        {/* Trust Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          <div className="bg-gray-50 border px-4 py-2 rounded-lg text-xs text-gray-600">
            ⭐ 1000+ Students
          </div>
          <div className="bg-gray-50 border px-4 py-2 rounded-lg text-xs text-gray-600">
            💼 Placement Support
          </div>
          <div className="bg-gray-50 border px-4 py-2 rounded-lg text-xs text-gray-600">
            🧑‍🏫 Industry Experts
          </div>
        </div>

      </div>
    </section>
  );
}