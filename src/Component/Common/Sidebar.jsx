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
} from "lucide-react";

const Sidebar = ({ username }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-md hover:bg-[#BFCFBB] transition ${
      isActive ? "bg-[#BFCFBB] font-semibold" : "font-normal"
    }`;

  return (
    <aside className="w-64 bg-white text-[#344C3D] min-h-screen border-r border-[#BFCFBB]/50 flex flex-col">
      {/* Header */}
      <div className="px-6 py-5 border-b border-[#BFCFBB]/40 flex items-center gap-3">
        <User className="w-6 h-6" />
        <span className="font-semibold text-lg truncate">{username || "User"}</span>
      </div>

      {/* Navigation Links */}
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

        <NavLink to="/plans" className={linkClass}>
          <CreditCard className="w-5 h-5" />
          Plans
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
    </aside>
  );
};

export default Sidebar;
