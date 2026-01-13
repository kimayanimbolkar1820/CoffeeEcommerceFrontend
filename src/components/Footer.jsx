"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const SubmitEvent = () => {
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
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0704]/90 via-[#1a0f0a]/70 to-[#1a0f0a]/40" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold text-amber-200">
              COFFEE & JOY
            </h2>

            <p className="mt-3 max-w-md text-sm leading-relaxed pt-2 pb-5">
              Crafting exceptional coffee experiences since 2025.
              From bean to cup, we are dedicated to quality,
              sustainability, and the art of coffee.
            </p>

            {/* SOCIAL */}
            {/* <div className="mt-6" */}
            <div className="mt-6 mb-3">
              <h4 className="text-sm tracking-widest text-amber-200 mb-3 pb-3">
                FOLLOW US
              </h4>
              <div className="flex gap-4">
                <SocialIcon
                  icon={<FaFacebookF />}
                  label="Facebook"
                  className="border-2 border-brown-600 p-3 rounded-full text-brown-600 font-bold text-xl"/>
                
                <SocialIcon
                  icon={<FaInstagram />}
                  label="Instagram"
                  className="border-2 border-brown-600 p-3 rounded-full text-brown-600 font-bold text-xl"/>
  
                <SocialIcon
                  icon={<FaTwitter />}
                  label="Twitter"
                  className="border-2 border-brown-600 p-3 rounded-full text-brown-600 font-bold text-xl"/>

                <SocialIcon
                 icon={<FaYoutube />}
                 label="YouTube"
                 className="border-2 border-brown-600 p-3 rounded-full text-brown-600 font-bold text-xl"/>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <FooterColumn
              title="PRODUCTS"
              links={[
                { name: "Whole Beans", href: "#" },
                { name: "Ground Coffee", href: "#" },
                { name: "Capsules & Pods", href: "#" },
                { name: "Instant Coffee", href: "#" },
              ]}
            />
            <FooterColumn
              title="COMPANY"
              links={[
                { name: "About Us", href: "#" },
                { name: "Our Story", href: "#" },
                { name: "Sustainability", href: "#" },
                { name: "Contact", href: "#" },
              ]}
            />
            <FooterColumn
              title="SUPPORT"
              links={[
                { name: "FAQ", href: "#" },
                { name: "Shipping", href: "#" },
                { name: "Warranty", href: "#" },
                { name: "Track Order", href: "#" },
              ]}
            />
          </div>
        </div>

        {/* NEWSLETTER – CENTER BOTTOM */}
        <div className="mt-20 flex justify-center font-inter">
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
              onClick={SubmitEvent}
              className=" mt-5 w-full rounded-full underline-offset-2 bg-[#ffe6d8] py-3 font-bold text-[#4b2e1f] font-medium cursor-pointer
               transition-all duration-300 ease-out hover:bg-[#f7d6c4] hover:scale-[1.03] hover:shadow-lg active:scale-95 active:shadow-md"
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

/* Footer column */
function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-amber-200 mb-4">
        {title}
      </h3>
      <ul className="space-y-2 text-sm text-[#d4b38a]">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="hover:text-amber-300 transition">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Social Icon */
function SocialIcon({ icon, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-11 h-11 rounded-full bg-[#1a0f0a] border border-amber-900/40 flex items-center justify-center hover:border-amber-300 transition"
    >
      <span className="text-white text-lg">{icon}</span>
    </a>
  );
}
