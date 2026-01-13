"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PricingCards() {
  const [isPods, setIsPods] = React.useState(false);

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

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -16, scale: 0.96 },
  };

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:sticky lg:top-24">
            <div className="max-w-sm text-[#e5dfdd]">
              <h1 className="text-4xl sm:text-5xl font-serif leading-tight mb-6">
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
              <div className="flex items-center gap-4">
                <span className={!isPods ? "opacity-100" : "opacity-50"}>
                  Coffee
                </span>

                <div
                  onClick={() => setIsPods(!isPods)}
                  className="relative w-14 h-7 rounded-full bg-white/20 cursor-pointer flex items-center"
                >
                  <motion.div
                    className="w-6 h-6 bg-[#2a1f1b] rounded-full"
                    animate={{ x: isPods ? 26 : 2 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </div>

                <span className={isPods ? "opacity-100" : "opacity-50"}>
                  Pods
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — CARDS */}
          <AnimatePresence mode="wait">
            <motion.div
              key={isPods ? "pods" : "coffee"}
              initial="hidden"
              animate="visible"
              exit="exit"
              // className="
              //   flex flex-col md:flex-row
              //   gap-6 md:gap-8 w-full"
              className="
                flex flex-col md:flex-row
                gap-6 md:gap-8 w-full md:w[100%] lg:w-[125%]"
            >
              {plans.map((plan, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`
                    w-full md:w-[380px]
                    rounded-3xl px-8 py-8
                    text-[#2a1f1b]
                    bg-gradient-to-b ${plan.gradient}
                    shadow-xl
                  `}
                >
                  <p className="uppercase tracking-wide text-xs mb-2">
                    Coffee and Joy
                  </p>

                  <h2 className="text-2xl font-semibold mb-4">
                    {plan.title}
                  </h2>

                  <p className="text-sm opacity-80 mb-6">
                    {plan.description}
                  </p>

                  <p className="text-3xl font-semibold mb-1">
                    {plan.price}
                  </p>
                  <p className="text-xs mb-6">Subscribe today</p>

                  <ul className="text-sm space-y-2 mb-6">
                    <li>✓ Expertly selected & roasted</li>
                    <li>✓ Pause, skip or cancel anytime</li>
                    <li>✓ Always 10% off</li>
                  </ul>

                  <button
                    className={`w-full py-3 rounded-full text-sm font-bold transition-all
                      ${
                        plan.highlight
                          ? "bg-white text-[#542c32] hover:bg-[#f5eaea]"
                          : "bg-[#2a1f1b] text-white hover:bg-[#3a2b26]"
                      }
                    `}
                  >
                    SUBSCRIBE NOW
                  </button>

                  <p className="mt-3 text-xs font-bold opacity-70 text-center hover:underline cursor-pointer">
                    SAVE 10%
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}



// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// export default function PricingCards() {
//   const [isPods, setIsPods] = React.useState(false);

//   const coffeePlans = [
//     {
//       title: "1829 Espresso",
//       price: "$12.00",
//       description:
//         "A flexible monthly coffee subscription charged automatically. Enjoy freshly roasted beans delivered on schedule, with full control to pause, skip, or cancel anytime.",
//       gradient: "from-[#f3e2c7] to-[#e8c39e]",
//     },
//     {
//       title: "Roaster's Spotlight",
//       price: "$15.00",
//       description:
//         "Pay upfront and enjoy a curated coffee journey. Ideal for gifting or long-term savings, with premium roasts delivered consistently for months ahead.",
//       gradient: "from-[#b56a73] to-[#7b3b44]",
//       highlight: true,
//     },
//   ];

//   const podsPlans = [
//     {
//       title: "Autopay Subscription",
//       price: "$10.00",
//       description:
//         "Convenient autopay pod deliveries designed for everyday ease. Perfectly portioned pods arrive regularly, so your coffee routine never misses a beat.",
//       gradient: "from-[#e6d3b1] to-[#c8a57a]",
//     },
//     {
//       title: "Prepaid Subscription",
//       price: "$55.00",
//       description:
//         "Stock up and save with a prepaid pod subscription. A fixed number of premium pods delivered over time, offering great value and consistent quality.",
//       gradient: "from-[#8a4f56] to-[#5c2c32]",
//       highlight: true,
//     },
//   ];

//   const plans = isPods ? podsPlans : coffeePlans;


//   const cardVariants = {
//     hidden: { opacity: 0, y: 24, scale: 0.96 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.45, ease: "easeOut" },
//     },
//     exit: { opacity: 0, y: -16, scale: 0.96 },
//   };

//   return (
//     <section className="w-full">
//       {/* BACKGROUND (overflow locked) */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         {/* <div className="absolute inset-0 bg-[#2a1f1b]/40" /> */}
//         <div className="absolute inset-0 bg-amber-850" />

//         {/* <Image
//           src="/images/bg2.jpg"
//           alt="Coffee Background"
//           fill
//           priority
//           className="object-cover blur-2xl scale-105"
//         /> */}
//       </div>

//       {/* CONTENT */}
//       <div className="z-10 px-10 md:px-16 py-10">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

//           {/* LEFT */}
//           <div className="lg:sticky lg:top-24 self-start">
//             <div className="max-w-sm text-[#e5dfdd] font-bold">
//               <h1 className="text-5xl font-serif leading-tight mb-5 py-3">
//                 Subscribe <br /> today.
//               </h1>

//               <p className="text-sm opacity-80 mb-4">
//                 WatchHouse. YourHouse.
//                 <br />
//                 The modern coffee experience at home.
//               </p>

//               <p className="text-sm mb-8">
//                 Subscribe for a never-ending cup.
//               </p>

//               {/* TOGGLE */}
//               <div className="flex items-center gap-3">
//                 <span className={!isPods ? "opacity-100" : "opacity-50"}>
//                   Coffee
//                 </span>

//                 <div
//                   onClick={() => setIsPods(!isPods)}
//                   className="relative w-14 h-7 rounded-full bg-[#e5dfdd]/30 border border-[#2a1f1b]/40 cursor-pointer flex items-center"
//                 >
//                   <motion.div
//                     className="w-6 h-6 bg-[#2a1f1b] rounded-full"
//                     transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                     animate={{ x: isPods ? 26 : 2 }}
//                   />
//                 </div>

//                 <span className={isPods ? "opacity-100" : "opacity-50"}>
//                   Pods
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT — CARDS */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={isPods ? "pods" : "coffee"}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               // className="flex flex-col md:flex-row gap-6 w-178"
//               className="flex flex-col md:flex-row gap-4 md:gap-8 w-full max-w-7xl ml-0 md:ml-16 lg:ml-24 px-4 sm:px-6 lg:px-0"
//             >
//               {plans.map((plan, i) => (
//                 <motion.div
//                   key={i}
//                   variants={cardVariants}
//                   whileHover={{ y: -6, scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   className={`
//                     w-full max-w-md rounded-3xl px-8 py-8
//                     text-[#2a1f1b] bg-gradient-to-b ${plan.gradient}
//                     shadow-lg
//                   `}
//                 >
//                   <p className="uppercase tracking-wide text-xs mb-2">
//                     Coffee and Joy
//                   </p>

//                   <h2 className="text-2xl font-semibold mb-4">
//                     {plan.title}
//                   </h2>

//                   <p className="text-sm opacity-80 mb-6">
//                     {plan.description}
//                   </p>

//                   <p className="text-3xl font-semibold mb-1">
//                     {plan.price}
//                   </p>
//                   <p className="text-xs mb-6">Subscribe today</p>

//                   <ul className="text-sm space-y-2 mb-6">
//                     <li>✓ Expertly selected & roasted</li>
//                     <li>✓ Pause, skip or cancel anytime</li>
//                     <li>✓ Always 10% off</li>
//                   </ul>

//                   <button
//                     className={`w-full py-3 rounded-full text-sm font-bold transition-all
//                       ${
//                         plan.highlight
//                           ? "bg-white text-[#542c32] hover:bg-[#f5eaea]"
//                           : "bg-[#2a1f1b] text-white hover:bg-[#3a2b26]"
//                       }
//                     `}
//                   >
//                     SUBSCRIBE NOW
//                   </button>

//                   <p className="mt-3 text-xs font-bold opacity-70 text-center hover:underline cursor-pointer">
//                     SAVE 10%
//                   </p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>

//         </div>
//       </div>
//     </section>
//   );
// }


