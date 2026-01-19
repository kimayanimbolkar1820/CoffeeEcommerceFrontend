"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { KeyRound } from "lucide-react";

export default function OtpPage() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(30);
  const [verified, setVerified] = useState(false);

  // 🔁 Resend timer
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  // ✅ Auto submit when OTP complete
  useEffect(() => {
    if (otp.every((d) => d !== "")) {
      setTimeout(() => setVerified(true), 400);
    }
  }, [otp]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleResend = () => {
    setOtp(Array(6).fill(""));
    setVerified(false);
    setTimer(30);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/login-bg.webp"
          alt="background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a120e]/80" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-3xl bg-[#2a211c]/80
                   backdrop-blur-xl px-6 sm:px-10 py-10
                   text-white shadow-2xl"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-amber-600/20 flex items-center justify-center">
            <KeyRound size={26} className="text-amber-500" />
          </div>
        </div>

        <h2 className="text-3xl font-cinzel text-center mb-2">
          Verify OTP
        </h2>

        {!verified ? (
          <>
            <p className="text-sm text-gray-300 text-center mb-6">
              OTP sent to your email
            </p>

            {/* OTP Inputs */}
            <div className="flex justify-center gap-3 mb-6">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, i)}
                  className="w-10 h-12 sm:w-12 sm:h-14
                             text-center text-lg
                             bg-transparent border border-white/40
                             focus:border-amber-500 rounded-xl"
                />
              ))}
            </div>

            {/* Resend */}
            <p className="text-center text-sm text-gray-400">
              {timer > 0 ? (
                <>Resend OTP in <span className="text-amber-400">{timer}s</span></>
              ) : (
                <button
                  onClick={handleResend}
                  className="cursor-pointer text-amber-400 hover:underline"
                >
                  Resend OTP
                </button>
              )}
            </p>
          </>
        ) : (
          <p className="text-center text-amber-400 font-semibold mt-6">
            OTP Verified ✔
          </p>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/forgot-password"
            className="text-sm text-gray-300 hover:text-amber-400 hover:underline"
          >
            ← Back to forgot password
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
