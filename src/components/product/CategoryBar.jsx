"use client"

import { useDispatch, useSelector } from "react-redux"
import {
  setCategoryLevel1,
  resetFilters,
} from "@/redux/features/filterSlice"

const categories = [
  "Coffee",
  "Machines",
  "Pods",
  "Grinders",
  "BrewingTools",
  "Accessories",
]

const CategoryBar = () => {
  const dispatch = useDispatch()
  const active = useSelector((state) => state.filter.categoryLevel1)

  return (
    <div className="sticky top-0 z-30 bg-[#24160E] border-b border-[#3a2a1f]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex gap-4 overflow-x-auto flex-row justify-center">

        {/* ALL CATEGORIES */}
        <button
          onClick={() => dispatch(resetFilters())}
          className={`px-6 py-2 rounded-full text-sm whitespace-nowrap transition cursor-pointer font-cinzel
            ${
              active === "All"
                ? "bg-[#F3E0C8] text-black"
                : "border border-[#F3E0C8] text-[#F3E0C8]"
            }`}
        >
          All Categories
        </button>

        {/* CATEGORY BUTTONS */}
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => dispatch(setCategoryLevel1(cat))}
            className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition cursor-pointer font-cinzel
              ${
                active === cat
                  ? "bg-[#F3E0C8] text-black"
                  : "border border-[#F3E0C8] text-[#F3E0C8]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryBar
