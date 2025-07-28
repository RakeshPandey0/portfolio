import React from "react";
import { Phone } from "lucide-react";
const Mobile = ({ phone }) => {
  return (
    <div className="cursor-text flex text-gray-500 hover:text-slate-700">
      <Phone className="mt-1 mr-2 size-4" />
      {phone}
    </div>
  );
};

export default Mobile;
