// import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      
      <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="mt-4 text-base font-semibold text-gray-400 sm:text-lg">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      <div className="mt-4 w-full max-w-md rounded-lg border border-gray-700 bg-[#0d081f] p-4 shadow-lg sm:mt-8 sm:p-6">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        {/* Web3Forms automatically handles the submission and redirects to a success page */}
        <form action="https://api.web3forms.com/submit" method="POST" className="mt-4 flex flex-col space-y-4">
          
          {/* PASTE YOUR KEY HERE */}
          <input type="hidden" name="access_key" value="38044ff7-6d47-41a6-8709-3dc5dcfa3b02" />

          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
          <input type="text" name="subject" placeholder="Subject" required className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
          <textarea name="message" placeholder="Message" rows="4" required className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
          
          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;