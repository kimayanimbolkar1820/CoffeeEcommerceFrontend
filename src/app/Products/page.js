"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import { fetchProducts } from "@/redux/features/productSlice";
import { selectFilteredProducts } from "@/redux/selectors/productSelectors";
import { getValidImage, normalizeImages } from "@/utils/getValidImage";

import CategoryBar from "@/components/product/CategoryBar";
import FilterSidebar from "@/components/product/Filters/FilterSidebar";
import ProductHero from "@/components/product/ProductHero";
import { FaFilter } from "react-icons/fa";


const Page = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.product);
  const filteredProducts = useSelector(selectFilteredProducts);

  const [showMobileFilter, setShowMobileFilter] = useState(false);

  useEffect(() => {
  document.body.style.overflow = showMobileFilter ? "hidden" : "";
  return () => (document.body.style.overflow = "");
}, [showMobileFilter]);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className="mt-20 text-center">Loading...</p>;
  if (error)
    return (
      <p className="mt-20 text-center text-red-500">Error: {error}</p>
    );

  return (
    <>
      {/* HERO */}
      <ProductHero
        title="Our Coffee Collection"
        subtitle="Hand-roasted beans crafted for every brew style"
        image="/images/pdp8.webp"
      />

      {/* CATEGORY BAR */}
      <CategoryBar />

      {/* PRODUCTS + FILTERS */}
      <section className="bg-[#24160E]">
        <div className="-mt-5 w-full px-4 md:px-14 py-16 flex flex-col md:flex-row gap-6">
          {/* Desktop FILTER SIDEBAR */}
          <div className="hidden md:block w-[260px] flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Mobile filter button */}
<div className="md:hidden flex justify-between">
  <button
    onClick={() => setShowMobileFilter((prev) => !prev)}
    className="px-4 py-2 rounded-md bg-amber-100 text-black text-sm"
  >
    {showMobileFilter ? "Hide Filters" : <FaFilter/> }
  </button>
</div>
{/* MOBILE FILTER BUTTON */}
<button
  onClick={() => setShowMobileFilter(true)}
  className="md:hidden fixed bottom-6 left-6 z-40 px-4 py-3 rounded-full bg-black text-black text-sm shadow-lg"
>
  <FaFilter/>
</button>

{/* MOBILE FILTER OVERLAY */}
{showMobileFilter && (
  <div
    onClick={() => setShowMobileFilter(false)}
    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
  />
)}

{/* MOBILE FILTER DRAWER */}
<div
  className={`fixed top-0 left-0 z-50 h-full w-[85%] max-w-sm bg-[#24160E]
  transform transition-transform duration-500 md:hidden
  ${showMobileFilter ? "translate-x-0" : "-translate-x-full"}`}
>
  {/* HEADER */}
  <div className="flex items-center justify-between px-5 py-4 ">
    <h3 className="text-white font-semibold">Filters</h3>
    <button
      onClick={() => setShowMobileFilter(false)}
      className="text-white text-xl"
    >
      ✕
    </button>
  </div>

  {/* FILTER CONTENT */}
  <div className="p-5 overflow-y-auto h-full pb-24">
    <FilterSidebar />
  </div>
</div>




            {/* PRODUCT LIST */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((item) => {
                const images = normalizeImages(item.images);
                const imageSrc = getValidImage(images[0]);

                return (
                  <Link
                    key={item.slug}
                    href={`/Products/${item.slug}`}
                    className="group bg-[#b2a28e] rounded-2xl p-4 sm:p-6 flex flex-col h-full transition-all duration-500 hover:shadow-2xl"
                  >
                    {/* IMAGE */}
                    <div className="relative w-full h-32 sm:h-40 mb-3 sm:mb-4 flex-shrink-0">
                      <Image
                        src={imageSrc}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                        className="object-contain transition-transform duration-500 group-hover:-translate-y-2"
                      />
                    </div>

                    {/* TITLE */}
                    <h4 className="text-base sm:text-lg font-playfair text-black truncate">
                      {item.name}
                    </h4>

                    {/* DESCRIPTION */}
                    <p className="text-xs sm:text-sm text-gray-700 mt-1 line-clamp-2">
                      {item.description}
                    </p>

                    {/* PRICE + CTA */}
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <span className="font-semibold text-black text-sm sm:text-base">
                        ₹{item.price}
                      </span>
                      <button
                        onClick={(e) => e.preventDefault()}
                        className="px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-black text-[#F3E0C8] text-xs sm:text-sm hover:bg-[#F3E0C8] hover:text-black transition"
                      >
                        Add
                      </button>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;




