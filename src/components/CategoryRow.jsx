import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CategoryRow = ({ title, items }) => {
  return (
    
    <div>
      {/* Row header */}
      <div className="flex items-end justify-between mb-3 md:px-2 px-0 ">
        <h3 className="md:text-2xl text-[20px] font-playfair text-black font-semibold">
          {title}
        </h3>
        <Link href='/Products'>
        <span className="md:text-m text-[14px] font-cinzel text-black cursor-pointer hover:underline">
          View all →
        </span>
        </Link>
      </div>

      <div className="w-16 h-[2px] bg-black mb-6 sm:mb-10" />

      {/* Cards */}
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto sm:overflow-visible flex space-x-4 sm:space-x-0 px-2 sm:px-0">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-64 sm:w-auto group bg-white rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:bg-black"
          >
            {/* Image */}
            <div className="relative w-full h-36 sm:h-44 mb-4 sm:mb-6">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-contain transition-transform duration-500 group-hover:-translate-y-2"
              />
            </div>

            {/* Info */}
            <h4 className="text-base sm:text-lg font-playfair text-black group-hover:text-[#F3E0C8] truncate">
              {item.name}
            </h4>

            <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-300 mt-1">
              Best seller
            </p>

            <div className="mt-4 sm:mt-6 flex items-center justify-between">
              <span className="font-medium text-black group-hover:text-[#F3E0C8] text-sm sm:text-base">
                {item.price}
              </span>

              <button className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-black text-[#F3E0C8] group-hover:bg-[#F3E0C8] group-hover:text-black text-sm sm:text-base transition">
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryRow
