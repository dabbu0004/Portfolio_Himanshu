// import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="bg-skills-gradient px-4 py-16 pb-20 font-sans clip-path-custom-3 sm:px-6 sm:py-20 md:px-0  "
    >
      {/* Section Title */}
      <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="mt-4 text-base font-semibold text-gray-400 sm:text-lg">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute bottom-0 left-4 top-0 w-1 bg-white sm:left-1/2 sm:-translate-x-1/2"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative mb-10 flex flex-col items-stretch sm:mb-16 sm:flex-row sm:items-center ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-4 top-4 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#8245ec] bg-gray-400 sm:left-1/2 sm:top-auto sm:h-16 sm:w-16">
              <img
                src={edu.img}
                alt={edu.school}
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
                {/* School Logo/Image */}
                <div className="h-14 w-20 shrink-0 overflow-hidden rounded-md bg-white sm:h-16 sm:w-24">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
