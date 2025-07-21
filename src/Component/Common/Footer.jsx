import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 text-white py-12 border-t-2 border-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              VedantaQ
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering curious minds through smart learning and interactive quizzes.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-purple-400 transition duration-300">
                Home
              </a>
              <a href="/features" className="block text-gray-300 hover:text-purple-400 transition duration-300">
                Features
              </a>
              <a href="/about" className="block text-gray-300 hover:text-purple-400 transition duration-300">
                About
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-purple-400 transition duration-300">
                Contact
              </a>
              <a href="/guide" className="block text-gray-300 hover:text-purple-400 transition duration-300">
                Guide
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Support</h3>
            <div className="space-y-2">
              <a href="/guide" className="block text-gray-300 hover:text-purple-400 transition duration-300">
                Guide
              </a>
              <a href="/privacy" className="block text-gray-300 hover:text-purple-400 transition duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="block text-gray-300 hover:text-purple-400 transition duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} VedantaQ. All rights reserved. Made with love for learners worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
