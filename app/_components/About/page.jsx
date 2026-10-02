import React from "react";
import { highlights } from "@/app/assets/highlights";
const page = () => {
  return (
    <section id="about-me" className="py-20 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="flex justify-center text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          About Me
        </h2>
        <p className="text-center text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-8 mt-3">
          I&apos;m a Computer Engineering graduate and full-stack developer with a
          growing focus on digital health. I enjoy building systems that make a
          real impact, from health information and social protection platforms
          to restaurant management tools and AI-powered research projects.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto max-w-6xl p-5">
        {highlights.map((highlight, index) => {
          return (
            <div
              key={index}
              className="rounded-lg flex flex-col items-center text-center bg-white dark:bg-slate-800 p-7 m-2 shadow-md hover:shadow-xl transition duration-250"
            >
              <highlight.icon className="mb-4 border-gray-500 p-2 text-emerald-600 dark:text-emerald-400 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 mx-2 size-11" />
              <h3 className="text-xl font-semibold">{highlight.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{highlight.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default page;