import React from "react";
import TechnologyBadge from "../ui/TechnologyBadge";
import { LucideFileText, ExternalLinkIcon } from "lucide-react";

const Publication = () => {
  const publications = [
    {
      title:
        "Crop Recommendation System using Machine Learning: A Comparative Study",
      venue: "KEC Conference 2024",
      type: "Research Paper",
      doi: "https://doi.org/10.3126/injet.v1i2.66708",
      description:
        "Comparative analysis of machine learning algorithms for crop recommendation based on soil properties and environmental factors.",
    },
    {
      title: "SurakshitWeb: An AI powered Phishing URL Detection System",
      venue: "KEC Conference 2025",
      type: "Research Paper",
      doi: "https://doi.org/10.3126/injet.v2i2.78614",
      description:
        "Deep learning approach for phishing URL detection using genetic algorithm optimization and custom neural networks.",
    },
  ];
  return (
    <div id="publication" className="flex flex-col">
      <h2 className="px-6 text-2xl font-bold mb-2">Research Publications</h2>
      {publications.map((publication, index) => {
        return (
          <div
            id="card"
            key={index}
            className="rounded-lg flex flex-col bg-white px-6 py-6 mx-6 my-4 shadow-md hover:shadow-lg transition-all duration-250"
          >
            {/* Publication Card Header */}
            <div id="card-header" className="mb-1">
              <div className="flex gap-2">
                <LucideFileText className=" mb-4 border-gray-500 p-2 text-emerald-600 rounded-lg bg-emerald-100 mx-2 size-11" />
                <h3 className="flex flex-wrap text-xl font-semibold">
                  {publication.title}
                </h3>
              </div>
              {/* Publication Card Venue & type */}
              <div id="card-tech" className="space-y-2 my-1 ml-17">
                <div className="flex flex-wrap gap-3">
                  <div>
                    <TechnologyBadge tech={publication.venue} index={index} />
                  </div>
                  <div>
                    <TechnologyBadge tech={publication.type} index={index} />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed ml-16 mt-5">
                {publication.description}
              </p>
              {/* DOI */}
              <button className="gap-2 rounded-lg bg-white px-2 pb-2 pt-2.5 ml-16 mt-2 text-xs font-medium leading-normal text-neutral-600 shadow-black-3 border-1 border-gray-300 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 active:border-neutral-800">
                <a href={publication.doi} target="_blank" className="flex gap-2">
                  <ExternalLinkIcon size={15} color="black" />
                  <p className="text-md text-black font-bold">View DOI</p>
                </a>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Publication;
