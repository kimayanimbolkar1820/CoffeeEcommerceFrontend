import React from "react"
import Image from "next/image"
import Link from "next/link"
import { getValidImage } from "@/utils/getValidImage"

const ProductCard = ({ product }) => {
  return (
   <Link
  key={item.slug}
  href={`/Products/${item.slug}`}
  className="
    flex-shrink-0 w-64 sm:w-auto group bg-white rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:bg-[#9c9c9c]"
>
  {/* IMAGE */}
  <div className="relative w-full h-36 sm:h-44 mb-4 sm:mb-6">
    <Image
      src={getValidImage(item.images)}
      alt={item.name}
      fill
      className="object-contain "
    />
  </div>

  {/* TITLE */}
  <h3 className="text-base sm:text-lg font-playfair text-black group-hover:text-[#F3E0C8] truncate">
    {item.name}
  </h3>

  {/* SUBTEXT */}
  <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-300 mt-1">
    Best seller
  </p>

  {/* PUSH BOTTOM */}
  <div className="mt-auto flex items-center justify-between">
    <span className="text-lg font-semibold text-black">
      ₹{item.price}
    </span>

    <button
      onClick={(e) => e.preventDefault()}
      className="
        px-6
        py-2
        rounded-full
        bg-black
        text-white
        group-hover:bg-[#d6c3a3]
        group-hover:text-black
        transition
      "
    >
      Add
    </button>
  </div>
</Link>


  )
}

export default ProductCard
