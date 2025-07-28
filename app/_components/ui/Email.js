import React from "react";
import { Mail } from "lucide-react";
const Email = ({ email }) => {
  return (
    <div className="cursor-default flex text-gray-600 gap-1 hover:text-blue-950">
      <Mail />
      {email}
    </div>
  );
};

export default Email;
