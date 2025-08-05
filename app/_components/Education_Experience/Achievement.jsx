import React from 'react'
import { Award} from 'lucide-react';
const Achievement = () => {
  const achievements = [
    {
      title: "IEEE Xtreme 2024",
      description: "23rd position in Nepal in 24-hour global coding competition",
      icon: Award,
    },
    {
      title: "Rapid Coding Competition - Aarohan 2.0",
      description: "3rd Position in paired programming DSA competition",
      icon: Award,
    },
    {
      title: "KEC LITE DSA Competition",
      description: "Winner of Data Structures and Algorithms Competition",
      icon: Award,
    },
    {
      title: "KEC Hack-a-Lite",
      description: "Built Quick-Dine system in 32-hour hackathon",
      icon: Award,
    },
  ]
  return (
    <div id="education" className="flex flex-col">
      <h2 className="px-6 text-2xl font-bold mb-2">Achievements</h2>
      {achievements.map((achievement, index) => {
        return (
          // Education Card
          <div
            id="card"
            key={index}
            className="rounded-lg flex flex-col bg-white p-4 my-3 shadow-md hover:shadow-lg transition-all duration-250"
          >
            {/* Education Card Header */}
            <div id="card-header" className="flex flex-row mb-3">
              <achievement.icon className=" mb-4 border-gray-500 p-2 text-amber-800 rounded-lg bg-yellow-100 mx-2 size-10" />
              <div className="flex flex-col flex-wrap gap-1 justify-center">
                <h3 className=" text-xl font-semibold mt-2">{achievement.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Achievement