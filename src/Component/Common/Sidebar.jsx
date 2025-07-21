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
import { Link } from "react-router-dom";

const Sidebar = ({ username }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-md transition ${
      isActive
        ? "bg-[#E7F2F8] font-semibold text-[#0B1F3A]"
        : "hover:bg-[#E7F2F8] text-[#0B1F3A]"
    }`;

  return (
    <aside className="w-64 bg-white text-[#0B1F3A] min-h-screen border-r border-[#E7F2F8] flex flex-col shadow-sm">
      {/* Header */}
      <Link
  to="/profile"
  className="px-6 py-5 border-b border-[#E7F2F8] flex items-center gap-3 bg-[#F8FBFC] hover:bg-[#E7F2F8] transition"
>
  <User className="w-6 h-6" />
  <span className="font-semibold text-lg truncate">
    {username || "User"}
  </span>
</Link>

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
    </aside>
  );
};

export default Sidebar;
