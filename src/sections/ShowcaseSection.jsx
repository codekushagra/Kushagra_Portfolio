import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const mainProjectRef = useRef(null);
  const listRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animation for main project
    gsap.fromTo(
      mainProjectRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: mainProjectRef.current,
          start: "top bottom-=100",
        },
      }
    );

    // Animation for project list
    gsap.fromTo(
      ".project-list-item",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: listRef.current,
          start: "top bottom-=100",
        },
      }
    );
  }, []);

  const mainProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={mainProjectRef} className="first-project-wrapper">
            <a
              href={mainProject.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full group"
            >
              <div className="image-wrapper">
                <img src="/images/project1.png" alt={mainProject.title} />
              </div>
              <div className="text-content">
                <h2>{mainProject.title}</h2>
                <p className="text-white-50 md:text-xl">{mainProject.subdesc}</p>
                <div className="badges mt-4">
                  {mainProject.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-black-200 text-white-50 text-sm py-1 px-3 rounded-full"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>

          <div ref={listRef} className="project-list-wrapper overflow-hidden">
            {otherProjects.map((project, index) => (
              <div key={project.title} className="project-list-item project">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div
                    className={`image-wrapper ${
                      index % 2 === 0 ? "bg-[#FFEFDB]" : "bg-[#FFE7EB]"
                    }`}
                  >
                    <img
                      src={`/images/project${index + 2}.png`} // Assuming images adhere to this naming or fallback
                      alt={project.title}
                      onError={(e) => {
                        e.target.src = "/images/project1.png"; // Fallback image
                      }}
                    />
                  </div>
                  <h2>{project.title}</h2>
                  <p className="text-white-50 text-sm mt-2 line-clamp-2">
                    {project.desc}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;

