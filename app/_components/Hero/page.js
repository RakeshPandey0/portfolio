import React from "react";
export default function page() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Rakesh Pandey
          </h1>
          <h2 className="text-3xl text-gray-500 mt-2 p-2">
            Full-Stack Developer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 mt-3">
            Computer Engineering graduate with expertise in MERN stack, Next.js,
            and deep learning. Passionate about building innovative solutions
            that solve real-world problems.
          </p>
        </div>
        <div className="flex justify-center gap-4 items-center m-1 p-2">
          <button className="inline-flex px-2 py-2 bg-emerald-600 text-white text-sx rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-200">
            Get In Touch
            <svg
              className="w-4 h-6 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <button className="inline-block rounded-lg bg-neutral-100 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-black-3 border-1 border-gray-300 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 active:border-neutral-800">
            View Projects
          </button>
          <button className="inline-block rounded-lg bg-neutral-100 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-black-3 border-1 border-gray-300 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 active:border-neutral-800">
            Github
          </button>
          <button className="inline-block rounded-lg bg-neutral-100 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-black-3 border-1 border-gray-300 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 active:border-neutral-800">
            Linkedin
          </button>
        </div>
        <div className="flex justify-center gap-6 m-2 p-2">
          <div>
            <button className="text-gray-600">rp901522@gmail.com</button>
          </div>
          <div>
            <button className="text-gray-600">+977-9864315562</button>
          </div>
        </div>
      </div>
    </section>
  );
}
