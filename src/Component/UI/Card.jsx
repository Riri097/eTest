import React from "react";

const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-pink-400/10 backdrop-blur-md rounded-xl p-6 border border-pink-300/30 group cursor-pointer shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="text-pink-100 text-2xl" />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
