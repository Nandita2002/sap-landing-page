"use client";

export default function Hero() {

  const scrollToConsultation = () => {
    if (typeof window === "undefined") return;

    const el = document.getElementById("consultation");

    if (!el) {
      console.error("Consultation section not found");
      return;
    }

    const yOffset = -80;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    setTimeout(() => {
      const input = document.querySelector<HTMLInputElement>(
        'input[name="name"]'
      );
      input?.focus();
    }, 500);
  };

  const scrollToCourses = () => {
    const el = document.getElementById("courses");
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-white overflow-hidden pt-14 pb-20 md:pt-16 md:pb-24">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-5 py-2 rounded-full mb-5">
          <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
          Limited Seats • April Batch Filling Fast
        </div>

        {/* 🔥 FIXED HEADING (2 lines only) */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 max-w-3xl mx-auto">
          Become a <span className="text-blue-600">SAP</span> MM Consultant in{" "}
          <span className="text-blue-600">3 Months</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Learn{" "}
          <span className="text-blue-600 font-semibold">SAP</span>{" "}
          S/4HANA MM with real-time projects, expert mentorship & 
          placement support — even if you&rsquo;re starting from scratch.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">

          {/* Gradient CTA */}
          <button
            onClick={scrollToConsultation}
            className="w-full sm:w-auto px-10 py-4 rounded-xl text-white font-semibold text-base shadow-lg 
            bg-gradient-to-r from-blue-600 to-blue-500 
            hover:from-blue-700 hover:to-blue-600 
            active:scale-95 transition-all duration-200"
          >
            Book Free Demo Class →
          </button>

          {/* Secondary */}
          <button
            onClick={scrollToCourses}
            className="w-full sm:w-auto px-10 py-4 rounded-xl border border-gray-300 text-gray-700 font-semibold text-base hover:bg-gray-50 active:scale-95 transition"
          >
            View Courses
          </button>

        </div>

        {/* Micro Trust */}
        <p className="text-sm text-gray-400 mb-8">
          Limited slots available this week
        </p>

        {/* Trust Pills */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-gray-50 border px-5 py-2.5 rounded-lg text-sm text-gray-600">
            ⭐ 1000+ Students
          </div>
          <div className="bg-gray-50 border px-5 py-2.5 rounded-lg text-sm text-gray-600">
            💼 Placement Support
          </div>
          <div className="bg-gray-50 border px-5 py-2.5 rounded-lg text-sm text-gray-600">
            🧑‍🏫 Industry Experts
          </div>
        </div>

      </div>
    </section>
  );
}