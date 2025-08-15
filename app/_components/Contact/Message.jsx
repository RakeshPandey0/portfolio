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
    <div className="flex flex-col p-4 my-4 rounded-lg bg-white shadow-gray shadow-lg gap-2">
      <h2 className="text-xl font-bold">Send a Message</h2>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col mt-5 text-gray-800 text-md gap-4"
      >
        <div className="flex flex-row gap-1">
          <div className="flex flex-col rounded-xl">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="border border-gray-300 p-1 mr-2 rounded-md mt-1"
              required
            />
          </div>
          <div className="flex flex-col rounded-xl">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              className="border border-gray-300 p-1 mr-2 rounded-md mt-1"
              required
            />
          </div>
        </div>
        <div className="flex flex-col rounded-xl">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="What's the subject about?"
            className="border border-gray-300 p-1 mr-2 rounded-md mt-1"
            required
          />
        </div>
        <div className="flex flex-col rounded-xl">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows={6}
            placeholder="Tell me about the project or opportunity...."
            className="border border-gray-300 p-1 rounded-md mt-1"
            required
          />
        </div>
        <button
          className="flex justify-center items-center px-2 py-2 bg-emerald-600 hover:bg-emerald-700 text-white"
          type="submit"
        >
          <Send className="h-4 w-4 mr-2" />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Message;
