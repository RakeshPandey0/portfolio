import React from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      title: "Bachelor in Computer Engineering",
      institution: "Kantipur Engineering College",
      location: "Dhapakhel, Lalitpur",
      period: "2021-2025",
      icon: GraduationCap,
    },
    {
      title: "MERN Stack Training",
      institution: "Broadway Infosys",
      location: "Tinkune, Kathmandu",
      period: "2024-2025",
      icon: BookOpen,
    },
  ];
  return (
    <div id="education" className="flex flex-col">
      <h2 className="px-6 text-2xl font-bold mb-2">Education</h2>
      {education.map((level, index) => {
        return (
          // Education Card
          <div
            id="card"
            key={index}
            className="rounded-lg flex flex-col bg-white p-4 my-3 shadow-md hover:shadow-lg transition-all duration-250"
          >
            {/* Education Card Header */}
            <div id="card-header" className="flex flex-row mb-3">
              <level.icon className=" mb-4 border-gray-500 p-2 text-emerald-700 rounded-lg bg-emerald-100 mx-2 size-10" />
              <div className="flex flex-col gap-1 justify-center">
                <h3 className=" text-xl font-semibold mt-2">{level.title}</h3>
                <p className=" text-md text-emerald-700 font-semibold mt-1">{level.institution}</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {level.location}
                </p>
                <div className="text-sm font-bold ml-2">
                  {level.period}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
