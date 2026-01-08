"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#373030f9] text-[#e8d5b7] overflow-hidden">
      {/* Background coffee image - full footer, semi-transparent, dark tinted */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/footerbean.webp"
          alt="Ground coffee and beans background"
          fill
          className="object-cover opacity-[0.18] brightness-[0.65] contrast-[0.9]"
          sizes="(max-width: 768px) 100vw, 85vw"
          quality={82}
          priority={false}
        />
      </div>

      {/* Overlay gradient to improve text readability */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0f0704]/90 via-[#1a0f0a]/75 to-[#1a0f0a]/40" />

      {/* Top golden accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent to-transparent" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 max-w-6xl mx-auto">
          {/* PRODUCTS */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-amber-200 mb-5 tracking-wide">
              PRODUCTS
            </h3>
            <ul className="space-y-3 text-sm text-[#d4b38a]">
              <li><Link href="/products/beans" className="hover:text-amber-300 transition-colors">Whole Beans</Link></li>
              <li><Link href="/products/ground" className="hover:text-amber-300 transition-colors">Ground Coffee</Link></li>
              <li><Link href="/products/capsules" className="hover:text-amber-300 transition-colors">Capsules & Pods</Link></li>
              <li><Link href="/products/instant" className="hover:text-amber-300 transition-colors">Instant Coffee</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-amber-200 mb-5 tracking-wide">
              COMPANY
            </h3>
            <ul className="space-y-3 text-sm text-[#d4b38a]">
              <li><Link href="/about" className="hover:text-amber-300 transition-colors">About Us</Link></li>
              <li><Link href="/our-story" className="hover:text-amber-300 transition-colors">Our Story</Link></li>
              <li><Link href="/sustainability" className="hover:text-amber-300 transition-colors">Sustainability</Link></li>
              <li><Link href="/contact" className="hover:text-amber-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-amber-200 mb-5 tracking-wide">
              SUPPORT
            </h3>
            <ul className="space-y-3 text-sm text-[#d4b38a]">
              <li><Link href="/faq" className="hover:text-amber-300 transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-amber-300 transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/warranty" className="hover:text-amber-300 transition-colors">Warranty</Link></li>
              <li><Link href="/track-order" className="hover:text-amber-300 transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* FOLLOW US */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-amber-200 mb-5 tracking-wide">
              FOLLOW US
            </h3>

            <div className="flex gap-5">
              <a
                img="FaFacebookF"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-transform hover:scale-110"
              >
                <div className="w-10 h-10 rounded-full via-[#dd2a7b] to-[#8134af] p-0.5">
                  <div className="w-full h-full rounded-full bg-[#1a0f0a] flex items-center justify-center">
                    <span className="text-white text-lg font-medium"><FaFacebookF /></span>
                  </div>
                </div>
              </a>

              <a
                img="GrInstagram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label=" Instagram"
                className="transition-transform hover:scale-110"
              >
                <div className="w-10 h-10 rounded-full  bg-[#1a0f0a] flex items-center justify-center">
                  <span className="text-white text-2xl font-bold"><GrInstagram/></span>
                </div>
              </a>

              <a
                img="FaTwitter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="transition-transform hover:scale-110"
              >
                <div className="w-10 h-10 rounded-full  bg-[#1a0f0a] flex items-center justify-center">
                  <span className="text-white text-2xl"><FaTwitter/></span>
                </div>
              </a>

              <a 
              img="FaYoutube"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FaYoutube"
              className="transition-transform hover:scale-110">

                <div className="w-10 h-10 rounded-full bg-[#1a0f0a] flex items-center justify-center">
                  <span className="text-white text-2xl"><FaYoutube/></span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-amber-900/30 text-center text-sm text-[#d4b38a]/80">
          <p>© {new Date().getFullYear()} Your Coffee Brand • Handcrafted with passion in India</p>
        </div>
      </div>
    </footer>
  );
}
