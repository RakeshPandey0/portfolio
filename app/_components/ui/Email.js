import React from "react";
import { Mail } from "lucide-react";
const Email = ({ email }) => {
  return (
    <div className="cursor-text flex text-gray-500 gap-1 hover:text-slate-700">
      <Mail className="mt-1 mr-2 size-4"/>
      {email}
    </div>
  );
};

export default Email;
