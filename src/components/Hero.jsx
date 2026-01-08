"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const media = [
  { type: "image", src: "/images/bg4.jpg", width: 1920, height: 1080 },
  { type: "video", src: "/images/coffeevideo.mp4.mp4" },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % media.length);
    }, 7000); // fade every 7s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      
      {/* GRID: 30% LEFT / 70% RIGHT */}
      <div className="relative z-10 grid h-full grid-cols-1 md:grid-cols-[30%_70%]">

        {/* LEFT – TEXT CONTENT */}
        <div className="flex flex-col justify-center px-4 md:px-16 text-white pt-24 md:pt-28 font-serif z-20">
        <p className="
  inline-flex items-center
  uppercase tracking-widest text text-white/90
  px-5 py-2.5 rounded-full w-55 h-10

  bg-white/10 backdrop-blur-xl
  border border-white/20
  shadow-lg 
">
  Freshly Roasted
</p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
            Modern Coffee.
          </h1>

          <p className="mt-6 max-w-md text-gray-300">
            We Believe a cup of coffee is one of the most important,
           
            pleasures in life.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
              Order Now
            </button>
            <button className="px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition">
              Read More
            </button>
          </div>
        </div>

        {/* RIGHT – MEDIA */}
        <div className="relative w-full h-full overflow-hidden">
          {media.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === active ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  width={item.width}   // original image resolution
                  height={item.height}
                  alt="Coffee visual"
                  className="w-full h-full object-cover scale-105 transition-transform duration-700"
                  priority={index === active}
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover scale-105 transition-transform duration-700"
                />
              )}

              {/* Gradient overlay for luxury feel */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black" />
            </div>
          ))}
        </div>

      </div>

      {/* Subtle blur behind everything */}
      <div className="absolute inset-0 z-0 backdrop-blur-[2px] pointer-events-none" />
    </section>
  );
}
