import React from "react";
import { Github } from "lucide-react";

const GitIcon = ({ className = "" }) => {
  const defaultClasses = "size-4 text-gray-900 transition-colors duration-200";
  const combinedClasses = `${defaultClasses} ${className}`.trim();

  return <Github className={combinedClasses} />;
};

export default GitIcon;