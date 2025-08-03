import React from "react";

const TechnologyBadge = ({ tech}) => {
  return (
    <div className="border-1 border-gray-300 shadow-lg p-1.5 items-center bg-gray-100 rounded-xl">
        <p className="text-gray-800 text-xs font-bold text-nowrap">{tech}</p>
    </div>
  );
};

export default TechnologyBadge;
