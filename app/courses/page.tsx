"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const courses = [
  {
    title: "SAP MM",
    subtitle: "Materials Management",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    duration: "6–8 Weeks",
    level: "Beginner to Advanced",
    desc: "Procurement, inventory & supply chain processes",
    path: "/courses/sap-mm",
  },
  {
    title: "SAP SD",
    subtitle: "Sales & Distribution",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    duration: "6–8 Weeks",
    level: "Beginner to Advanced",
    desc: "Order-to-cash, sales & billing workflows",
    path: "/courses/sap-sd",
  },
  {
    title: "SAP FICO",
    subtitle: "Finance & Controlling",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07",
    duration: "8–10 Weeks",
    level: "Intermediate to Advanced",
    desc: "Financial accounting & cost management",
    path: "/courses/sap-fico",
  },
];

export default function CoursesPage() {
  const router = useRouter();

  return (
    <section
      id="courses"
      className="relative min-h-screen px-4 py-14 md:py-20 bg-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute bottom-8 right-0 h-60 w-60 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] sm:text-xs font-semibold tracking-wide text-blue-700 uppercase mb-4">
            Specialized SAP Modules
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            SAP ERP Courses
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto">
            Choose the right SAP module based on your career path and learn
            through hands-on implementation projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 items-stretch">
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => router.push(course.path)}
              className="group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 bg-white/90 shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_40px_rgba(37,99,235,0.15)] transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
            >
              <div className="overflow-hidden relative h-44 sm:h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">{course.title}</h3>
                <p className="text-sm text-slate-500 mb-2">{course.subtitle}</p>
                <div className="text-xs text-slate-500 mb-3">
                  ⏱ {course.duration} • 🎯 {course.level}
                </div>
                <p className="text-sm text-slate-600 mb-5 min-h-[44px]">{course.desc}</p>
                <Button
                  variant="gradient"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(course.path);
                  }}
                  className="mt-auto w-full px-6 py-2.5 text-sm"
                >
                  View Full Syllabus
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/courses/curriculum"
            className="text-blue-700 hover:text-blue-800 hover:underline font-semibold text-sm"
          >
            Explore complete course curriculum →
          </Link>
        </div>
      </div>
    </section>
  );
}