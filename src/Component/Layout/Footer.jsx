const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold text-slate-300 mb-2">ExamEra</div>
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} ExamEra. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-300 hover:text-white text-sm">
              Privacy
            </a>
            <a href="/terms" className="text-gray-300 hover:text-white text-sm">
              Terms
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white text-sm">
              Contact
            </a>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-6 pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            Made with ❤️ for students worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
