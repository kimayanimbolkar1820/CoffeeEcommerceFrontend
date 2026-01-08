"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [beans, setBeans] = useState([]);

  /* 🫘 Beans fall on scroll */
  useEffect(() => {
    const onScroll = () => {
      setBeans((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          left: Math.random() * 100,
          duration: Math.random() * 3 + 3,
        },
      ]);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/coffee-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#f3e4d3]/85 backdrop-blur-md" />

      {/* 🫘 Falling beans */}
      {beans.map((bean) => (
        <span
          key={bean.id}
          className="fixed top-0 w-3 h-3 bg-[#5a3a28] rounded-full animate-fall opacity-70 pointer-events-none"
          style={{
            left: `${bean.left}%`,
            animationDuration: `${bean.duration}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-[#3b2418]">

          <div>
            <h3 className="text-2xl font-semibold mb-4">Coffee House</h3>
            <p className="text-sm opacity-90">
              Warm coffee moments crafted with love and aroma.
            </p>
          </div>

          {[
            { title: "Hot Links", items: ["Home", "Menu", "Contact", "About"] },
            {
              title: "More Info",
              items: ["How it works", "About us", "Terms & Conditions"],
            },
            {
              title: "Customer Care",
              items: ["FAQs", "Privacy Policy", "Discount System"],
            },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="transition hover:text-[#3b2418] hover:translate-x-2 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>  

      <div className="relative z-10 w-full">
       <Image
  src="/images/footer1.png"
  alt="Coffee beans"
  width={100}
  height={100}
  className="object-cover"
/>

     
      {/* Bottom */}
      {/* <div className="relative z-10 bg-[#3b2418] text-white text-center py-4 text-sm"> */}
        © 2025 Coffee & Co. All rights reserved.
      </div>
    </footer>
  );
}

