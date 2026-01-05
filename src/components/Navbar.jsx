"use client";

import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="flex items-center justify-between px-8 py-5 bg-transparent backdrop-blur-md">
        
        {/* LEFT – LOGO */}
        <div className="text-xl font-semibold text-white">
          Coffee & Joy
        </div>

        {/* CENTER – NAV LINKS */}
        <ul className="hidden md:flex gap-10 text-sm text-white font-medium">
          <li><Link href="/coffee">Coffee</Link></li>
          <li><Link href="/machines">Machines</Link></li>
          <li><Link href="/accessories">Accessories</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/subscription">Subscription</Link></li>
        </ul>

        {/* RIGHT – ICONS */}
        <div className="flex items-center gap-6 text-white text-xl">
          <FiSearch className="cursor-pointer hover:opacity-80" />
          <AiOutlineUser className="cursor-pointer hover:opacity-80" />
          <MdOutlinePhone className="cursor-pointer hover:opacity-80" />
        </div>

      </div>
    </nav>
  );
}
