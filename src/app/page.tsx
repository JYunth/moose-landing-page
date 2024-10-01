import Header from "../components/Header";
import Footer from "../components/Footer";
//import { HeroSection } from "@/components/HeroSection";
import { Finalcard } from "@/components/Finalcard";
import { bentogrid } from "@/components/bentogrid";
import { CompareDemo } from "@/components/CompareDemo";
import { TypewriterEffectDemo } from "@/components/typewriter";
import FeaturesSectionDemo from "@/components/FeaturesSectionDemo";

export default function Home() {
  return (
    <main className = "bg-black min-h-screen">

      {/* HEADER SECTION */}
      <div id="header">
        <Header />
      </div>

      {/*TODO: HERO SECTION*/}
      {/* <div>
      <HeroSection />
      </div> */}
      {/* <div>
        <bentogrid />
      </div> */}
       {/*compare*/}
       <div>
       <FeaturesSectionDemo />
       </div>
       <div>
         <TypewriterEffectDemo />
      </div>
      <div>
       <CompareDemo />
      </div>
      
      {/*Finalcard*/}
      <div>
       <Finalcard />
      </div>
      {/* FOOTER SECTION */}
      <div id="footer">
        <Footer />
      </div>
      
    </main>
  );
}
