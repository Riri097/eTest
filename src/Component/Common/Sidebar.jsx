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
        ? "bg-slate-900 text-white font-semibold shadow-lg"
        : "hover:bg-slate-100 text-slate-700 hover:text-slate-900"
    }`;

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      closeSidebar();
    }
  };

  return (
    <>
      <aside className="hidden lg:flex w-64 bg-blue-50 text-slate-700 min-h-screen border-r border-slate-200 flex-col shadow-xl">
        <Link
          to="/profile"
          className="px-6 py-5 border-b border-slate-200 flex items-center gap-3 bg-blue-100 hover:bg-blue-50 transition"
        >
          <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-lg truncate text-slate-900">
            {username || "User"}
          </span>
        </Link>

        <nav className="flex-1 flex flex-col mt-4 gap-1 px-2">
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

        <div className="p-4 border-t border-slate-200 mt-auto">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-md transition bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 border border-red-200 hover:border-red-300"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      <aside className={`fixed top-0 left-0 z-50 w-64 bg-white text-slate-700 h-full border-r border-slate-200 flex flex-col shadow-xl transform transition-transform duration-300 lg:hidden ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <Link
            to="/profile"
            className="flex items-center gap-3 hover:bg-slate-100 rounded-lg p-2 transition"
            onClick={handleLinkClick}
          >
            <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg truncate text-slate-900">
              {username || "User"}
            </span>
          </Link>
          
          <button
            onClick={closeSidebar}
            className="text-slate-500 hover:text-slate-900 transition-colors p-1"
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col mt-4 gap-1 px-2">
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

        <div className="p-4 border-t border-slate-200">
          <button
            onClick={() => {
              handleLogout();
              closeSidebar();
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-md transition bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 border border-red-200 hover:border-red-300"
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
