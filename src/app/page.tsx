import Hero from "@/components/Hero";
import SystemProfile from "@/components/SystemProfile";
import Capabilities from "@/components/Capabilities";
import Experience from "@/components/Experience";
import Philosophy from "@/components/Philosophy";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
      <div className="relative z-10">
        <Hero />
        <SystemProfile />
        <Capabilities />
        <Experience />
        <Philosophy />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
