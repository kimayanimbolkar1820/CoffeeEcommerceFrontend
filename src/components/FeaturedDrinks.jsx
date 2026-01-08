"use client";
import React, { useState } from "react";
import Image from "next/image";

const drinks = [
  {
    id: 1,
    name: "Caramel Latte",
    desc: "Rich espresso blended with caramel syrup and steamed milk.",
    price: "₹280",
    image: "/images/fd4.png",
  },
  {
    id: 2,
    name: "Mocha Delight",
    desc: "Chocolate infused espresso with creamy milk foam.",
    price: "₹310",
    image: "/images/fd3-removebg-preview.png",
  },
  {
    id: 3,
    name: "Classic Cappuccino",
    desc: "Bold espresso topped with velvety milk foam.",
    price: "₹250",
    image: "/images/feature7-removebg-preview.png",
  },
  {
    id: 4,
    name: "Vanilla cold Brew",
    desc: "Bold espresso topped with velvety milk foam.",
    price: "₹250",
    image: "/images/feature9-removebg-preview.png",
  },

];

const FeaturedDrinks = () => {
  const [active, setActive] = useState(0);

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
          <h2 className="text-4xl md:text-6xl font-serif italic text-[#F7E7CE]">
            Featured Drinks
          </h2>
        </div>

        {/* MAIN FLOATING MODEL */}
<div className="absolute right-20 bottom-[-200px] z-40 transition-all duration-500">

  {/* BLACK CIRCLE BACKDROP */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-[420px] h-[420px] md:w-[480px] md:h-[480px]
                    rounded-full bg-black/40 blur-2xl" />
  </div>

  {/* COFFEE IMAGE */}
  <div className="relative w-44 md:w-140 h-72 md:h-[500px]">
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
          className="absolute bottom-0 left-0 w-full h-[120px] z-30"
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
  className="relative z-20 ml-6 mb-25 md:ml-24 w-[90%] md:w-[420px] p-6
             rounded-2xl bg-white/25 backdrop-blur-xl
             border border-white/30 shadow-xl
             transition-all duration-500"
>

          <h3 className="text-2xl font-semibold text-[#3b2f2f] mb-2">
            {drinks[active].name}
          </h3>

          <p className="text-[#4a3a3a] text-sm mb-4">
            {drinks[active].desc}
          </p>

          <span className="text-lg font-bold text-[#3b2f2f]">
            {drinks[active].price}
          </span>
        </div>

        {/* MINI MODELS — LINEAR SCROLL */}
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 w-[320px] overflow-hidden">

  <div
    className="flex gap-6 transition-transform duration-500 ease-out"
    style={{
      transform: `translateX(-${active * 88}px)`
    }}
  >
    {drinks.map((drink, index) => (
      <button
        key={drink.id}
        onClick={() => setActive(index)}
        className={`relative w-16 h-24 flex-shrink-0 transition-all duration-300
          ${active === index ? "scale-110 opacity-100" : "opacity-60 hover:opacity-100"}`}
      >
        <Image
          src={drink.image}
          alt={drink.name}
          fill
          className="object-contain drop-shadow-lg"
        />
      </button>
    ))}
  </div>

</div>


</div>


     
    </section>
  );
};

export default FeaturedDrinks;
