"use client";

import React from "react";
import Image from "next/image";

export default function PricingCards() {
  const [isPods, setIsPods] = React.useState(false);

  const plans = [
    {
      title: "1829 Espresso",
      price: "$12.00",
      description:
        "This customer favourite is a cup of a customer routine. Pairs great with milk and provides hints of grape and caramel.",
      gradient: "from-[#f3e2c7] to-[#e8c39e]",
    },
    {
      title: "Roaster's Spotlight",
      price: "$15.00",
      description:
        "Explore the best of our single origin roasts, with a new & different taste delivered every month.",
      gradient: "from-[#b56a73] to-[#7b3b44]",
      highlight: true,
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background overlays */}
      <div className="absolute inset-0 bg-[#2a1f1b]/40 z-0" />
      <div className="absolute inset-0 bg-[#faf6ef]/75 z-0" />

      <Image
        src="/images/bg2.jpg"
        alt="Coffee Background"
        fill
        priority
        className="absolute inset-0 object-cover object-center scale-110 blur-2xl animate-bgZoom z-0"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full max-w-7xl mx-auto">

          {/* LEFT SIDE — TEXT */}
          <div className="flex items-center ">
            <div className="max-w-sm text-[#e5dfdd] font-bold">
              <h1 className="text-5xl font-serif leading-tight mb-5">
                Subscribe <br /> today.
              </h1>

              <p className="text-sm opacity-80 mb-4">
                WatchHouse. YourHouse.
                <br />
                The modern coffee experience in the comfort of your own home.
              </p>

              <p className="text-sm mb-8">
                Subscribe for a never-ending cup.
              </p>

              {/* Toggle */}
              <div className="flex items-center gap-3 select-none">
                <span
                  className={`text-sm font-medium transition-opacity duration-300 ${
                    isPods ? "opacity-50" : "opacity-100"
                  }`}
                >
                  Coffee
                </span>

                <div
                  onClick={() => setIsPods(!isPods)}
                  className={`
                    relative w-14 h-7 rounded-full cursor-pointer border-2 
                    transition-all duration-300 ease-out border-amber-50
                    active:scale-90 hover:scale-105
                    ${
                      isPods
                        ? "bg-[#e5dfdd]/40 border-[#2a1f1b]"
                        : "bg-[#e5dfdd]/20 border-[#2a1f1b]/30"
                    }
                  `}
                >
                  <div
                    className={`
                      absolute top-0.6 w-7 h-6 bg-[#2a1f1b] rounded-full
                      transition-all duration-300 ease-out
                      ${isPods ? "left-7" : "left-1"}
                    `}
                  />
                </div>

                <span
                  className={`text-sm transition-opacity duration-300 ${
                    isPods ? "opacity-100 font-medium" : "opacity-60"
                  }`}
                >
                  Pods
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — PRICING CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -ml-30 items-center 
          w-200 left-60   ">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`
                  rounded-4xl p-8 text-center text-[#2a1f1b] h-120 
                  bg-linear-to-b ${plan.gradient}
                  transition-all duration-300 ease-in cursor-pointer
                  hover:-translate-y-1 hover:shadow-xl
                  active:translate-y-0 active:scale-95
                  shadow-3xl backdrop-blur-sm
                `}
              >
                <p className="uppercase tracking-wide text-xs mb-2">
                  WatchHouse
                </p>

                <h2 className="text-2xl font-semibold mb-4">
                  {plan.title}
                </h2>

                <p className="text-sm opacity-80 leading-relaxed mb-6">
                  {plan.description}
                </p>

                <p className="text-3xl font-semibold mb-1">
                  {plan.price}
                </p>
                <p className="text-xs mb-6">Subscribe today</p>

                <ul className="text-sm space-y-2 mb-8">
                  <li>✓ Expertly selected & roasted</li>
                  <li>✓ Pause, skip or cancel anytime</li>
                  <li>✓ Always 10% off</li>
                </ul>

                <button
                  className={`
                    w-full py-3 rounded-full text-sm font-semibold
                    transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:shadow-xl
                    active:scale-95
                    ${
                      plan.highlight
                        ? "bg-white text-[#7b3b4] hover:shadow-[#7b3b44]/30"
                        : "bg-[#2a1f1b] text-white hover:shadow-black/40"
                    }
                  `}
                >
                  SUBSCRIBE NOW
                </button>

                <p className="mt-3 text-xs font-semibold opacity-70 hover:opacity-100 hover:underline cursor-pointer">
                  SAVE 10%
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
