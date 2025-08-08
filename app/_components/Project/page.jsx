import React from "react";
// import ProjectCard from "./ProjectCard";
import { Utensils, Link, FileText, Link2Icon, Book } from "lucide-react";
import TechnologyBadge from "../ui/TechnologyBadge";
import GitIcon from "../ui/GitIcon";

const page = () => {
  const projects = [
    {
      title: "Minechant",
      description:
        "A web application that calculates the optimal enchantment order for Minecraft items.",
      icon: Book,
      technologies: ["Next,js", "Redux Toolkit", "GROQ", "TailwindCSS"],
      highlights: [
        "Item based enchantment selection.",
        "Item, enchantment and enchantment order state stored using Redux.",
        "Responsive UI and seamless user interaction.",
      ],
      github: "https://github.com/RakeshPandey0/Minechant",
      demo: "https://minechant.vercel.app",
    },
    {
      title: "Quick-Dine",
      description:
        "QR-based order management system for restaurants. Customers can scan QR codes to view menus, place orders, and handle billing seamlessly.",
      icon: Utensils,
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Git"],
      highlights: ["QR-based ordering", "Real-time updates", "Secure backend"],
      github: "https://github.com/RakeshPandey0/QuickDine",
      demo: "https://quickdine.vercel.app/",
    },
    {
      title: "SnapLink",
      description:
        "URL shortener service with JWT-based authentication. Built with Node.js and MongoDB for efficient URL mapping and retrieval.",
      icon: Link,
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      highlights: ["JWT authentication", "URL mapping", "Dynamic rendering"],
      github: "https://github.com/RakeshPandey0/SnapLink",
      demo: "https://snaplink-mj5h.onrender.com/",
    },
    {
      title: "Postly",
      description:
        "Blog application with server-side rendering using EJS templating engine. Features image upload capabilities with Multer.",
      icon: FileText,
      technologies: ["Node.js", "Express", "MongoDB", "EJS"],
      highlights: ["Server-side rendering", "Image upload", "Blog management"],
      github: "https://github.com/RakeshPandey0/Postly",
      demo: "https://postly-qgtq.onrender.com/",
    },
  ];

  return (
    <section
      id="project"
      className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100"
    >
      <div className="max-w-max px-20 mx-18">
        <div
          id="header"
          className="flex flex-col justify-center items-center text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8 mt-3">
            A collection of projects showcasing my expertise in full-stack
            development, machine learning, and problem-solving across various
            domains.
          </p>
        </div>

        {/* Projects Section */}
        <div
          id="projects"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-2 py-6 px-7 rounded-xl mx-10"
        >
          {projects.map((project, index) => {
            return (
              // Project Card
              <div
                id="card"
                key={index}
                className="rounded-lg flex flex-col bg-white px-8 py-6 m-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-250"
              >
                {/* Project Card Header */}
                <div id="card-header" className="mb-2">
                  <div className="flex flex-wrap gap-2">
                    <project.icon className=" mb-4 border-gray-500 p-2 text-emerald-600 rounded-lg bg-emerald-100 mx-2 size-11" />
                    <h3 className=" text-xl font-semibold mt-2">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Card Technologies */}
                <div id="card-tech" className="space-y-2 mb-2 ml-3">
                  <div className="flex flex-wrap gap-3">
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
                <div id="card-highlights" className="my-4">
                  {project.highlights.map((highlight, index) => {
                    return (
                      <div key={index} className="flex gap-2">
                        <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full items-center mt-2" />
                        <div className="text-sm text-gray-600">{highlight}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-4 items-center p-2">
                  {/* Code */}
                  <button className="gap-2 rounded-lg bg-white px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-black-3 border-1 border-gray-300 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 active:border-neutral-800">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex gap-2"
                    >
                      <GitIcon />
                      <p className="text-md text-black font-bold">Code</p>
                    </a>
                  </button>
                  {/* Demo */}
                  <button className="gap-2 rounded-lg bg-white px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-black-3 border-1 border-gray-300 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 active:border-neutral-800">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex gap-2"
                    >
                      <Link2Icon size={15} color="black" />
                      <p className="text-md text-black font-bold">Demo</p>
                    </a>
                  </button>
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
