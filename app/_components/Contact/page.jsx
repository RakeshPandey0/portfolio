import React from "react";
import Info from "./Info";
import Message from "./Message";
const page = () => {
  return (
    <section
      id="contact"
      className="flex justify-center py-12 px-4 bg-gradient-to-br from-slate-50 to-gray-100"
    >
      <div className="w-full max-w-7xl">
        <div
          id="header"
          className="flex flex-col justify-center items-center text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto mt-3">
            I'm always interested in new opportunities and collaborations. Let's
            discuss how we can work together on your next project.
          </p>
        </div>
        {/* Main responsive container for Info and Message components */}
        <div className="flex flex-col md:flex-row justify-center mt-10 gap-8">
          <Info />
          <Message />
        </div>
      </div>
    </section>
  );
};

export default page;