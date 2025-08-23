import React from "react";
import { highlights } from "@/app/assets/highlights";
const page = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="flex justify-center text-4xl font-bold text-gray-900 mb-4">
          About Me
        </h2>
        <p className="text-center text-lg text-gray-500 max-w-3xl mx-auto mb-8 mt-3">
          I'm a passionate Computer Engineering graduate with hands-on
          experience in full-stack web development and machine learning. I love
          building innovative solutions that make a real impact, from restaurant
          management systems to AI-powered tools.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto max-w-6xl p-5">
        {highlights.map((highlight, index) => {
          return (
            <div
              key={index}
              className="rounded-lg flex flex-col items-center text-center bg-white p-7 m-2 shadow-md hover:shadow-xl transition duration-250"
            >
              <highlight.icon className=" mb-4 border-gray-500 p-2 text-emerald-600 rounded-lg bg-emerald-100 mx-2 size-11" />
              <h3 className="text-xl font-semibold">{highlight.title}</h3>
              <p className="text-sm text-gray-600">{highlight.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default page;