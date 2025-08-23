import React from "react";
import Publication from "./Publication";
import Review from "./Review";
const page = () => {
  return (
    <section
      id="publication-reviews"
      // Adjusted padding for better responsiveness
      className="py-16 px-4 bg-white"
    >
      {/* Replaced invalid classes with a standard responsive container */}
      <div className="w-full max-w-7xl mx-auto">
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
        {/* Main responsive container for Publication and Review components */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
          <Publication />
          <Review />
        </div>
      </div>
    </section>
  );
};

export default page;