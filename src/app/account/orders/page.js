"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Orders({ onBack }) {
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleBackClick = () => {
    // 📱 Mobile → go back to ProfileView
    if (isMobile && onBack) {
      onBack();
      return;
    }

    // 🖥 Desktop → normal behaviour
    setShowForm(false);
    setEditId(null);
  };

  return (
    <div className="relative w-full min-h-[300px] p-4 sm:p-6 md:p-8 bg-[#37291d] rounded-2xl">

      {!showForm ? (
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
            onClick={() => setShowForm(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-4 py-2 rounded-full bg-amber-900 text-white font-inter font-bold btn-glow text-sm sm:text-base"
          >
            Place First Order
          </motion.button>
        </div>
      ) : (
        <div className="relative p-4 sm:p-6">

          {/* BACK BUTTON - mobile + desktop */}
          <motion.button
            type="button"
            onClick={handleBackClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 top-1 text-[20px] sm:text-[22px] btn-glow font-bold"
          >
            ⟵
          </motion.button>

          <p className="text-[#f1b287] font-bold font-cinzel text-center underline mt-40">
            Form goes here...
          </p>
        </div>
      )}
    </div>
  );
}
