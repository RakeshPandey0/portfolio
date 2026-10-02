import React from "react";
import { ExternalLinkIcon } from "lucide-react";
import TechnologyBadge from "../ui/TechnologyBadge";
import { certifications } from "@/app/assets/certifications";

const page = () => {
  return (
    <section id="certifications-list" className="py-16 px-4 bg-white dark:bg-slate-950">
      <div className="w-full max-w-7xl mx-auto">
        <div
          id="header"
          className="flex flex-col justify-center items-center text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Certifications & Honors
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-8 mt-3">
            Courses, competitions, and recognitions that back up my work in
            data science, machine learning, and research.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => {
            return (
              // Certification Card
              <div
                id="card"
                key={index}
                className="rounded-lg flex flex-col bg-white dark:bg-slate-800 p-6 shadow-md hover:shadow-lg transition-all duration-250"
              >
                {/* Certification Card Header */}
                <div id="card-header" className="flex items-start gap-4">
                  <certification.icon className="flex-shrink-0 p-2 text-emerald-600 dark:text-emerald-400 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 size-11" />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold">
                      {certification.title}
                    </h3>
                    {/* Issuer & date */}
                    <div id="card-tech" className="flex flex-wrap gap-2">
                      <TechnologyBadge tech={certification.issuer} />
                      <TechnologyBadge tech={certification.date} />
                    </div>
                  </div>
                </div>
                {/* Credential Button - only for certificates with a public link */}
                {certification.link && (
                  <a
                    href={certification.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium leading-normal text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-slate-600 transition-all duration-150 hover:bg-gray-100 dark:hover:bg-slate-700 shadow-sm mt-4 w-max"
                  >
                    <ExternalLinkIcon className="size-4" />
                    View Credential
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
