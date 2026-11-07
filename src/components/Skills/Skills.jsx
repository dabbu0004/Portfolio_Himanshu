// src/components/Skills/Skills.jsx
// import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw]   font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="mt-4 text-base font-semibold text-gray-400 sm:text-lg">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:gap-8">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="w-full rounded-2xl border border-white bg-gray-900 px-4 py-7 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md sm:px-8"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
