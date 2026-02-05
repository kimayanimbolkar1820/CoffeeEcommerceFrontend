"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export default function ChangePassword() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex justify-center px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="
          card font-playfair
          w-full max-w-md sm:max-w-lg lg:max-w-xl
          mt-10 sm:mt-16
          p-6 sm:p-8
        "
      >
        <h2 className="title text-center mb-6">Change Password</h2>

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

        {/* Animated Button */}
 <div className="flex justify-center ">
  <motion.button
    whileTap={{ scale: 0.94 }}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 260 }}
    onClick={() => {
      console.log("Update Password clicked");
      // call API here
    }}
    className="
      btn-primary btn-glow 
      w-60 py-3 mt-6
      rounded-lg
      text-base sm:text-lg
      flex items-center justify-center
    "
  >
    Update Password
  </motion.button>
</div>

      </motion.div>
    </div>
  );
}
