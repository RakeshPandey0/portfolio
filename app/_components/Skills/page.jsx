import React from "react";
import TechnologyBadge from "../ui/TechnologyBadge";
import { technicalSkills } from "@/app/assets/technicalSkills";
const page = () => {

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="flex justify-center text-4xl font-bold text-gray-900 mb-4">
          Technical Skills
        </h2>
        <p className="text-center text-lg text-gray-500 max-w-3xl mx-auto mb-8 mt-3">
          A comprehensive toolkit spanning full-stack web development, machine
          learning, and modern development practices.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-50 p-5">
        {technicalSkills.map((field, index) => {
          return (
            <div
              key={index}
              className="rounded-lg flex flex-col text-center bg-white p-7 m-2 shadow-md hover:shadow-xl transition duration-250"
            >
              <div className="flex items-center justify-start mb-5">
                <field.icon className="border-gray-500 p-2 text-emerald-600 rounded-lg bg-emerald-100 mx-2 size-11" />
              <h3 className="text-xl font-semibold">{field.title}</h3>
              </div>

                <div id="card-tech" className="space-y-1 ml-3">
                  <div className="flex flex-wrap gap-3">
                    {field.skills.map((skill, index) => {
                      return (
                        <div key={`skill-${index}`}>
                          <TechnologyBadge tech={skill} index={index} />
                        </div>
                      );
                    })}
                  </div>
                </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default page;
