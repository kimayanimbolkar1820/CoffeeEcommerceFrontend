"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import { fetchProducts } from "@/redux/features/productSlice";
import { selectFilteredProducts } from "@/redux/selectors/productSelectors";
import { getValidImage, normalizeImages } from "@/utils/getValidImage";

import CategoryBar from "@/components/product/CategoryBar";
import FilterSidebar from "@/components/product/Filters/FilterSidebar";
import ProductHero from "@/components/product/ProductHero";

const Page = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.product);
  const filteredProducts = useSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p className="mt-20 text-center">Loading...</p>;
  }

  if (error) {
    return (
      <p className="mt-20 text-center text-red-500">
        Error: {error}
      </p>
    );
  }

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
        <div className="-mt-5 w-full px-8 md:px-14 py-16 flex gap-12">
          
          {/* FILTER SIDEBAR */}
          <div className="hidden md:block w-[260px] flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* PRODUCT LIST */}
          <div className="flex flex-wrap gap-8 flex-1">
            {filteredProducts.map((item) => {
              const images = normalizeImages(item.images);
              const imageSrc = getValidImage(images[0]);

              return (
                <Link
                  key={item.slug}
                  href={`/Products/${item.slug}`}
                  className="
                    group
                    bg-[#b2a28e]
                    rounded-2xl
                    p-6
                    h-[350px]
                    flex
                    flex-col
                    transition-all
                    duration-500
                    hover:shadow-2xl
                    w-full
                    md:w-[calc(25%-1.5rem)]
                  "
                >
                  {/* IMAGE */}
                  <div className="relative w-full h-40 mb-4 flex-shrink-0">
                    <Image
                      src={imageSrc}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-contain transition-transform duration-500 group-hover:-translate-y-2"
                    />
                  </div>

                  {/* TITLE */}
                  <h4 className="text-lg font-playfair text-black truncate">
                    {item.name}
                  </h4>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-gray-700 mt-2 line-clamp-2 ">
                    {item.description}
                  </p>

                  {/* PRICE + CTA */}
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="font-semibold text-black text-base">
                      ₹{item.price}
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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
