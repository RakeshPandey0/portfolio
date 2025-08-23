import React from "react";
import { education } from "@/app/assets/education";

const Education = () => {
  return (
    <div id="education" className="flex flex-col p-4">
      {/* Container to center content on large screens */}
      <div className="mx-auto max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Education</h2>
        {education.map((level, index) => {
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
                {/* Icon is flex-shrink-0 to prevent it from shrinking */}
                <level.icon className="flex-shrink-0 border-gray-500 p-2 text-emerald-700 rounded-lg bg-emerald-100 size-10" />
                <div className="flex flex-col gap-1 justify-center">
                  <h3 className="text-xl font-semibold">{level.title}</h3>
                  <p className="text-md text-emerald-700 font-semibold mt-1">
                    {level.institution}
                  </p>
                  {/* Container for location and period, allowing them to wrap */}
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
                    <p>{level.location}</p>
                    <p className="font-bold">{level.period}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;