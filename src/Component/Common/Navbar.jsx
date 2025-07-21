import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, LogIn, UserPlus, LogOut, Home, Sparkles, Info, Phone, UserCheck } from "lucide-react";
import GradientNavLink from "../UI/GradientNavlink";
import Button from "../UI/Button";

const Navbar = ({ isAuthenticated, handleLogout, openLoginModal, openSignupModal, toggleSidebar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-slate-900 via-gray-700 to-slate-900 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {isAuthenticated && (
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-white focus:outline-none mr-3"
              aria-label="Toggle sidebar"
            >
              <Menu size={24} />
            </button>
          )}
          
          <NavLink
            to="/"
            className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            VedantaQ
          </NavLink>

          <div className="hidden md:flex items-center space-x-6">
            {!isAuthenticated && (
              <>
                <GradientNavLink to="/" icon={Home} label="Home" />
                <GradientNavLink to="/features" icon={Sparkles} label="Features" />
                <GradientNavLink to="/about" icon={Info} label="About" />
                <GradientNavLink to="/contact" icon={Phone} label="Contact" />
                <GradientNavLink to="/guide" icon={UserCheck} label="Guide" />
              </>
            )}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {!isAuthenticated ? (
              <>
                <Button variant="secondary" onClick={openLoginModal}>
                  <LogIn size={16} className="inline mr-1" /> Login
                </Button>
                <Button variant="primary" onClick={openSignupModal} className="border border-white">
                  <UserPlus size={16} className="inline mr-1" /> Signup
                </Button>
              </>
            ) : (
              <Button variant="primary" onClick={handleLogout}>
                <LogOut size={16} className="inline mr-1" /> Logout
              </Button>
            )}
          </div>

          {!isAuthenticated && (
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0B1F3A] px-4 pb-4 flex flex-col gap-3 text-white">
            {!isAuthenticated ? (
              <>
                <GradientNavLink to="/" icon={Home} label="Home" onClick={() => setIsMenuOpen(false)} />
                <GradientNavLink to="/features" icon={Sparkles} label="Features" onClick={() => setIsMenuOpen(false)} />
                <GradientNavLink to="/about" icon={Info} label="About" onClick={() => setIsMenuOpen(false)} />
                <GradientNavLink to="/contact" icon={Phone} label="Contact" onClick={() => setIsMenuOpen(false)} />
                <GradientNavLink to="/guide" icon={UserCheck} label="Guide" onClick={() => setIsMenuOpen(false)} />

                <Button variant="secondary" onClick={() => { setIsMenuOpen(false); openLoginModal(); }}>
                  <LogIn size={16} className="inline mr-1" /> Login
                </Button>
                <Button variant="primary" onClick={() => { setIsMenuOpen(false); openSignupModal(); }}>
                  <UserPlus size={16} className="inline mr-1" /> Signup
                </Button>
              </>
            ) : (
              <Button variant="primary" onClick={() => { setIsMenuOpen(false); handleLogout(); }}>
                <LogOut size={16} className="inline mr-1" /> Logout
              </Button>
            )}
          </div>
        )}
      </nav>

      <div className="w-full h-[4px] bg-[#E7F2F8]"></div>
    </>
  );
};

export default Navbar;
