import React from "react";
import { Phone } from "lucide-react";
const Mobile = ({ phone }) => {
  return (
    <div className="cursor-default flex text-gray-600 hover:text-blue-950">
      <Phone />
      {phone}
    </div>
  );
};

export default Mobile;
