import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Star = ({ rating = 5, max = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, index) => (
        <span key={index}>
          {index < rating ? (
            <FaStar className="text-amber-400 text-sm" />
          ) : (
            <FaRegStar className="text-gray-500 text-sm" />
          )}
        </span>
      ))}
    </div>
  );
};

export default Star;
