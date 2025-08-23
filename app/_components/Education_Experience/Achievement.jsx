import React from "react";
import { achievements } from "@/app/assets/achievements";

const Achievement = () => {
  return (
    <div id="education" className="flex flex-col p-4">
      {/* Container to center content on large screens */}
      <div className="mx-auto max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Achievements</h2>
        {achievements.map((achievement, index) => {
          return (
            // Education Card
            <div
              id="card"
              key={index}
              className="rounded-lg flex flex-col bg-white p-4 my-3 shadow-md hover:shadow-lg transition-all duration-250"
            >
              {/* Education Card Header */}
              <div
                id="card-header"
                className="flex flex-row items-start gap-4 mb-1"
              >
                {/* Icon is flex-shrink-0 to prevent it from shrinking on smaller screens */}
                <achievement.icon className="flex-shrink-0 border-gray-500 p-2 text-amber-800 rounded-lg bg-yellow-100 size-10" />
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-semibold">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievement;