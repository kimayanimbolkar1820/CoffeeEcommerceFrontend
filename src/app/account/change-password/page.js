"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export default function ChangePassword({ onBack }) {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-start bg-[#d7bf9a] px-4 sm:px-6 py-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="
          card font-playfair
          w-full max-w-md sm:max-w-lg lg:max-w-xl
          mt-10 sm:mt-16
          p-6 sm:p-8
          relative
          bg-[#2a1c12] rounded-lg shadow-lg
        "
      >
        {/* BACK BUTTON - mobile only */}
        <motion.div
          className="absolute top-4 left-4 z-20 block sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.button
            type="button"
            onClick={onBack} // This now works
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-[20px] sm:text-[22px] md:text-[24px] btn-glow font-bold flex items-center"
          >
            ⟵
          </motion.button>
        </motion.div>

        <h2 className="title text-center mb-20 mt-8 underline underline-offset-2 decoration-1 text-[rgb(228,185,154)] font-semibold text-2xl sm:text-3xl">
          Change Password
        </h2>

        <div className="space-y-4">
          {/* Current Password */}
          <div className="relative">
            <input
              className="input w-full pr-10"
              type={showCurrent ? "text" : "password"}
              placeholder="Current Password"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 transition hover:scale-110"
              onClick={() => setShowCurrent(!showCurrent)}
            >
              {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          {/* New Password */}
          <div className="relative">
            <input
              className="input w-full pr-10"
              type={showNew ? "text" : "password"}
              placeholder="New Password"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 transition hover:scale-110"
              onClick={() => setShowNew(!showNew)}
            >
              {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              className="input w-full pr-10"
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 transition hover:scale-110"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>
        </div>

        {/* Update Button */}
        <div className="flex justify-center">
          <motion.button
            whileTap={{ scale: 0.94 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260 }}
            onClick={() => console.log("Update Password clicked")}
            className="btn-primary btn-glow w-60 py-3 mt-6 rounded-4xl text-base sm:text-lg flex items-center justify-center bg-amber-900"
          >
            Update Password
          </motion.button>
        </div>
      </motion.div>

      <style jsx global>{`
        .input {
          width: 100%;
          border: 1px solid #e5e7eb;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
        }
      `}</style>
    </div>
  );
}
