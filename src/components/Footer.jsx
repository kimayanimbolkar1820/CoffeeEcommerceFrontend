"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="relative bg-[#373030f9] text-[#e8d5b7] overflow-hidden">
      
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/footerbean.webp"
          alt="Ground coffee and beans background"
          fill
          className="object-cover opacity-[0.18] brightness-[0.65] contrast-[0.9]"
          sizes="100vw"
          quality={80}
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0f0704]/90 via-[#1a0f0a]/75 to-[#1a0f0a]/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          
          {/* PRODUCTS */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-amber-200 mb-5">
              PRODUCTS
            </h3>
            <ul className="space-y-3 text-sm text-[#d4b38a]">
              <li><Link href="/products/beans" className="hover:text-amber-300">Whole Beans</Link></li>
              <li><Link href="/products/ground" className="hover:text-amber-300">Ground Coffee</Link></li>
              <li><Link href="/products/capsules" className="hover:text-amber-300">Capsules & Pods</Link></li>
              <li><Link href="/products/instant" className="hover:text-amber-300">Instant Coffee</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-amber-200 mb-5">
              COMPANY
            </h3>
            <ul className="space-y-3 text-sm text-[#d4b38a]">
              <li><Link href="/about" className="hover:text-amber-300">About Us</Link></li>
              <li><Link href="/our-story" className="hover:text-amber-300">Our Story</Link></li>
              <li><Link href="/sustainability" className="hover:text-amber-300">Sustainability</Link></li>
              <li><Link href="/contact" className="hover:text-amber-300">Contact</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-amber-200 mb-5">
              SUPPORT
            </h3>
            <ul className="space-y-3 text-sm text-[#d4b38a]">
              <li><Link href="/faq" className="hover:text-amber-300">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-amber-300">Shipping & Returns</Link></li>
              <li><Link href="/warranty" className="hover:text-amber-300">Warranty</Link></li>
              <li><Link href="/track-order" className="hover:text-amber-300">Track Order</Link></li>
            </ul>
          </div>

          {/* FOLLOW US */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-amber-200 mb-5">
              FOLLOW US
            </h3>

            <div className="flex gap-5">
              <SocialIcon label="Facebook" icon={<FaFacebookF />} />
              <SocialIcon label="Instagram" icon={<GrInstagram />} />
              <SocialIcon label="Twitter" icon={<FaTwitter />} />
              <SocialIcon label="YouTube" icon={<FaYoutube />} />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-amber-900/30 text-center text-sm text-[#d4b38a]/80">
          © {new Date().getFullYear()} Your Coffee Brand • Handcrafted with passion in India
        </div>
      </div>
    </footer>
  );
}

/* Reusable social icon */
function SocialIcon({ icon, label }) {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="transition-transform hover:scale-110"
    >
      <div className="w-10 h-10 rounded-full bg-[#1a0f0a] flex items-center justify-center">
        <span className="text-white text-lg">{icon}</span>
      </div>
    </a>
  );
}
