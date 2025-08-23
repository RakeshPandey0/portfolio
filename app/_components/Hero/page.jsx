"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Email from "../ui/Email";
import Mobile from "../ui/Mobile";
import GitIcon from "../ui/GitIcon";
import LinkedinIcon from "../ui/LinkedinIcon";
import profileImage from "@/public/profile-image.png";

export default function page() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto lg:text-left">
        <motion.div
          className="flex-shrink-0 relative rounded-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={profileImage}
            alt="Rakesh Pandey"
            width={400} 
            height={400} 
            className="rounded-full shadow-lg filter saturate-100 brightness-105 contrast-95 opacity-100" 
            priority={true}
          />
          <div className="absolute inset-0 bg-white opacity-10 rounded-full mix-blend-overlay"></div>
        </motion.div>
        
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Rakesh Pandey
          </h1>
          <h2 className="text-2xl text-gray-600 mt-2 p-2">
            Full-Stack Developer
          </h2>
          <p className="text-lg text-gray-500 mb-8 mt-3">
            Computer Engineering graduate with expertise in MERN stack, Next.js,
            and deep learning. Passionate about building innovative solutions
            that solve real-world problems.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 m-1 p-2">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 shadow-sm transition duration-200">
              Get In Touch
            </button>
            <button className="inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium uppercase leading-normal text-gray-600 border border-gray-300 transition duration-150 ease-in-out hover:bg-gray-100 shadow-sm">
              View Projects
            </button>
            <a
              href="https://github.com/RakeshPandey0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-block rounded-lg bg-white px-3 py-2 text-xs font-medium uppercase leading-normal text-gray-600 border border-gray-300 transition duration-150 ease-in-out hover:bg-gray-100 shadow-sm"
            >
              <GitIcon />
            </a>
            <a
              href="https://linkedin.com/in/rakeshpandey0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-block rounded-lg bg-white px-3 py-2 text-xs font-medium uppercase leading-normal text-gray-600 border border-gray-300 transition duration-150 ease-in-out hover:bg-gray-100 shadow-sm"
            >
              <LinkedinIcon />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 m-2 p-1">
            <div>
              <Email email={"rp901522@gmail.com"} />
            </div>
            <div>
              <Mobile phone={"+977-9864315562"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}