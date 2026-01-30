"use client";

import { useDispatch, useSelector } from "react-redux";
import { setCategoryLevel1, resetFilters } from "@/redux/features/filterSlice";

const categories = ["Coffee", "Machines", "Pods", "Grinders", "BrewingTools", "Accessories"];

const CategoryBar = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.filter.categoryLevel1);

  return (
    <div className="sticky top-0 z-30 bg-[#24160E] border-b border-[#3a2a1f] justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Scrollable container */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide flex-nowrap">
          {/* ALL CATEGORIES */}
          <button
            onClick={() => dispatch(resetFilters())}
            className={`flex-shrink-0 px-4 sm:px-6 py-2 rounded-full text-sm whitespace-nowrap transition cursor-pointer font-cinzel justify-between
              ${active === "All"
                ? "bg-[#F3E0C8] text-black"
                : "border border-[#F3E0C8] text-[#F3E0C8]"}`
            }
          >
            All Categories
          </button>

          {/* CATEGORY BUTTONS */}
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => dispatch(setCategoryLevel1(cat))}
              className={`flex-shrink-0 px-4 sm:px-6 py-2 rounded-full text-sm whitespace-nowrap transition cursor-pointer font-cinzel
                ${active === cat
                  ? "bg-[#F3E0C8] text-black"
                  : "border border-[#F3E0C8] text-[#F3E0C8]"}`
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Optional: side gradient for scroll hint on mobile */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-6 bg-gradient-to-r from-[#24160E] to-transparent md:hidden"></div>
      <div className="pointer-events-none absolute top-0 right-0 h-full w-6 bg-gradient-to-l from-[#24160E] to-transparent md:hidden"></div>
    </div>
  );
};

export default CategoryBar;
