import React from "react";
import { Users } from "lucide-react";
import { involvement } from "@/app/assets/involvement";

const Community = () => {
  return (
    <div id="community" className="flex flex-col p-4">
      {/* Container to center content on large screens */}
      <div className="mx-auto max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Community</h2>
        {involvement.map((club, index) => {
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
                <Users className="flex-shrink-0 border-gray-500 p-2 text-purple-600 rounded-lg bg-purple-100 size-10" />
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-semibold">{club.title}</h3>
                  {/* Container for role and period */}
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-md font-black text-purple-700">
                      {club.role}
                    </p>
                    <p className="text-xs text-gray-700 font-black">
                      {club.period}
                    </p>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    {club.description}
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

export default Community;