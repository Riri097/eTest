import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 sm:py-12 border-t-2 border-gray-600 relative">
      <div className="absolute inset-0 bg-slate-900"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-blue-400">
              VedantaQ
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Empowering curious minds through smart learning and interactive quizzes.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-blue-400">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-blue-400 transition duration-300 text-sm">
                Home
              </a>
              <a href="/features" className="block text-gray-300 hover:text-blue-400 transition duration-300 text-sm">
                Features
              </a>
              <a href="/about" className="block text-gray-300 hover:text-blue-400 transition duration-300 text-sm">
                About
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-blue-400 transition duration-300 text-sm">
                Contact
              </a>
              <a href="/guide" className="block text-gray-300 hover:text-blue-400 transition duration-300 text-sm">
                Guide
              </a>
            </div>
          </div>

          <div className="text-center sm:text-center lg:text-right">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-blue-400">Support</h3>
            <div className="space-y-2">
              <a href="/guide" className="block text-gray-300 hover:text-blue-400 transition duration-300 text-sm">
                Guide
              </a>
              <a href="/privacy" className="block text-gray-300 hover:text-blue-400 transition duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="block text-gray-300 hover:text-blue-400 transition duration-300 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4 sm:pt-6 text-center">
          <p className="text-gray-400 text-xs sm:text-sm px-4">
            &copy; {new Date().getFullYear()} VedantaQ. All rights reserved. Made with love for learners worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
