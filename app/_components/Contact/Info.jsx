import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
const Info = () => {
  return (
    <div
      id="information"
      className="flex flex-col justify-start gap-6 p-12 bg-white rounded-xl shadow-md max-w-lg mx-8 md:mx-0"
    >
      <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>

      {/* Contact Components */}
      <div className="flex flex-col gap-4">
        {/* Email */}
        <div className="flex flex-row items-center gap-4">
          <div className="flex justify-center items-center bg-emerald-100 text-green-500 p-3 rounded-lg flex-shrink-0">
            <Mail size={20} />
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500">Email</p>
            <p className="font-semibold text-gray-900">rp901522@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-row items-center gap-4">
          <div className="flex justify-center items-center bg-emerald-100 text-green-500 p-3 rounded-lg flex-shrink-0">
            <Phone size={20} />
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500">Phone</p>
            <p className="font-semibold text-gray-900">+977-9864315562</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-row items-center gap-4">
          <div className="flex justify-center items-center bg-emerald-100 text-green-500 p-3 rounded-lg flex-shrink-0">
            <MapPin size={20} />
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500">Location</p>
            <p className="font-semibold text-gray-900">Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;