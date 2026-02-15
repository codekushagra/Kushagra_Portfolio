import { useState } from "react";
import { mySkills } from "../constants";
import TitleHeader from "../components/TitleHeader";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState(mySkills[0].id);

  return (
    <section className="c-space my-20" id="skills">
       <TitleHeader
          title="Technical Skills"
          sub="💻 My Config"
        />
      
      <div className="mt-12 flex flex-col items-center">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {mySkills.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-white text-black shadow-lg"
                  : "bg-black-200 text-white-600 hover:bg-black-300"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-5xl px-4">
          {mySkills
            .find((cat) => cat.id === activeTab)
            ?.skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-black-200 rounded-xl hover:bg-black-300 transition-colors duration-300 group border border-black-300"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-2xl font-bold hidden text-white-500">
                    {skill.name.charAt(0)}
                  </span>
                </div>
                <p className="text-white font-medium text-center">{skill.name}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
