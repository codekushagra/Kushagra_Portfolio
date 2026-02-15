import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { mySkills } from "../constants";
import TitleHeader from "../components/TitleHeader";

const TechStack = () => {
  const [expandedCategories, setExpandedCategories] = useState(
    mySkills.map((cat) => cat.id)
  );
  const containerRef = useRef(null);

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  useGSAP(() => {
    // Staggered entrance for categories
    gsap.from(".tech-category", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });
  }, { scope: containerRef });

  // 3D Tilt Effect Logic
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <section className="c-space my-20" id="skills" ref={containerRef}>
      <TitleHeader title="Technical Skills" sub="💻 My Tech Arsenal" />

      <div className="mt-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {mySkills.map((category) => {
            const isExpanded = expandedCategories.includes(category.id);
            return (
              <div
                key={category.id}
                className="tech-category relative group perspective-1000"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Advanced Glassmorphism Container */}
                <div className="relative rounded-[2.5rem] overflow-hidden transition-all duration-500 transform-style-3d shadow-2xl">
                  {/* Background Layers */}
                  <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-3xl border border-white/5 group-hover:border-blue-500/30 transition-colors duration-500" />
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl" />
                  
                  {/* Neon Glow Pulse */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px] animate-pulse-glow" />

                  <div className="relative">
                    {/* Category Header */}
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full px-10 py-10 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-6">
                        <div className="relative">
                          <div className="w-1.5 h-12 bg-blue-600 rounded-full group-hover:shadow-[0_0_20px_rgba(37,99,235,1)] transition-all duration-500" />
                          <div className="absolute inset-0 w-1.5 h-12 bg-blue-400 blur-sm opacity-50" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-white/90 tracking-widest uppercase italic group-hover:text-white transition-colors duration-300">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                      <div
                        className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-all duration-700 shadow-inner ${
                          isExpanded ? "rotate-180 bg-blue-600/40 border-blue-400/50" : ""
                        }`}
                      >
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          className="opacity-90"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </button>

                    {/* Skills Grid */}
                    <div
                      className={`overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                        isExpanded ? "max-h-[2000px] opacity-100 pb-12" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-10 grid grid-cols-2 md:grid-cols-3 gap-6">
                        {category.skills.map((skill, index) => (
                          <div
                            key={index}
                            className="skill-item relative flex flex-col items-center justify-center p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.05] hover:border-blue-500/40 transition-all duration-500 group/skill"
                          >
                            {/* Inner Glow on Hover */}
                            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
                              <img
                                src={skill.icon}
                                alt={skill.name}
                                className={`w-full h-full object-contain animate-float transition-all duration-500 group-hover/skill:scale-110 ${
                                  ["github", "clerk", "vercel"].includes(skill.name.toLowerCase())
                                    ? "brightness-0 invert" 
                                    : ""
                                }`}
                                style={{ animationDelay: `${index * 0.15}s`, animationDuration: "5s" }}
                                onError={(e) => {
                                  e.target.style.display = "none";
                                  e.target.nextSibling.style.display = "flex";
                                }}
                              />
                              <span className="text-3xl font-black hidden text-white/10 uppercase tracking-tighter">
                                {skill.name.charAt(0)}
                              </span>
                            </div>
                            <p className="relative text-white/40 group-hover/skill:text-blue-400 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase transition-all duration-300">
                              {skill.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
