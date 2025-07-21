import React from "react";
import { NavLink } from "react-router-dom";

const GradientNavlink = ({ to, icon: Icon, label, onClick }) => (
  <NavLink to={to} end>
    {({ isActive }) => (
      <div
        onClick={onClick}
        className={`flex items-center gap-1 font-semibold cursor-pointer group ${
          isActive ? "text-white underline decoration-2 decoration-purple-400" : "text-white hover:text-purple-300 transition-colors"
        }`}
      >
        <Icon size={16} className={`${isActive ? "text-purple-500 " : "text-white group-hover:text-purple-500"} flex-shrink-0 transition-colors`} />
        <span
          className={
            isActive
              ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
              : ""
          }
        >
          {label}
        </span>
      </div>
    )}
  </NavLink>
);

export default GradientNavlink;
