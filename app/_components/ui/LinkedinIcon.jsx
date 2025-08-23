import React from "react";
import { Linkedin } from "lucide-react";

const LinkedinIcon = ({ className = "" }) => {
  const defaultClasses = "size-4 text-gray-900 transition-colors duration-200";
  const combinedClasses = `${defaultClasses} ${className}`.trim();

  return <Linkedin className={combinedClasses} />;
};

export default LinkedinIcon;