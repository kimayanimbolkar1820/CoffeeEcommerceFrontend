"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Profile({ user, onEditClick }) {
  return (
    <div className="w-full">

      {/* PROFILE HEADER */}
      <div className="flex flex-col mt-5 sm:flex-row items-center sm:items-start gap-6 sm:ml-5">

        {/* ✅ CENTER PROFILE IMAGE (ONLY ONE) */}
        <div
          className="
            relative
            w-32 h-32
            sm:w-28 sm:h-28
            mx-auto sm:mx-0
            rounded-full overflow-hidden
            border-2 border-amber-700
            shrink-0
          "
        >
          <Image
            src={user?.image || "/images/profile.webp"}
            alt="profile"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* INFO */}
        <div className="text-center sm:text-left sm:ml-10">

          <h3
            className="
              font-cinzel font-bold
              text-xl sm:text-2xl
              text-amber-950
              mb-5
              underline underline-offset-5 decoration-1
            "
          >
            Your Profile
          </h3>

          <p className="font-playfair text-amber-900">
            <span className="font-bold underline underline-offset-4 decoration-1">
              Name:
            </span>
            <span className="font-semibold ml-2 sm:ml-8">
              {user?.name || "—"}
            </span>
          </p>

          <p className="font-playfair text-amber-900">
            <span className="font-bold underline underline-offset-4 decoration-1">
              Mobile:
            </span>
            <span className="font-semibold ml-2 sm:ml-6">
              {user?.phone || "—"}
            </span>
          </p>

          <p className="font-playfair text-amber-900 break-all">
            <span className="font-bold underline underline-offset-4 decoration-1">
              Email:
            </span>
            <span className="font-semibold ml-2 sm:ml-8">
              {user?.email || "—"}
            </span>
          </p>
        </div>
      </div>

      {/* EDIT BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="flex justify-center sm:justify-start sm:ml-30 mt-10"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEditClick}
          className="btn-primary btn-glow
            w-full sm:w-fit
            px-6 py-3 rounded-full"
        >
          Edit Profile
        </motion.button>
      </motion.div>

      <hr className="mt-10 border-amber-900/60" />
    </div>
  );
}


