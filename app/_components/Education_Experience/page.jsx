import React from "react";
import Education from "./Education";
import Achievement from "./Achievement";
import Community from "./Community";
const page = () => {
  return (
    <section
      id="education-expreience"
      // Adjusted padding for better responsiveness
      className="py-16 px-4 bg-gradient-to-br from-slate-50 to-gray-100"
    >
      {/* Replaced invalid classes with a standard responsive container */}
      <div className="w-full max-w-7xl mx-auto">
        <div
          id="header"
          className="flex flex-col justify-center items-center text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Education & Experience
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8 mt-3">
            My academic journey, achievements, and community involvement that
            shaped my technical expertise.
          </p>
        </div>
        {/* Main responsive grid layout for the three components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <Education />
          <Achievement />
          <Community />
        </div>
      </div>
    </section>
  );
};

export default page;