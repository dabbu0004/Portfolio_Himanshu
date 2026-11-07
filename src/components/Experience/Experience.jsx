// import React from "react"
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-0.5 font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="mt-4 text-base font-semibold text-gray-400 sm:text-lg">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute bottom-0 left-4 top-0 w-1 bg-white sm:left-1/2 sm:-translate-x-1/2"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative mb-10 flex flex-col items-stretch sm:mb-16 sm:flex-row sm:items-center ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-4 top-4 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#8245ec] bg-gray-400 sm:left-1/2 sm:top-auto sm:h-16 sm:w-16">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full rounded-2xl border border-white bg-gray-900 p-4 shadow-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md sm:max-w-md sm:p-8 ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } ml-8 transform transition-transform duration-300 hover:scale-[1.02] sm:ml-44 sm:mr-44`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center gap-4 sm:gap-6">
                {/* Company Logo/Image */}
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-md bg-white sm:h-16 sm:w-16">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-2xl">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">
                    {experience.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2 mb-4">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                {experience.certificateLink && (
                  <a
                    href={experience.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 mt-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 text-sm"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
