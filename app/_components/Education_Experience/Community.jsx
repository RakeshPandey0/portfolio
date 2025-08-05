import React from "react";
import { Users } from "lucide-react";
const Community = () => {
  const involvement = [
    {
      title: "CFC (Code For Change) Kathmandu",
      role: "Member",
      period: "23.24 tenure",
      description:
        "Collaborated on community tech projects focused on social impact",
    },
    {
      title: "KEC Computer Club",
      role: "Wing Member",
      period: "College tenure",
      description:
        "Organized events, workshops, and mentored in technical training sessions",
    },
    {
      title: "Notion at KEC",
      role: "Community Member",
      period: "College tenure",
      description:
        "Promoted efficient knowledge management and collaboration using Notion",
    },
  ];
  return (
    <div id="community" className="flex flex-col mr-5">
      <h2 className="px-6 text-2xl font-bold mb-2">Community</h2>
      {involvement.map((club, index) => {
        return (
          // Education Card
          <div
            id="card"
            key={index}
            className="rounded-lg flex flex-col bg-white p-4 my-3 shadow-md hover:shadow-lg transition-all duration-250"
          >
            {/* Education Card Header */}
            <div id="card-header" className="flex flex-row mb-3">
              <Users className=" mb-4 border-gray-500 p-2 text-purple-600 rounded-lg bg-purple-100 mx-2 size-10" />
              <div className="flex flex-col flex-wrap gap-1 justify-center">
                <h3 className=" text-xl font-semibold mt-2">{club.title}</h3>
                <div className="flex items-center content-centerx">
                  <p className="text-md font-black text-purple-700 leading-relaxed">
                  {club.role}
                </p>
                <p className="text-xs text-gray-700 leading-relaxed ml-5 mt-0.5 font-black">
                  {club.period}
                </p>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {club.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Community;
