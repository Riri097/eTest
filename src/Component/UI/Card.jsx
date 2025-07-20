import React from "react";

const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white border-1 border-[#0B1F3A] rounded-lg p-6 shadow-lg hover:shadow-2xl flex flex-col items-center text-center">
      {Icon && <Icon className="text-5xl mb-4 text-[#0B1F3A]" />}
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-[#0B1F3A]">{description}</p>
    </div>
  );
};

export default Card;
