"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Orders({ onBack }) {
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleBackClick = () => {
    if (isMobile && onBack) {
      onBack();
      return;
    }
  
  router.back();
  };

  return (
    <div className="relative w-full min-h-[300px] p-4 sm:p-6 md:p-8 bg-[#37291d] rounded-2xl">
        <div className="relative flex flex-col items-center justify-center h-full text-center">

          {/* BACK BUTTON - Mobile only */}
          <motion.button
            type="button"
            onClick={handleBackClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 top-2 block md:hidden text-[20px] btn-glow font-bold"
          >
            ⟵
          </motion.button>

          <h2 className="text-[rgb(228,185,154)] font-cinzel text-xl sm:text-2xl font-bold mt-15 underline">
            My Orders
          </h2>

          <p className="opacity-80 mt-40 text-gray-400 text-sm sm:text-base">
            You haven’t placed any orders yet.
          </p>

          <motion.button
            onClick={() => router.push("/")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" cursor-pointer mt-10 px-4 py-2 rounded-full bg-amber-900 text-white font-playfair font-bold btn-glow text-sm sm:text-base border border-amber-50"
          >
            Go to Home page
          </motion.button>
        </div>
    </div>
  );
}
