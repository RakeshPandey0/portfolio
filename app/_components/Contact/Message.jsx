"use client";

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Send } from "lucide-react";

const Message = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    // Adjusting container padding for better mobile spacing
    <div className="flex flex-col p-10 sm:p-5 my-4 rounded-xl bg-white shadow-lg max-w-2xl mx-2 md:mx-0">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Send a Message</h2>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col mt-5 text-gray-800 text-base gap-4"
      >
        {/* Name and Email Inputs - Now responsive */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="border border-gray-300 p-2 rounded-md mt-1 w-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              className="border border-gray-300 p-2 rounded-md mt-1 w-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
              required
            />
          </div>
        </div>

        {/* Subject Input */}
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="subject" className="text-sm font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="What's the subject about?"
            className="border border-gray-300 p-2 rounded-md mt-1 w-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
            required
          />
        </div>

        {/* Message Textarea */}
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows={6}
            placeholder="Tell me about the project or opportunity...."
            className="border border-gray-300 p-2 rounded-md mt-1 w-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
            required
          />
        </div>

        {/* Submit Button - Now using gap for spacing */}
        <button
          className="flex justify-center items-center px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md transition-colors w-full gap-2"
          type="submit"
        >
          <Send className="h-4 w-4 flex-shrink-0" />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Message;