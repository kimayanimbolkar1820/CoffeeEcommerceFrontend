"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PricingCards() {
  const [isPods, setIsPods] = React.useState(false);

  /* ---------------- DATA ---------------- */
  const coffeePlans = [
    {
      title: "1829 Espresso",
      price: "$12.00",
      description:
        "A flexible monthly coffee subscription charged automatically. Enjoy freshly roasted beans delivered on schedule, with full control to pause, skip, or cancel anytime.",
      gradient: "from-[#f3e2c7] to-[#e8c39e]",
    },
    {
      title: "Roaster's Spotlight",
      price: "$15.00",
      description:
        "Pay upfront and enjoy a curated coffee journey. Ideal for gifting or long-term savings, with premium roasts delivered consistently for months ahead.",
      gradient: "from-[#b56a73] to-[#7b3b44]",
      highlight: true,
    },
  ];

  const podsPlans = [
    {
      title: "Autopay Subscription",
      price: "$10.00",
      description:
        "Convenient autopay pod deliveries designed for everyday ease. Perfectly portioned pods arrive regularly, so your coffee routine never misses a beat.",
      gradient: "from-[#e6d3b1] to-[#c8a57a]",
    },
    {
      title: "Prepaid Subscription",
      price: "$55.00",
      description:
        "Stock up and save with a prepaid pod subscription. A fixed number of premium pods delivered over time, offering great value and consistent quality.",
      gradient: "from-[#8a4f56] to-[#5c2c32]",
      highlight: true,
    },
  ];

  const plans = isPods ? podsPlans : coffeePlans;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
    exit: { opacity: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.96,
      transition: { duration: 0.25 },
    },
  };

  return (
    <div className="w-full overflow-x-hidden">
    {/* // <section className="relative min-h-screen w-full overflow-hidden"> */}
    {/* <section className="relative w-full overflow-y-auto  md:overflow-x-hidden overflow-y-hidden 
    min-h-[100svh] md:min-h-screen px-0 md:px-16 py-10 md:py-20 scroll-smooth-auto flex-col-reverse"> */}
    <section className="relative  px-0 md:px-16 py-10 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[#2a1f1b]/40 z-0" />
      <div className="absolute inset-0 bg-[#faf6ef]/75 z-0" />

      <Image
        src="/images/bg2.jpg"
        alt="Coffee Background"
        fill
        priority
        className="absolute inset-0 object-cover blur-2xl scale-110 z-0"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full max-w-7xl mx-auto">

          {/* LEFT */}
          <div className="flex items-center">
            <div className="max-w-sm text-[#e5dfdd] font-bold">
              <h1 className="text-5xl font-serif leading-tight mb-5">
                Subscribe <br /> today.
              </h1>

              <p className="text-sm opacity-80 mb-4">
                WatchHouse. YourHouse.
                <br />
                The modern coffee experience at home.
              </p>

              <p className="text-sm mb-8">
                Subscribe for a never-ending cup.
              </p>

              {/* TOGGLE */}
              <div className="flex items-center gap-3">
                <span className={`text-sm ${isPods ? "opacity-50" : "opacity-100"}`}>
                  Coffee
                </span>

                <div
                  onClick={() => setIsPods(!isPods)}
                  className="relative w-14 h-7 rounded-full bg-[#e5dfdd]/30 border border-[#2a1f1b]/40 cursor-pointer flex items-center"
                >
                  <motion.div
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-6 h-6 bg-[#2a1f1b] rounded-full"
                    animate={{ x: isPods ? 26 : 2 }}
                  />
                </div>

                <span className={`text-sm ${isPods ? "opacity-100" : "opacity-60"}`}>
                  Pods
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — CARDS */}
          <AnimatePresence mode="wait">
            <motion.div
              key={isPods ? "pods" : "coffee"}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            className="md:flex  md:gap-10  scroll-auto mx-5 "
            >
              {plans.map((plan, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`
                    rounded-3xl md:px-10 md:py-6 px-8 py-4 text-[#2a1f1b]
                    bg-linear-to-b ${plan.gradient}
                    shadow-black shadow-sm  backdrop-blur-sm mt-5
                  `}
                >
                  <div>
                    <p className="uppercase tracking-wide md:text-xs mb-2">
                      Coffee and Joy
                    </p>

                    <h2 className="text-2xl  font-semibold mb-4">
                      {plan.title}
                    </h2>

                    <p className="text-sm md:w-75 w-62.5 opacity-80 mb-6">
                      {plan.description}
                    </p>

                    <p className="md:text-3xl font-semibold mb-1">
                      {plan.price}
                    </p>
                    <p className="md:text-xs mb-6">Subscribe today</p>

                    <ul className="text-sm space-y-2 mb-6">
                      <li>✓ Expertly selected & roasted</li>
                      <li>✓ Pause, skip or cancel anytime</li>
                      <li>✓ Always 10% off</li>
                    </ul>
                  </div>

                  <div>
                  <button
                    onClick={() => alert(`Subscribed to ${plan.name}`)}
                    className={`md:w-full w-62.5 py-3 rounded-full text-sm flex justify-center font-bold cursor-pointer
                     transition-all duration-300 ease-out hover:scale-105 active:scale-95
                    ${
                       plan.highlight
                       ? "bg-white text-[#7b3b44] hover:bg-[#f5eaea]"
                      : "bg-[#2a1f1b] text-white hover:bg-[#3a2b26]"
                    }`}
                   >
                    SUBSCRIBE NOW
                    </button>

                    <p className="mt-3 text-xs font-bold opacity-70 hover:underline text-center cursor-pointer">
                      SAVE 10%
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  </div>
  );
}
