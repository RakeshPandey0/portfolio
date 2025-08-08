import React from "react";
import { LucideEye} from "lucide-react";
import TechnologyBadge from "../ui/TechnologyBadge";
const Review = () => {
  const reviews = [
    {
      title: "International Research Journal of Multidisciplinary Technovation",
      role: "Peer Reviewer",
      year: "2024",
      description:
        "Reviewed research papers in the field of technology and innovation.",
    },
  ];
  return (
    <div id="review" className="flex flex-col">
      <h2 className="px-6 text-2xl font-bold mb-2">Research Publications</h2>
      {reviews.map((review, index) => {
        return (
          <div
            id="card"
            key={index}
            className="rounded-lg flex flex-col bg-white px-6 py-6 mx-6 my-4 shadow-md hover:shadow-lg transition-all duration-250"
          >
            {/* Publication Card Header */}
            <div id="card-header" className="mb-1">
              <div className="flex gap-2">
                <LucideEye className=" mb-4 border-gray-500 p-2 text-purple-600 rounded-lg bg-purple-100 mx-2 size-11" />
                <h3 className="flex flex-wrap text-xl font-semibold">
                  {review.title}
                </h3>
              </div>
              {/* Publication Card Venue & DOI */}
              <div id="card-tech" className="space-y-2 my-1 ml-17">
                <div className="flex flex-wrap gap-3">
                  <div>
                    <TechnologyBadge tech={review.role} index={index} />
                  </div>
                  <div>
                    <TechnologyBadge tech={review.year} index={index} />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed ml-16 mt-5">
                {review.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
