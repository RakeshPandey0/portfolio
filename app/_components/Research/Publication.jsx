import React from "react";
import TechnologyBadge from "../ui/TechnologyBadge";
import { LucideFileText, ExternalLinkIcon } from "lucide-react";
import { publications } from "@/app/assets/publications";

const Publication = () => {
  return (
    <div id="publication" className="flex flex-col w-full">
      {/* Container to center content on large screens */}
      <div className="mx-auto max-w-4xl w-full">
        <h2 className="px-4 text-2xl font-bold mb-2 text-gray-900">
          Research Publications
        </h2>
        {publications.map((publication, index) => {
          return (
            <div
              id="card"
              key={index}
              // Adjusting padding to be consistent and responsive
              className="rounded-lg flex flex-col bg-white p-6 my-4 shadow-md hover:shadow-lg transition-all duration-250"
            >
              {/* Publication Card Header */}
              <div id="card-header" className="flex items-start gap-4">
                {/* Icon container with flex-shrink-0 to prevent it from squashing */}
                <div className="flex-shrink-0">
                  <LucideFileText className="p-2 text-emerald-600 rounded-lg bg-emerald-100 size-11" />
                </div>
                {/* Content container, handles title, badges, and description */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">
                    {publication.title}
                  </h3>
                  {/* Publication Card Venue & type - Now a responsive flex container */}
                  <div id="card-tech" className="flex flex-wrap gap-2">
                    <TechnologyBadge tech={publication.venue} index={index} />
                    <TechnologyBadge tech={publication.type} index={index} />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {publication.description}
                  </p>
                  {/* DOI Button - Cleaned up and standardized classes */}
                  <a
                    href={publication.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium leading-normal text-gray-600 border border-gray-300 transition-all duration-150 hover:bg-gray-100 shadow-sm mt-2 w-max"
                  >
                    <ExternalLinkIcon className="size-4" />
                    View DOI
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Publication;