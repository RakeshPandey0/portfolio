import React from "react";
import { Mail } from "lucide-react";

const Email = ({ email }) => {
  return (
    <a
      href={`mailto:${email}`}
      className="inline-flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 rounded-md border border-gray-300 dark:border-slate-600 shadow-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition duration-200"
      aria-label={`Send an email to ${email}`}
    >
      <Mail className="size-4 flex-shrink-0" />
      <span className="text-sm font-medium">{email}</span>
    </a>
  );
};

export default Email;