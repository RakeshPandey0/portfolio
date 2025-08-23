import React from "react";
import { LucideEye } from "lucide-react";
import TechnologyBadge from "../ui/TechnologyBadge";
import { reviews } from "@/app/assets/reviews";

const Review = () => {
  return (
    <div id="review" className="flex flex-col w-full">
      {/* Container to center content on large screens */}
      <div className="mx-auto max-w-4xl w-full">
        <h2 className="px-4 text-2xl font-bold mb-2 text-gray-900">
          Peer Review Activities
        </h2>
        {reviews.map((review, index) => {
          return (
            <div
              id="card"
              key={index}
              // Adjusting padding to be consistent and responsive
              className="rounded-lg flex flex-col bg-white p-6 my-4 shadow-md hover:shadow-lg transition-all duration-250"
            >
              {/* Review Card Header */}
              <div id="card-header" className="flex items-start gap-4">
                {/* Icon container with flex-shrink-0 to prevent it from squashing */}
                <div className="flex-shrink-0">
                  <LucideEye className="p-2 text-purple-600 rounded-lg bg-purple-100 size-11" />
                </div>
                {/* Content container, handles title, badges, and description */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">
                    {review.title}
                  </h3>
                  {/* Review Card Role & Year - Now a responsive flex container */}
                  <div id="card-tech" className="flex flex-wrap gap-2">
                    <TechnologyBadge tech={review.role} index={index} />
                    <TechnologyBadge tech={review.year} index={index} />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {review.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Review;