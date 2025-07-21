import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  BookOpen,
  ClipboardList,
  CheckSquare,
  User,
  CreditCard,
  HelpCircle,
  Settings,
  X,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = ({ username, sidebarOpen, closeSidebar, handleLogout }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-md transition ${
      isActive
        ? "bg-white/20 backdrop-blur-sm font-semibold text-purple-300 shadow-lg"
        : "hover:bg-white/10 text-gray-300 hover:text-white"
    }`;

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      closeSidebar();
    }
  };

  return (
    <>
      <aside className="hidden lg:flex w-64 bg-gradient-to-b from-slate-900 via-gray-800 to-slate-900 text-white min-h-screen border-r border-white/10 flex-col shadow-xl">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 -left-20 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl"></div>
        </div>
        
        <Link
          to="/profile"
          className="relative z-10 px-6 py-5 border-b border-white/10 flex items-center gap-3 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-lg truncate bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            {username || "User"}
          </span>
        </Link>

        <nav className="relative z-10 flex-1 flex flex-col mt-4 gap-1 px-2">
          <NavLink to="/dashboard" className={linkClass}>
            <Home className="w-5 h-5" />
            Dashboard
          </NavLink>

          <NavLink to="/tutorial" className={linkClass}>
            <BookOpen className="w-5 h-5" />
            Tutorials
          </NavLink>

          <NavLink to="/exam" className={linkClass}>
            <ClipboardList className="w-5 h-5" />
            Exams
          </NavLink>

          <NavLink to="/results" className={linkClass}>
            <CheckSquare className="w-5 h-5" />
            Results
          </NavLink>

          <NavLink to="/courses" className={linkClass}>
            <CreditCard className="w-5 h-5" />
            Courses
          </NavLink>

          <NavLink to="/support" className={linkClass}>
            <HelpCircle className="w-5 h-5" />
            Support
          </NavLink>

          <NavLink to="/settings" className={linkClass}>
            <Settings className="w-5 h-5" />
            Settings
          </NavLink>
        </nav>

        <div className="relative z-10 p-4 border-t border-white/10 mt-auto">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-md transition bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 border border-red-500/30 hover:border-red-400/50"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      <aside className={`fixed top-0 left-0 z-50 w-64 bg-gradient-to-b from-slate-900 via-gray-800 to-slate-900 text-white h-full border-r border-white/10 flex flex-col shadow-xl transform transition-transform duration-300 lg:hidden ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 -left-20 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative z-10 px-6 py-5 border-b border-white/10 flex items-center justify-between bg-white/5 backdrop-blur-sm">
          <Link
            to="/profile"
            className="flex items-center gap-3 hover:bg-white/10 rounded-lg p-2 transition"
            onClick={handleLinkClick}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg truncate bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              {username || "User"}
            </span>
          </Link>
          
          <button
            onClick={closeSidebar}
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="relative z-10 flex-1 flex flex-col mt-4 gap-1 px-2">
          <NavLink to="/dashboard" className={linkClass} onClick={handleLinkClick}>
            <Home className="w-5 h-5" />
            Dashboard
          </NavLink>

          <NavLink to="/tutorial" className={linkClass} onClick={handleLinkClick}>
            <BookOpen className="w-5 h-5" />
            Tutorials
          </NavLink>

          <NavLink to="/exam" className={linkClass} onClick={handleLinkClick}>
            <ClipboardList className="w-5 h-5" />
            Exams
          </NavLink>

          <NavLink to="/results" className={linkClass} onClick={handleLinkClick}>
            <CheckSquare className="w-5 h-5" />
            Results
          </NavLink>

          <NavLink to="/courses" className={linkClass} onClick={handleLinkClick}>
            <CreditCard className="w-5 h-5" />
            Courses
          </NavLink>

          <NavLink to="/support" className={linkClass} onClick={handleLinkClick}>
            <HelpCircle className="w-5 h-5" />
            Support
          </NavLink>

          <NavLink to="/settings" className={linkClass} onClick={handleLinkClick}>
            <Settings className="w-5 h-5" />
            Settings
          </NavLink>
        </nav>

        <div className="relative z-10 p-4 border-t border-white/10">
          <button
            onClick={() => {
              handleLogout();
              closeSidebar();
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-md transition bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 border border-red-500/30 hover:border-red-400/50"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
