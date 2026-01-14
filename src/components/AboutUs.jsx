"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1c120b] px-4 sm:px-6 lg:px-12 pt-16 pb-10 text-[#efcca4]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <span className="font-bold text-lg font-cinzel underline">
              COFFEE & JOY
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold mb-4 leading-tight">
            THE STORY <br className="hidden sm:block" /> OF COFFEE
          </h1>

          {/* Description */}
          <p className="text-[#d6b28e] font-playfair max-w-md text-sm sm:text-base mb-8">
            Each bean is crafted to deliver freshness, richness, and a smooth,
            satisfying cup every time.
          </p>

          {/* MAIN LCP IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[220px] sm:h-[280px] lg:h-[340px] rounded-xl overflow-hidden"
          >
            <Image
              src="/images/aboutUs1.webp"
              alt="Coffee"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-[#d6b28e] font-inter text-sm sm:text-base">
            We are passionate about coffee and the art behind every perfect cup.
            Our coffee machine powder is crafted from carefully selected premium
            beans, finely ground to deliver rich aroma and smooth taste.
          </p>

          <p className="text-[#d6b28e] font-inter text-sm sm:text-base">
            From intense espresso to creamy milk-based coffees, our blends bring
            café-quality results to your home.
          </p>

          <p className="text-[#d6b28e] font-inter text-sm sm:text-base">
            This is our story—one cup at a time.
          </p>

          {/* Image Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">

            {/* CARD 1 – LCP DETECTED */}
            <motion.div className="bg-[#2a1a12] p-4 rounded-xl">
              <div className="relative w-full h-[160px] sm:h-[200px] mb-6">
                <Image
                  src="/images/aboutUs2.webp"
                  alt="Coffee Powder"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover rounded-b-full"
                />
              </div>
              <p className="text-sm font-playfair font-semibold text-[#d6b28e]">
                We source and roast premium coffee beans to preserve their natural
                aroma and bold character.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div className="bg-[#2a1a12] p-4 rounded-xl">
              <div className="relative w-full h-[160px] sm:h-[200px] mb-6">
                <Image
                  src="/images/aboutUs3.webp"
                  alt="Coffee Machine"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover rounded-b-full"
                />
              </div>
              <p className="text-sm font-playfair font-semibold text-[#d6b28e]">
                We craft every cup with care for a smooth, rich taste.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </main>
  );
}
