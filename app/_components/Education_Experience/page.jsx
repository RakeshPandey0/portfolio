import React from "react";
import Education from "./Education";
import Achievement from "./Achievement";
import Community from "./Community";
const page = () => {

  return (
    <section
      id="education-expreience"
      className="p-20 bg-gradient-to-br from-slate-50 to-gray-100"
    >

      <div className="max-w-max px-30 mx-20">
        <div
          id="header"
          className="flex flex-col justify-center items-center text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Education & Experience
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8 mt-3">
            My academic journey, achievements, and community involvement that
            shaped my technical expertise.
          </p>
        </div>
        <div className="flex flex-row justify-center gap-6 mt-10">
        <Education />
        <Achievement />
        <Community />
        </div>
      </div>
    </section>
  );
};

export default page;
