"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Profile({ user, onEditClick, onBack }) {

  const handleClose = () => {
    if (typeof onBack === "function") {
      onBack();                 // parent handler
    } else {
      window.history.back();    // fallback (NO error)
    }
  };

  return (
    <div className="w-full relative px-4 sm:px-0">

      {/* CLOSE BUTTON */}
      <button
        onClick={handleClose}
        className="absolute right-0 top-0 p-1 text-amber-950 hover:bg-amber-900/10 transition rounded-full"
      >
        <X className="h-5 w-5" />
      </button>

      {/* PROFILE HEADER */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mt-10">

        {/* PROFILE IMAGE */}
        <div className="relative w-32 h-32 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-amber-700 shrink-0">
          <Image
            src={user?.image || "/images/profile.webp"}
            alt="Profile image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* PROFILE INFO */}
        <div className="text-center sm:text-left sm:ml-8">
          <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-amber-950 mb-6 underline underline-offset-4">
            Your Profile
          </h3>

          <p className="font-playfair text-amber-900 mb-2">
            <span className="font-bold underline">Name:</span>
            <span className="font-semibold ml-3">{user?.name || "—"}</span>
          </p>

          <p className="font-playfair text-amber-900 mb-2">
            <span className="font-bold underline">Mobile:</span>
            <span className="font-semibold ml-3">{user?.phone || "—"}</span>
          </p>

          <p className="font-playfair text-amber-900 break-all">
            <span className="font-bold underline">Email:</span>
            <span className="font-semibold ml-3">{user?.email || "—"}</span>
          </p>
        </div>
      </div>

      {/* EDIT BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180 }}
        className="flex justify-center sm:justify-start mt-10"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEditClick}
          className="btn-primary btn-glow w-full sm:w-auto px-8 py-3 rounded-full"
        >
          Edit Profile
        </motion.button>
      </motion.div>

      <hr className="mt-10 border-amber-900/60" />
    </div>
  );
}
