"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff } from "lucide-react";
import { Mailbox } from "lucide-react";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Reset password:", password);
    // connect api / redux here
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/login-bg.webp" // use your uploaded image here
          alt="background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md sm:max-w-lg rounded-3xl bg-white/10 backdrop-blur-xl shadow-2xl px-6 sm:px-10 py-10 text-white"
      >
        {/* Top Image */}
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-600/20 
                  flex items-center justify-center shadow-xl backdrop-blur-md">
           <Mailbox size={48} className="text-orange-400 drop-shadow-lg" />
            </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Reset password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* New Password */}
          <div className="space-y-1">
            <label className="text-sm text-gray-200">New password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-black/30 border border-white/20 focus:border-orange-400 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300"
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1">
            <label className="text-sm text-gray-200">Re-enter password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/30 border border-white/20 focus:border-orange-400 outline-none"
              />
            </div>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="w-full py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-orange-500 to-amber-600 shadow-lg"
          >
            Reset Password
          </motion.button>
        </form>

        {/* Back */}
        <div className="mt-6 text-center">
          <Link
            href="/Auth/forgot-password"
            className="text-sm text-gray-200 hover:text-orange-400 transition"
          >
            ← Back to Sign In
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
