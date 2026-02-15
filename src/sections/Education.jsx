import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { education } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  useGSAP(() => {
    gsap.utils.toArray(".edu-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.utils.toArray(".edu-text").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);

  return (
    <section id="education" className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Education" sub="📚 My Academic Journey" />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {education.map((edu) => (
              <div key={edu.id} className="exp-card-wrapper edu-card">
                <div className="xl:w-2/6">
                  <GlowCard card={edu}>
                    <div className="flex justify-center items-center h-full">
                       {/* Placeholder or specific icon if available */}
                      <img src="/images/graduate.png" alt="education" className="w-20 h-20 object-contain" onError={(e) => e.target.style.display='none'}/>
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="edu-text flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div>
                        <h1 className="font-semibold text-3xl">{edu.name}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{edu.duration}
                        </p>
                        <p className="text-[#839CB5] text-xl font-medium">
                          {edu.pos}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
