import React from "react";
import { Phone } from "lucide-react";

const Mobile = ({ phone }) => {
  return (
    <a
      href={`tel:${phone}`}
      className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-md border border-gray-300 shadow-sm text-gray-700 hover:bg-gray-100 transition duration-200"
      aria-label={`Call ${phone}`}
    >
      <Phone className="size-4 flex-shrink-0" />
      <span className="text-sm font-medium">{phone}</span>
    </a>
  );
};

export default Mobile;