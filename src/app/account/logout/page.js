"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useDispatch  } from "react-redux";
import { userLogoutThunk } from "@/redux/features/authSlice";

export default function LogoutPage() {
  const router = useRouter();
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(userLogoutThunk())
    router.replace("/");
  };

  return (
    <motion.div
      className="bg-[#433023] text-[#fff3e6] rounded-xl p-8 max-w-md mx-auto mt-20 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-semibold mb-4 text-red-300">
        Logout
      </h2>

      <p className="mb-6 opacity-90">Are you sure you want to logout?</p>

      <div className="flex gap-4">
        <button
          onClick={() => router.back()}
          className="w-1/2 border border-[#fff3e6]/40 py-3 rounded-lg hover:bg-[#fff3e6]/10 transition"
        >
          Cancel
        </button>
        <button
          onClick={handleLogout}
          className="w-1/2 bg-red-600 hover:bg-red-900 py-3 rounded-lg font-medium transition-colors"
        >
          Confirm Logout
        </button>
      </div>
    </motion.div>
  );
}