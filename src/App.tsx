import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Process from "./components/Process";
import Services from "./components/Services";
import WhyMe from "./components/WhyMe";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <CustomCursor />

      <a
        href="#main-content"
        className="bg-[#6C63FF] text-white focus:ring-[#00D4FF] fixed top-4 left-4 z-[100] -translate-y-24 rounded-full px-5 py-2.5 text-sm font-bold shadow-lg transition-transform focus:translate-y-0 focus:ring-2 focus:outline-none min-h-[48px]"
      >
        Skip to content
      </a>

      <ScrollProgress />

      <div className="text-foreground min-h-dvh selection:bg-[#6C63FF]/30 selection:text-white">
        <Navbar />

        <main id="main-content">
          <Hero />
          <TrustStrip />
          <Portfolio />
          <About />
          <Process />
          <Services />
          <WhyMe />
          <Skills />
          <Testimonials />
          <CTA />
        </main>

        <Footer />
      </div>
    </>
  );
}
