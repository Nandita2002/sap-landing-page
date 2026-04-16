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
    <section className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-16 right-0 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-5 text-center">
        <div className="inline-flex flex-wrap justify-center items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-blue-700 shadow-sm backdrop-blur mb-5 sm:mb-6">
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
          Premium SAP Training · April 2026 Cohort
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5 sm:mb-6 max-w-4xl mx-auto">
          Build a High-Value{" "}
          <span className="bg-gradient-to-r from-blue-700 to-indigo-500 bg-clip-text text-transparent">
            SAP Career
          </span>{" "}
          with Real Project Experience
        </h1>

        <p className="text-slate-600 text-base sm:text-xl leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto">
          Master SAP S/4HANA MM with expert-led sessions, live implementation
          scenarios, and interview-focused mentorship designed for beginners and
          working professionals.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-7 sm:mb-8">
          <button
            onClick={scrollToConsultation}
            className="w-full sm:w-auto px-7 sm:px-10 py-3.5 sm:py-4 rounded-xl text-white font-semibold text-sm sm:text-base shadow-[0_16px_32px_rgba(37,99,235,0.25)] bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 active:scale-95 transition-all duration-200"
          >
            Book Free Demo Class
          </button>

          <button
            onClick={scrollToCourses}
            className="w-full sm:w-auto px-7 sm:px-10 py-3.5 sm:py-4 rounded-xl border border-slate-300 bg-white/90 text-slate-700 font-semibold text-sm sm:text-base hover:bg-white active:scale-95 transition"
          >
            View Courses
          </button>
        </div>

        <p className="text-sm text-slate-500 mb-8">
          Limited slots available this month
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 max-w-3xl mx-auto">
          {[
            "1000+ Students Trained",
            "Placement & Interview Support",
            "Mentors from Top MNCs",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}