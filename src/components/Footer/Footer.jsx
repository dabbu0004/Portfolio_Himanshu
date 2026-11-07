// import React from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Himanshu</h2>

        {/* Navigation Links - Responsive */}
        <nav className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 sm:gap-x-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        {/* <div className="mt-6 flex flex-wrap justify-center gap-4">
          {[
            { icon: <FaFacebook />, link: "" },
            { icon: <FaTwitter />, link: "" },
            { icon: <FaLinkedin />, link: "" },
            { icon: <FaInstagram />, link: "" },
            { icon: <FaYoutube />, link: "" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div> */}

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2026 Himanshu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
