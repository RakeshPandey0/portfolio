import React from "react";
import Publication from "./Publication";
import Review from "./Review";
const page = () => {
  return (
    <section
      id="publication-reviews"
      className="p-20 bg-white"
    >
      <div className="max-w-max px-30 mx-20">
        <div
          id="header"
          className="flex flex-col justify-center items-center text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Publications & Reviews
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8 mt-3">
            Research contributions and peer review activities in machine
            learning, web security, and agricultural technology.
          </p>
        </div>
        <div className="flex flex-row justify-center px-6 -mx-6 mt-10">
          <Publication />
          <Review />
        </div>
      </div>
    </section>
  );
};

export default page;
