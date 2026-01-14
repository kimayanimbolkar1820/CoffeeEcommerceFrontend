"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const FOOTER_SECTIONS = [
    {
      title: "PRODUCTS",
      links: [
        { name: "Whole Beans", href: "#" },
        { name: "Ground Coffee", href: "#" },
        { name: "Capsules & Pods", href: "#" },
        { name: "Instant Coffee", href: "#" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Story", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { name: "FAQ", href: "#" },
        { name: "Shipping", href: "#" },
        { name: "Warranty", href: "#" },
        { name: "Track Order", href: "#" },
      ],
    },
  ];

  const SOCIAL_LINKS = [
    { icon: <FaFacebookF />, label: "Facebook" },
    { icon: <FaInstagram />, label: "Instagram" },
    { icon: <FaTwitter />, label: "Twitter" },
    { icon: <FaYoutube />, label: "YouTube" },
  ];

  const submitEvent = () => {
    if (!email) return alert("Please enter your email");
    setLoading(true);

    setTimeout(() => {
      alert("Subscribed successfully!");
      setEmail("");
      setLoading(false);
    }, 1200);
  };

  return (
    <footer className="relative bg-[#373030f9] text-[#e8d5b7] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/footerbean.webp"
          alt="Coffee background"
          fill
          className="object-cover opacity-[0.18] brightness-[0.65]"
          sizes="100vw"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0704]/90 via-[#1a0f0a]/70 to-[#1a0f0a]/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* BRAND */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-amber-200">
              COFFEE & JOY
            </h2>

            <p className="mt-3 max-w-md mx-auto md:mx-0 text-sm leading-relaxed pt-2 pb-5">
              Crafting exceptional coffee experiences since 2025.
              From bean to cup, we are dedicated to quality,
              sustainability, and the art of coffee.
            </p>

            <div className="mt-6">
              <h4 className="text-sm tracking-widest text-amber-200 mb-3">
                FOLLOW US
              </h4>
              <div className="flex gap-4 justify-center md:justify-start">
                {SOCIAL_LINKS.map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={item.label}
                    className="w-11 h-11 rounded-full bg-[#1a0f0a] border border-amber-900/40
                    flex items-center justify-center hover:border-amber-300 transition"
                  >
                    <span className="text-white text-lg">{item.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-10">
            {FOOTER_SECTIONS.map((section, index) => (
              <div
                key={section.title}
                className="border-b border-amber-900/30 md:border-none pb-4 md:pb-0"
              >
                {/* Mobile Accordion Header */}
                <button
                  onClick={() =>
                    setOpenSection(openSection === index ? null : index)
                  }
                  className="w-full flex justify-between items-center md:hidden
                  text-amber-200 text-lg font-semibold"
                >
                  {section.title}

                  <span
                    className={`transition-transform duration-300
                    ${openSection === index ? "rotate-180" : "rotate-0"}`}
                  >
                    <FaChevronDown />
                  </span>
                </button>

                {/* Desktop Title */}
                <h3 className="hidden md:block text-lg font-semibold text-amber-200 mb-4">
                  {section.title}
                </h3>

                {/* Links */}
                <ul
                  className={`space-y-2 text-sm text-[#d4b38a] mt-3
                  ${openSection === index ? "block" : "hidden"} md:block`}
                >
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="block py-1 hover:text-amber-300 transition"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-16 md:mt-20 flex justify-center">
          <div className="w-full max-w-lg text-center">
            <h3 className="text-xl font-semibold text-amber-200 mb-4">
              Subscribe to our newsletter
            </h3>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 rounded-full bg-transparent border border-[#e8d5b7]/50 text-sm focus:outline-none focus:border-amber-300"
            />

            <button
              onClick={submitEvent}
              className="mt-5 w-full rounded-full bg-[#ffe6d8] py-3 font-bold text-[#4b2e1f]
              transition-all duration-300 hover:bg-[#f7d6c4] hover:scale-[1.03] hover:shadow-lg active:scale-95"
            >
              {loading ? "Submitting..." : "Subscribe"}
            </button>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 pt-6 border-t border-amber-900/30 text-sm text-[#d4b38a]/80 text-center">
          © {new Date().getFullYear()} Coffee & Joy • Handcrafted with passion in India
        </div>
      </div>
    </footer>
  );
}