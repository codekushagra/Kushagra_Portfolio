import { useEffect } from "react";
import Lenis from "lenis";

import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Achievements from "./sections/Achievements";
import Navbar from "./components/NavBar";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <TechStack />
      <Experience />
      <Education />
      <FeatureCards />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
