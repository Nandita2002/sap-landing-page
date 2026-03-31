import Curriculum from "@/components/Curriculum";
import DemoSessions from "@/components/DemoSessions";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import Instructor from "@/components/Instructor";
import Modules from "@/components/Modules";
import Popup from "@/components/pop";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      name: "SAP Training",
      description:
        "SAP training covering MM, FICO, and ABAP with real-time projects.",
      provider: {
        "@type": "Organization",
        name: "Rise Infotech",
        sameAs: "https://riseinfotech.in",
      },
    }),
  }}
/>

export const metadata = {
  title: "SAP Training in India | SAP MM, FICO, ABAP Course",
  description:
    "Join SAP training with live demo sessions. Learn SAP MM, FICO, ABAP with real-time projects, certification, and placement support.",
};
export default function Home() {
  return (
    <>
    <Menu/> 
      <Popup />
      <Hero />
      <DemoSessions />
      <Modules />
      <Curriculum />
      <Instructor />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer/>
    </>
  );
}