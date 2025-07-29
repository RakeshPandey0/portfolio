import React from "react";

const TechnologyBadge = ({ tech}) => {
  return (
    <div className="border-0 shadow-lg p-1.5 items-center bg-gray-200 rounded-xl">
        <p className="text-gray-900 text-xs font-bold text-nowrap">{tech}</p>
    </div>
  );
};

export default TechnologyBadge;
