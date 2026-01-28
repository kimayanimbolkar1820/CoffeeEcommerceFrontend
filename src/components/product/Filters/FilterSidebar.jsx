"use client"

import { useDispatch, useSelector } from "react-redux"
import {
  setCategoryLevel2,
  setCategoryLevel3,
  setRoastLevel,
  setRoastColor,
  resetFilters,
} from "@/redux/features/filterSlice"

import { FaFilter } from "react-icons/fa";

const FilterSidebar = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.filter)

  return (
    <aside
      className="
        sticky
        top-28
        h-fit
        rounded-2xl
        bg-black/50
        backdrop-blur-2xl
        border-3 border-[#F3E0C8]/60 
    
        
        p-5
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white text-sm font-semibold uppercase flex gap-1">
          Filters <FaFilter/>
        </h3>

        <button
          onClick={() => dispatch(resetFilters())}
          className="text-xs text-[#f1d6b5] underline"
        >
          Reset
        </button>
      </div>

      {/* CATEGORY LEVEL 2 */}
      <div className="mb-6 rounded-xl bg-[#B2A28E]/70 backdrop-blur-lg p-4 text-black">
        <h4 className="text-sm font-semibold mb-3">Type</h4>

        {["Whole Bean", "Ground Coffee", "Instant Coffee", "Coffee Pods"].map(
          (item) => (
            <label key={item} className="flex items-center gap-2 text-sm mb-2">
              <input
                type="checkbox"
                checked={filter.categoryLevel2 === item}
                onChange={() => dispatch(setCategoryLevel2(item))}
                className="accent-black"
              />
              {item}
            </label>
          )
        )}
      </div>

      {/* ROAST LEVEL */}
      <div className="mb-6 rounded-xl bg-[#B2A28E]/70 backdrop-blur-lg p-4 text-black">
        <h4 className="text-sm font-semibold mb-3">Roast Level</h4>

        {["light", "medium", "dark"].map((level) => (
          <label key={level} className="flex items-center gap-2 text-sm mb-2">
            <input
              type="checkbox"
              checked={filter.roastLevel === level}
              onChange={() => dispatch(setRoastLevel(level))}
              className="accent-black"
            />
            {level}
          </label>
        ))}
      </div>

      {/* ROAST COLOR */}
      <div className="mb-6 rounded-xl bg-[#B2A28E]/70 backdrop-blur-lg p-4 text-black">
        <h4 className="text-sm font-semibold mb-3">Roast Color</h4>

        {["light", "medium", "dark"].map((color) => (
          <label key={color} className="flex items-center gap-2 text-sm mb-2">
            <input
              type="checkbox"
              checked={filter.roastColor === color}
              onChange={() => dispatch(setRoastColor(color))}
              className="accent-black"
            />
            {color}
          </label>
        ))}
      </div>

      {/* CATEGORY LEVEL 3 */}
<div className=" rounded-xl bg-[#B2A28E]/70 backdrop-blur-lg p-4 text-black">
  <h4 className="text-sm font-semibold mb-3">Brew Type</h4>

  {["Espresso", "Pour Over", "French Press", "Cold Brew"].map(
    (item) => (
      <label key={item} className="flex items-center gap-2 text-sm mb-2">
        <input
          type="checkbox"
          checked={filter.categoryLevel3 === item}
          onChange={() => dispatch(setCategoryLevel3(item))}
          className="accent-black"
        />
        {item}
      </label>
    )
  )}
</div>

    </aside>
  )
}

export default FilterSidebar
