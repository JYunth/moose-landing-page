import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className = "bg-black min-h-screen">

      {/* HEADER SECTION */}
      <div id="header">
        <Header />
      </div>

      {/*TODO: HERO SECTION*/}

      {/* FOOTER SECTION */}
      <div id="footer">
        <Footer />
      </div>
      
    </main>
  );
}
