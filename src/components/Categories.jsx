"use client";
import React from "react";
import Image from "next/image";

const Categories = () => {
  const categories = [
    { name: "Coffee", image: "/images/coffee.webp" },
    { name: "Machine", image: "/images/machine.webp" },
    { name: "Accessories", image: "/images/accessories.webp" },
  ];

  return (
    <section className="w-full bg-[#140d08]">
      {/* Background image wrapper */}
      <div className="relative w-full">
        <Image
          src="/images/bgimage.png"
          alt="bg image"
          width={600}
          height={400}
          className="w-[700px] h-auto object-cover md:ml-30"
          priority
        />

        {/* Overlay content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start px-4 pt-6 md:pt-10 text-center">
          <h1 className="text-2xl text-white md:text-4xl font-cinzel font-bold">
            Top Categories
          </h1>

          <p className="font-playfair text-[15px] text-white md:text-[18px] pt-2 max-w-md">
            Find your perfect brew, one category at a time.
          </p>

          {/* Categories */}
          <div className="mt-6 grid grid-cols-3 gap-4 sm:gap-6 md:gap-10">
            {categories.map((item, index) => (
              <span key={index} className="flex flex-col items-center">
                <div className="relative w-[90px] sm:w-[110px] md:w-[150px] aspect-square rounded-2xl overflow-hidden shadow-black shadow-lg  ">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 90px, (max-width: 1024px) 110px, 120px"
                    className="object-cover object-center "
                  />
                </div>

                <p className="mt-2 text-sm md:text-base text-white font-inter font-medium">
                  {item.name}
                </p>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
