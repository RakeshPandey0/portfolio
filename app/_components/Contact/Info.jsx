import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
const Info = () => {
  return (
    <div id="information" className="flex flex-col justify-start gap-4">
      <h2 className="text-xl font-bold">Contact Information</h2>
      {/* Contact Components */}

      {/* Email */}
      <div className="flex flex-row justify-start gap-2">
        <div className="flex justify-center items-center bg-emerald-100 text-green-500 p-3 rounded-lg">
          <Mail size={20} />
        </div>
        <div className="flex flex-col gap-1">
          <p>Email</p>
          <p>rp901522@gmail.com</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex flex-row justify-start gap-2">
        <div className="flex justify-center items-center bg-emerald-100 text-green-500 p-3 rounded-lg">
          <Phone size={20} />
        </div>
        <div className="flex flex-col gap-1">
          <p>Phone</p>
          <p>+977-9864315562</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex flex-row justify-start gap-2">
        <div className="flex justify-center items-center bg-emerald-100 text-green-500 p-3 rounded-lg">
          <MapPin size={20} />
        </div>
        <div className="flex flex-col gap-1">
          <p>Location</p>
          <p>Kathmandu, Nepal</p>
        </div>
      </div>
      {/* <h2 className="text-xl font-bold">Follow me</h2> */}
    </div>
  );
};

export default Info;
