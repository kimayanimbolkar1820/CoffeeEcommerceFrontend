"use client";
import React, { useState , useEffect } from "react";
import Image from "next/image";

const drinks = [
  {
    id: 1,
    name: "Espresso",
    desc: "A bold and intense coffee shot with a rich aroma and a smooth crema on top.",
    recipe:"Finely ground coffee: 18–20 g  Hot water (92–96°C): 30–40 ml Extraction time: 25–30 seconds",
    image: "/images/fd4.png",
  },
  {
    id: 2,
    name: "Mocha Delight",
    desc: "Chocolate infused espresso with creamy milk foam.",
    recipe:"Espresso: 1 shot (30 ml) Steamed milk: 60 ml Milk foam: 60 ml",
    image: "/images/fd3-removebg-preview.png",
  },
  {
    id: 3,
    name: "Classic Cappuccino",
    desc: "Bold espresso topped with velvety milk foam.",
    recipe:"fewf",
    image: "/images/feature7-removebg-preview.png",
  },
  {
    id: 4,
    name: "Vanilla cold Brew",
    desc: "Bold espresso topped with velvety milk foam.",
    recipe:"dwdd",
    image: "/images/feature9-removebg-preview.png",
  },

];
const loopedDrinks = [...drinks, ...drinks];


const FeaturedDrinks = () => {
 const [active, setActive] = useState(0);
const [startIndex, setStartIndex] = useState(0);

const visibleCount = 3;
const itemWidth = 88; // width + gap




const visibleDrinks = drinks.slice(
  startIndex,
  startIndex + visibleCount
);

  return (
    <section className="w-full min-h-screen bg-[#F7E7CE] overflow-hidden">

      {/* TOP IMAGE */}
      <div className="relative w-full h-[55vh]">

        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/feature1.jpg"
            alt="Coffee Image"
            fill
            priority
            className="object-cover blur-[1.5px] scale-105"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* HEADING — LEFT ALIGNED */}
        <div className="absolute inset-0 flex items-center z-20 pl-16 md:pl-32">
          <h2 className="text-4xl md:text-6xl font-cinzel font-semibold italic text-[#F7E7CE]">
            Featured Drinks
          </h2>
        </div>

        {/* MAIN FLOATING MODEL */}
<div className="absolute right-20 -bottom-50 z-40 transition-all duration-500">

  {/* BLACK CIRCLE BACKDROP */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-105 h-105 md:w-120 md:h-120
                    rounded-full bg-black/40 blur-2xl" />
  </div>

  {/* COFFEE IMAGE */}
  <div className="relative w-44 md:w-140 h-72 md:h-125">
    <Image
      src={drinks[active].image}
      alt="Coffee Model"
      fill
      className="object-contain drop-shadow-2xl relative z-10"
    />
  </div>

</div>


        {/* PAPER CUT */}
        <svg
          className="absolute bottom-0 left-0 w-full h-30 z-30"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0
               C80,80 200,40 240,55 
               C320,70 400,90 480,60 
               C560,30 640,70 720,55 
               C800,40 880,80 960,70
               C1040,45 1120,85 1200,90 
               C1280,35 1360,75 1440,80 
               L1440,2300 L0,2300 Z"
            fill="#F7E7CE"
          />
        </svg>
      </div>

      {/* BOTTOM SECTION */}
      <div className="relative w-full min-h-[45vh] flex items-center">

        {/* GLASS CARD */}
       <div
  className="relative z-20 ml-6 mb-25 md:ml-24 w-[90%] md:w-105 p-6 h-60
             rounded-2xl bg-white/25 backdrop-blur-xl
             border border-white/30 shadow-xl
             transition-all duration-500"
>

          <h3 className="text-2xl font-semibold text-[#3b2f2f] mb-2">
            {drinks[active].name}
          </h3>

          <p className="text-lg font-bold text-[#3b2f2f]">
            {drinks[active].desc}
          </p>
          

          <span className="text-[#4a3a3a] text-sm mb-4">
            {drinks[active].recipe}
          </span>
        </div>

      {/* MINI MODELS — SMOOTH STEP SLIDER + LOOP */}
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 w-[320px] overflow-hidden">
  <div
    className="flex gap-6 transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${startIndex * itemWidth}px)`,
    }}
  >
    {[...drinks, ...drinks].map((drink, index) => {
      const realIndex = index % drinks.length;

      return (
        <div
          key={index}
          onMouseEnter={() => {
            setActive(realIndex);

            // Move slider forward on last visible
            if (realIndex === drinks.length - 1) {
              setTimeout(() => setStartIndex(0), 300);
            } else if (index === startIndex + visibleCount - 1) {
              setStartIndex((prev) => prev + 1);
            }
          }}
          className={`relative w-16 h-24 shrink-0 cursor-pointer transition-all duration-300
            ${
              active === realIndex
                ? "scale-110 opacity-100"
                : "opacity-60 hover:opacity-100"
            }`}
        >
          <Image
            src={drink.image}
            alt={drink.name}
            fill
            className="object-contain drop-shadow-lg"
          />
        </div>
      );
    })}
  </div>
</div>





</div>


     
    </section>
  );
};

export default FeaturedDrinks;
