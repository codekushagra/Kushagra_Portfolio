import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen">
      {/* Dynamic Background: Beams and Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-background opacity-30" />
        
        {/* Animated Beams */}
        <div className="absolute inset-0 flex justify-around pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="beam animate-beam"
              style={{
                left: `${(i + 1) * 15}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${3 + i}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-layout relative z-10">
        <div className="hero-content-grid">
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center justify-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl text-lg relative z-10 pointer-events-none max-w-3xl mx-auto">
              Hi, I'm Kushagra Chaturvedi, a Full Stack Developer based in
              Lucknow, India.
            </p>

            <div className="flex justify-center mt-2">
              <Button
                text="See My Work"
                className="md:w-80 md:h-16 w-60 h-12"
                id="counter"
              />
            </div>
          </div>
        </div>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
