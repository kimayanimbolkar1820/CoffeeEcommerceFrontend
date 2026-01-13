"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1c120b] px-4 sm:px-6 lg:px-12 py-10 text-[#efcca4]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

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
            The Story <br className="hidden sm:block" /> of Coffee
          </h1>

          {/* Description */}
          <p className="text-[#d6b28e] font-playfair max-w-md text-sm sm:text-base">
            Each bean is crafted to deliver freshness, richness, and a smooth,
            satisfying cup every time.
          </p>

          {/* Main Image */}
          <motion.div
            // initial={{ opacity: 0, y: 40 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8, delay: 0.3 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="relative mt-8 sm:mt-10 w-full h-[220px] sm:h-[280px] lg:h-[340px] rounded-xl overflow-hidden cursor-pointer"
          >
            <Image
              src="/images/aboutUs1.webp"
              alt="Coffee"
              fill
              className="object-cover transition-transform duration-300"
              priority
            />
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Top Text */}
          <p className="text-[#d6b28e] font-inter max-w-md text-sm sm:text-base text-center lg:text-left">
            We are passionate about coffee and the art behind every perfect cup.
            Our coffee machine powder is crafted from carefully selected premium
            beans, finely ground to deliver rich aroma and smooth taste. Designed
            to work seamlessly with coffee machines, it ensures consistent
            extraction and balanced flavor every time.
            <br /><br />
            From intense espresso to creamy milk-based coffees, our blends bring
            café-quality results to your home. We focus on freshness, quality,
            and precision in every batch we prepare.
            <br /><br />
            From the first hiss of brewing to the final sip, we aim to turn
            everyday moments into comforting coffee rituals. This is our
            story—one cup at a time.
          </p>

          {/* Image Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 cursor-pointer">

            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#2a1a12] p-4 rounded-xl"
            >
              <div className="relative w-full h-[160px] sm:h-[200px] overflow-hidden mb-6">
                <Image
                  src="/images/aboutUs2.webp"
                  alt="Coffee Powder"
                  fill
                  className="object-cover rounded-b-full"
                />
              </div>
              <p className="text-sm font-playfair font-semibold text-[#d6b28e]">
                We source and roast premium coffee beans to preserve their natural
                aroma and bold character in every brew. Our espresso is crafted
                for those who appreciate deep flavor, warmth, and an authentic
                coffee experience.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#2a1a12] p-4 rounded-xl"
            >
              <div className="relative w-full h-[160px] sm:h-[200px] overflow-hidden mb-6">
                <Image
                  src="/images/aboutUs3.webp"
                  alt="Coffee Machine"
                  fill
                  className="object-cover rounded-b-full"
                />
              </div>
              <p className="text-sm font-playfair font-semibold text-[#d6b28e]">
                We craft every cup with care, blending freshly brewed coffee with
                perfectly balanced milk for a smooth, rich taste. Our passion is
                delivering café-quality comfort that turns everyday moments into
                something special.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </main>
  );
}