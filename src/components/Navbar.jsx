"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div
        className={`flex items-center justify-between px-8 py-5 transition-all duration-500
        ${
          scrolled
            ? "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* LOGO */}
        <div className="text-xl font-semibold text-white">
          Coffee & Joy
        </div>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-10 text-sm text-white font-medium">

          {/* COFFEE */}
          <li className="relative group">
            <NavLink href="/coffee">COFFEE</NavLink>

            <DropdownContainer width="w-[450px]">
              <div className="grid grid-cols-3 gap-6 p-6 text-sm">

                <DropdownColumn title="Beans & Grounds">
                  <DropdownItem label="Whole Bean" />
                  <DropdownItem label="Ground Coffee" />
                  <DropdownItem label="Single Origin" />
                  <DropdownItem label="Blends" />
                  <DropdownItem label="Flavoured" />
                  <DropdownItem label="Decaf" />
                </DropdownColumn>

                <DropdownColumn title="Pods & Capsules">
                  <DropdownItem label="Coffee Pods" />
                  <DropdownItem label="Coffee Capsules" />
                  <DropdownItem label="Espresso Pods" />
                  <DropdownItem label="Compatible Pods" />
                </DropdownColumn>

                <DropdownColumn title="Instant">
                  <DropdownItem label="Classic Instant" />
                  <DropdownItem label="Speciality Instant" />
                  <DropdownItem label="Flavoured Instant" />
                </DropdownColumn>

              </div>
            </DropdownContainer>
          </li>

          {/* MACHINES */}
          <li className="relative group">
            <NavLink href="/machines">MACHINES</NavLink>

            <DropdownContainer width="w-[520px]">
              <div className="grid grid-cols-4 gap-6 p-6 text-sm">

                <DropdownColumn title="Espresso">
                  <DropdownItem label="Semi Automatic" />
                  <DropdownItem label="Fully Automatic" />
                  <DropdownItem label="Commercial" />
                  <DropdownItem label="Manual" />
                </DropdownColumn>

                <DropdownColumn title="Capsule">
                  <DropdownItem label="Nespresso" />
                  <DropdownItem label="Dolce Gusto" />
                  <DropdownItem label="Multi Pod" />
                </DropdownColumn>

                <DropdownColumn title="Drip">
                  <DropdownItem label="Basic Drip" />
                  <DropdownItem label="Pour Over" />
                  <DropdownItem label="With Grinder" />
                </DropdownColumn>

                <DropdownColumn title="Manual">
                  <DropdownItem label="French Press" />
                  <DropdownItem label="AeroPress" />
                  <DropdownItem label="Moka Pot" />
                </DropdownColumn>

              </div>
            </DropdownContainer>
          </li>

          {/* ACCESSORIES */}
          <li className="relative group">
            <NavLink href="/accessories">ACCESSORIES</NavLink>

            <DropdownContainer width="w-56">
              <ul className="p-4 space-y-3 text-white/90 text-sm">
                <li><Link href="#">Mugs</Link></li>
                <li><Link href="#">Filters</Link></li>
                <li><Link href="#">Brewers</Link></li>
              </ul>
            </DropdownContainer>
          </li>

        <li className="relative group">
  <NavLink href="/about">ABOUT US</NavLink>
</li>

<li className="relative group">
  <NavLink href="/subscription">SUBSCRIPTION</NavLink>
</li>

        </ul>

        {/* ICONS */}
        <div className="flex items-center gap-6 text-white text-xl">
          <FiSearch />
          <AiOutlineUser />
          <MdOutlinePhone />
        </div>
      </div>
    </nav>
  );
}

/* ===== Reusable centered dropdown container ===== */
function DropdownContainer({ children, width }) {
  return (
    <div
      className={`absolute top-full mt-6
      left-1/2 -translate-x-1/2
      ${width} max-w-[90vw]
      rounded-xl bg-white/10 backdrop-blur-xl
      border border-white/20 shadow-lg
      opacity-0 invisible group-hover:opacity-100
      group-hover:visible transition-all duration-300`}
    >
      {children}
    </div>
  );
}

/* ===== Helpers ===== */
function DropdownColumn({ title, children }) {
  return (
    <div>
      <h4 className="font-semibold mb-3">{title}</h4>
      <ul className="space-y-2 text-white/80">{children}</ul>
    </div>
  );
}

function DropdownItem({ label }) {
  return (
    <li>
      <Link href="#" className="hover:text-white">
        {label}
      </Link>
    </li>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="
        relative inline-block
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0
        after:bg-[#fffefd]
        after:transition-all after:duration-300
        group-hover:after:w-full
      "
    >
      {children}
    </Link>
  );
}
