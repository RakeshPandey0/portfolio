import React from "react";
import { GraduationCap, Code, Brain, Trophy } from "lucide-react";
const page = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Computer Engineering graduate from Kantipur Engineering College with MERN stack training",
    },
    {
      icon: Code,
      title: "Development",
      description:
        "Full-stack web development with modern technologies like Next.js, React, and Node.js",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description:
        "Deep learning expertise with TensorFlow, achieving 96.12% accuracy in phishing detection",
    },
    {
      icon: Trophy,
      title: "Achievements",
      description:
        "Published researcher, coding competition winner, and active community member",
    },
  ];

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
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 mx-50 p-5">
        {highlights.map((highlight, index) => {
          return (
            <div key={index} className="rounded-lg flex flex-col items-center text-center bg-white p-7 m-2 shadow-md hover:shadow-xl transition duration-250">
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
