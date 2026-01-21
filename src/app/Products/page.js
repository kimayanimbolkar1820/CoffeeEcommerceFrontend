"use client"

import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "@/redux/features/productSlice"
import Image from "next/image"
import Link from "next/link"
import { getValidImage } from "@/utils/getValidImage"

import CategoryBar from "@/components/product/CategoryBar"
import FilterSidebar from "@/components/product/Filters/FilterSidebar"
import ProductHero from "@/components/product/ProductHero"
import { selectFilteredProducts } from "@/redux/selectors/productSelectors"

const Page = () => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.product)
  const filteredProducts = useSelector(selectFilteredProducts)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) return <p className="mt-20 text-center">Loading...</p>
  if (error) return <p className="mt-20 text-center text-red-500">{error}</p>

  return (
    <>
      {/* HERO */}
      <ProductHero
        title="Our Coffee Collection"
        subtitle="Hand-roasted beans crafted for every brew style"
        image="/images/pdp8.webp"
      />

      {/* CATEGORY LEVEL 1 */}
      <CategoryBar />

      {/* PRODUCTS + FILTERS */}
      <section className="bg-[#24160E]">
        <div className="-mt-5 w-full px-8 lg:px-14 py-16 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 ">
          {/* FILTER SIDEBAR */}
          <FilterSidebar />
{/* PRODUCT GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(260px,1fr))] gap-8 items-start pr-4 lg:pr-4">

  {filteredProducts.map((item) => (
    <Link
      key={item.slug}
      href={`/Products/${item.slug}`}
      className="
        group
             bg-[#b2a28e]
            rounded-2xl
            p-6
            h-[420px]
            flex
            flex-col
            self-start
            transition-all
            duration-500
            hover:shadow-2xl
      "
    >
      {/* IMAGE */}
      <div className="relative w-full h-48 mb-6 flex-shrink-0">
        <Image
          src={getValidImage(item.images)}
          alt={item.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:-translate-y-2"
        />
      </div>

      {/* TITLE */}
      <h4 className="text-lg font-playfair text-black truncate">
        {item.name}
      </h4>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-700 mt-2 line-clamp-2 min-h-[40px]">
        {item.description}
      </p>

      {/* PRICE + CTA (STAYS AT BOTTOM) */}
      <div className="mt-auto flex items-center justify-between pt-4">
        <span className="font-semibold text-black text-base">
          ${item.price}
        </span>

        <button
          onClick={(e) => e.preventDefault()}
          className="
            px-4
            py-2
            rounded-full
            bg-black
            text-[#F3E0C8]
            text-sm
            hover:bg-[#F3E0C8]
            hover:text-black
            transition
          "
        >
          Add
        </button>
      </div>
    </Link>
  ))}
</div>

        </div>
      </section>
    </>
  )
}

export default Page
