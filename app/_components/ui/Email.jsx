import React from "react";
import { Mail } from "lucide-react";

const Email = ({ email }) => {
  return (
    <a
      href={`mailto:${email}`}
      className="inline-flex items-center gap-2 text-gray-500 hover:text-slate-700 transition-colors duration-200"
      aria-label={`Send an email to ${email}`}
    >
      <Mail className="size-4" />
      <span className="text-sm">{email}</span>
    </a>
  );
};

export default Email;
