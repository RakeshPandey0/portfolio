import React from "react";
import { Link2Icon } from "lucide-react";
import TechnologyBadge from "../ui/TechnologyBadge";
import GitIcon from "../ui/GitIcon";
import { projects } from "@/app/assets/projects";

const page = () => {
  return (
    <section
      id="project"
      // Adjusted padding for better responsiveness
      className="py-16 px-4 bg-gradient-to-br from-slate-50 to-gray-100"
    >
      {/* Replaced invalid classes with a standard responsive container */}
      <div className="w-full max-w-7xl mx-auto">
        <div
          id="header"
          className="flex flex-col justify-center items-center text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8 mt-3">
            A collection of projects showcasing my expertise in full-stack
            development, machine learning, and problem-solving across various
            domains.
          </p>
        </div>

        {/* Projects Grid - Now fully responsive */}
        <div
          id="projects"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            return (
              // Project Card
              <div
                id="card"
                key={index}
                // Removed fixed margins to let grid gap handle spacing
                className="rounded-xl flex flex-col bg-white p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-250"
              >
                {/* Project Card Header */}
                <div id="card-header" className="mb-4">
                  <div className="flex items-start gap-4">
                    {/* Added flex-shrink-0 to prevent icon from shrinking */}
                    <project.icon className="flex-shrink-0 p-2 text-emerald-600 rounded-lg bg-emerald-100 size-11" />
                    <h3 className="text-xl font-semibold mt-2">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mt-2">
                    {project.description}
                  </p>
                </div>

                {/* Project Card Technologies */}
                <div id="card-tech" className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => {
                      return (
                        <div key={`tech-${index}`}>
                          <TechnologyBadge tech={tech} index={index} />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Project Card Highlights */}
                <div id="card-highlights" className="mb-4">
                  {project.highlights.map((highlight, index) => {
                    return (
                      <div key={index} className="flex gap-2 items-start">
                        <span className="inline-block flex-shrink-0 w-1.5 h-1.5 bg-green-400 rounded-full mt-2" />
                        <div className="text-sm text-gray-600">{highlight}</div>
                      </div>
                    );
                  })}
                </div>
                {/* Link buttons container, using justify-start */}
                <div className="flex flex-wrap gap-4 mt-auto">
                  {/* Code Button - Cleaned up classes */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium leading-normal text-gray-600 border border-gray-300 transition-all duration-150 hover:bg-gray-100 shadow-sm"
                  >
                    <GitIcon className="size-4" />
                    Code
                  </a>
                  {/* Demo Button - Cleaned up classes */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium leading-normal text-gray-600 border border-gray-300 transition-all duration-150 hover:bg-gray-100 shadow-sm"
                  >
                    <Link2Icon className="size-4" />
                    Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;