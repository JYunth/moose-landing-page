import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "@/components/HeroSection";
import { Finalcard } from "@/components/Finalcard";
// import { bentogrid } from "@/components/bentogrid";
import AboutSection from "@/components/AboutSection";
import { TypewriterEffectDemo } from "@/components/typewriter";
import FeaturesSectionDemo from "@/components/FeaturesSectionDemo";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">

      {/* HEADER SECTION */}
      <div id="header">
        <Header />
      </div>

      {/*HERO SECTION*/}
      <div id="hero" className="h-screen">
        <HeroSection />
      </div>

      {/*ABOUT SECTION*/}
      <div id="about" className="h-screen">
        <AboutSection />
      </div>

      {/* <div>
        <bentogrid />
      </div> */}
      {/*compare*/}
      <div>
        <p className="text-6xl font-inter font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-white text-center">Why MooseAI</p>
        <FeaturesSectionDemo />
      </div>
      <div>
        <TypewriterEffectDemo />
      </div>

      {/*Finalcard*/}
      <div className = "max-h-screen mb-10">
        <Finalcard />
      </div>

      {/* FOOTER SECTION */}
      <div id="footer">
        <Footer />
      </div>

    </main>
  );
}
