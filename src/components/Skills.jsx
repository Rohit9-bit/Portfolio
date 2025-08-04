import React, { useState } from "react";
import { Link } from "react-scroll";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = {
    "Frontend Development": {
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "HTML/CSS",
      ],
      color: "black",
      icon: "🎨",
    },
    "Backend Development": {
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
      ],
      color: "black",
      icon: "⚡",
    },
    "Tools & Technologies": {
      skills: ["Git", "Docker", "AWS", "Figma", "VS Code", "Postman"],
      color: "black",
      icon: "🛠️",
    },
  };

  return (
    <section id="skills" className="py-20  min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 uppercase">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-purple-600">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(
            ([category, { skills, icon }], categoryIndex) => (
              <div
                key={category}
                className="group bg-[#f2f5ff] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-black"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                {/* Category Header */}
                <div
                  className={`bg-black p-6 rounded-t-2xl relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#f2f5ff] bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#f2f5ff] bg-opacity-10 rounded-full -ml-8 -mb-8"></div>
                  <div className="relative z-10 flex items-center">
                    <span className="text-3xl mr-3">{icon}</span>
                    <h3 className="text-xl font-bold text-white uppercase">
                      {category}
                    </h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill, index) => (
                      <div
                        key={skill}
                        className={`
                        relative p-3 rounded-xl border-2 border-gray-100 
                        transition-all duration-300 cursor-pointer
                        hover:border-transparent hover:shadow-lg
                        ${hoveredSkill === skill ? "scale-105 shadow-lg" : ""}
                      `}
                        style={{
                          animationDelay: `${
                            categoryIndex * 0.2 + index * 0.1
                          }s`,
                          background:
                            hoveredSkill === skill
                              ? `oklch(49.6% 0.265 301.924 /40%)`
                              : "",
                        }}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex items-center justify-center">
                          <span
                            className={`
                          font-semibold text-sm text-center
                          ${
                            hoveredSkill === skill
                              ? "text-black"
                              : "text-gray-700"
                          }
                          transition-colors duration-300 uppercase
                        `}
                          >
                            {skill}
                          </span>
                        </div>

                        {/* Hover effect dot */}
                        <div
                          className={`
                        absolute top-2 right-2 w-2 h-2 rounded-full
                        transition-all duration-300
                        ${
                          hoveredSkill === skill
                            ? `bg-purple-500 opacity-100`
                            : "bg-gray-300 opacity-0"
                        }
                      `}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6">
                  <div className="flex justify-center">
                    <div
                      className={`
                    px-4 py-2 rounded-full text-xs font-medium
                    bg-gradient-to-r from-purple-500 to-purple-600 text-white
                    opacity-0 group-hover:opacity-100
                    transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 uppercase
                  `}
                    >
                      {skills.length} Technologies
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 uppercase">
          <p className="text-gray-600 mb-6 ">
            Want to see these skills in action?
          </p>
          <Link
            to={"samples"}
            offset={0}
            duration={1000}
            smooth
            className="
            bg-purple-600 
            text-white px-8 py-3 font-semibold
            hover:bg-purple-500
            transform hover:scale-105 transition-all duration-300
            shadow-lg hover:shadow-xl uppercase
          "
          >
            View My Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
