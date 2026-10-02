import React from "react";
import { events } from "@/app/assets/events";

const page = () => {
  return (
    <section
      id="talks-workshops"
      // Adjusted padding for better responsiveness
      className="py-16 px-4 bg-gradient-to-br from-slate-50 to-gray-100"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div
          id="header"
          className="flex flex-col justify-center items-center text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Talks & Workshops
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8 mt-3">
            Events I have organized, mentored, taught, and built for in the
            student tech community.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => {
            return (
              // Event Card
              <div
                id="card"
                key={index}
                className="rounded-lg flex flex-col bg-white p-6 shadow-md hover:shadow-lg transition-all duration-250"
              >
                {/* Event Card Header */}
                <div id="card-header" className="flex flex-row items-start gap-4">
                  {/* Icon is flex-shrink-0 to prevent it from shrinking on smaller screens */}
                  <event.icon className="flex-shrink-0 p-2 text-purple-600 rounded-lg bg-purple-100 size-10" />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <p className="text-md font-black text-purple-700">
                      {event.role}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed mt-1">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
