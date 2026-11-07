// import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[9vw]  font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row lg:gap-16">
        {/* Left Side */}
        <div className="mt-4 w-full text-center md:mt-0 md:w-1/2 md:text-left">
          {/* Greeting */}
          <h1 className="mb-2 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Himanshu
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="mb-4 text-lg font-semibold leading-tight text-[#8245ec] sm:text-2xl md:text-3xl">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Web Developer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={70}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="mb-5 mt-6 text-base leading-relaxed text-gray-400 sm:text-lg md:mt-8">
          Full-Stack AI Engineer who builds production web applications with React, Next.js, and Node.js and integrates AI into
them using Python. Experience with LLMs, prompt engineering, RAG, and LangChain, plus computer vision ,speaker
recognition (dlib, scikit-learn) and Data Visualization . Strong at taking features from idea to deployment, with clean REST
APIs and databases. Adept at solving complex client requirements with strong business acumen and collaboration skills
          </p>
<span className="text-base font-extrabold text-transparent bg-clip-text  bg-gradient-to-r from-fuchsia-500 to-orange-500 animate-pulse sm:text-xl">
  Successfully shipped 25+ production projects 
</span>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/18HAuMj9rjPWfcU7hYbU7wCeyRAESHIeI/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-full px-6 py-3 text-base font-bold text-white transition duration-300 transform hover:scale-105 sm:px-8 sm:text-lg"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="flex w-full justify-center md:w-1/2 md:justify-end">
          <Tilt
            className="h-[min(78vw,30rem)] w-[min(78vw,30rem)] max-h-[30rem] max-w-[30rem] rounded-full border-4 border-purple-700"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Himanshu"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
