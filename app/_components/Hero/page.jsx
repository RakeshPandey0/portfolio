import React from "react";
import Email from "../ui/Email";
import Mobile from "../ui/Mobile";
import GitIcon from "../ui/GitIcon";
import LinkedinIcon from "../ui/LinkedinIcon";

export default function page() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Rakesh Pandey
          </h1>
          <h2 className="text-2xl text-gray-600 mt-2 p-2">
            Full-Stack Developer
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8 mt-3">
            Computer Engineering graduate with expertise in MERN stack, Next.js,
            and deep learning. Passionate about building innovative solutions
            that solve real-world problems.
          </p>
        </div>
        <div className="flex justify-center gap-4 items-center m-1 p-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 shadow-sm transition duration-200">
            Get In Touch
          </button>

          <button className="inline-block rounded-lg bg-white px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-black-3 border-1 border-gray-300 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 active:border-neutral-800">
            View Projects
          </button>
          <a
            href="https://github.com/RakeshPandey0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-block rounded-lg bg-white px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-black-3 border border-gray-300 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 active:border-neutral-800"
          >
            <GitIcon />
          </a>
          <a
            href="https://linkedin.com/in/rakeshpandey0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-block rounded-lg bg-white px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-black-3 border border-gray-300 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 active:border-neutral-800"
          >
            <LinkedinIcon />
          </a>
        </div>
        <div className="flex justify-center gap-5 m-2 p-1">
          <div>
            <Email email={"rp901522@gmail.com"} />
          </div>
          <div>
            <Mobile phone={"+977-9864315562"} />
          </div>
        </div>
      </div>
    </section>
  );
}
