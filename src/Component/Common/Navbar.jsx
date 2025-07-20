import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "../UI/Button"; // Adjust the path if needed

const Navbar = ({ isAuthenticated, handleLogout, openLoginModal, openSignupModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Class for active / inactive NavLink styling
  const navLinkClass = ({ isActive }) =>
    isActive ? "text-white font-semibold underline" : "text-white hover:underline";

  return (
    <>
      <nav className="bg-[#344C3D] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-white">
            VedantaQ
          </NavLink>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Show these links only if NOT logged in */}
            {!isAuthenticated && (
              <>
                <NavLink to="/" className={navLinkClass}>Home</NavLink>
                <NavLink to="/features" className={navLinkClass}>Features</NavLink>
                <NavLink to="/about" className={navLinkClass}>About</NavLink>
                <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
              </>
            )}
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center gap-4">
            {!isAuthenticated ? (
              <>
                <Button variant="secondary" onClick={openLoginModal}>Login</Button>
                <Button variant="primary" onClick={openSignupModal} className="border border-white">Signup</Button>
              </>
            ) : (
              <Button variant="primary" onClick={handleLogout}>Logout</Button>
            )}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#BFCFBB] px-4 pb-4 flex flex-col gap-3 text-white">
            {!isAuthenticated ? (
              <>
                {/* Navigation links */}
                <NavLink to="/" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                <NavLink to="/features" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Features</NavLink>
                <NavLink to="/about" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>About</NavLink>
                <NavLink to="/contact" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>

                {/* Auth buttons */}
                <Button variant="secondary" onClick={() => { setIsMenuOpen(false); openLoginModal(); }}>Login</Button>
                <Button variant="primary" onClick={() => { setIsMenuOpen(false); openSignupModal(); }}>Signup</Button>
              </>
            ) : (
              <>
                <Button variant="primary" onClick={() => { setIsMenuOpen(false); handleLogout(); }}>Logout</Button>
              </>
            )}
          </div>
        )}
      </nav>

      {/* Bottom border */}
      <div className="w-full h-[4px] bg-[#BFCFBB]"></div>
    </>
  );
};

export default Navbar;
