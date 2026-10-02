import React from "react";

const TechnologyBadge = ({ tech }) => {
  return (
    <div className="border-1 border-gray-300 dark:border-slate-600 shadow-lg dark:shadow-none p-1.5 items-center bg-gray-100 dark:bg-slate-700 rounded-xl">
      <p className="text-gray-800 dark:text-gray-200 text-xs font-bold text-nowrap">{tech}</p>
    </div>
  );
};

export default TechnologyBadge;
