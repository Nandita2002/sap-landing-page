"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen px-4 py-14 bg-gradient-to-b from-white to-slate-50">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
        SAP ERP Courses
      </h1>

      <p className="text-center text-gray-500 mb-12">
        Choose the right SAP module based on your career path
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        {courses.map((course, index) => (
          <div
            key={index}
            onClick={() => router.push(course.path)}
            className="group cursor-pointer rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">

              <h2 className="text-lg font-semibold text-gray-900">
                {course.title}
              </h2>

              <p className="text-sm text-gray-500 mb-2">
                {course.subtitle}
              </p>

              {/* Info */}
              <div className="text-xs text-gray-500 mb-3">
                ⏱ {course.duration} • 🎯 {course.level}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-6 min-h-[48px]">
                {course.desc}
              </p>

              {/* ✅ Gradient Button */}
              <Button
                variant="gradient"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(course.path);
                }}
                className="mt-auto w-full px-6 py-2.5 text-sm"
              >
                Know More →
              </Button>

            </div>
          </div>
        ))}
      </div>

      {/* Explore More (linked to curriculum page) */}
      <div className="text-center mt-14">
        <Link href="/courses/curriculum" className="text-blue-600 hover:underline font-medium text-sm">
          Explore more courses →
        </Link>
      </div>

    </div>
  );
}