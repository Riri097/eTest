const Footer = () => {
  return (
    <footer className="bg-[#344C3D] text-white py-10 mt-2">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-1">VedantaQ</h1>
            <p className="text-[#BFCFBB] text-sm">
              &copy; {new Date().getFullYear()} VedantaQ. All rights reserved.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-[#BFCFBB] hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms" className="text-[#BFCFBB] hover:text-white transition">
              Terms of Use
            </a>
            <a href="/contact" className="text-[#BFCFBB] hover:text-white transition">
              Contact Us
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-8 border-t border-[#BFCFBB] pt-4">
          <p className="text-[#BFCFBB] text-sm">
            Made with ❤️ to empower curious minds through smart learning.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
