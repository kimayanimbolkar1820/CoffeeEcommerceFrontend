"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";
import navbarData from "./data/navbar.json"; 

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
        className={`flex items-center justify-between px-8 py-5 transition-all duration-500 ${
          scrolled
            ? "bg-black/50 backdrop-blur-2xl border-b border-white/30 shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* LOGO */}
        <div className="text-xl font-semibold text-white font-cinzel">Coffee & Joy</div>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-10 text-sm text-white font-medium font-cinzel">
          {navbarData.links.map((link, index) => (
            <li key={index} className="relative group">
              <NavLink href={link.href}>{link.label}</NavLink>

              {link.dropdown && (
                <DropdownContainer scrolled={scrolled}>
                  <div
                    className={`grid gap-10 p-10 text-base ${
                      link.dropdown.length > 3 ? "grid-cols-4" : "grid-cols-3"
                    }`}
                  >
                    {link.dropdown.map((col, i) => (
                      <DropdownColumn key={i} title={col.title}>
                        {col.items.map((item, j) => (
                          <DropdownItem key={j} label={item} />
                        ))}
                      </DropdownColumn>
                    ))}
                  </div>
                </DropdownContainer>
              )}
            </li>
          ))}
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


/* ===== Reusable dropdown container ===== */
function DropdownContainer({ children, scrolled }) {
  return (
    <div
      className={`fixed top-[70px] left-10 right-10 z-40 rounded-2xl flex justify-center items-start p-8 transition-all duration-300 ease-out opacity-0 invisible group-hover:opacity-100 group-hover:visible ${
        scrolled
          ? "bg-black/60 backdrop-blur-2xl border border-white/20 shadow-2xl"
          : "bg-white/10 backdrop-blur-2xl border border-white/30 shadow-2xl"
      }`}
    >
      <div className="w-full h-[600px] max-h-[calc(100vh-200px)] overflow-auto">
        {children}
      </div>
    </div>
  );
}

/* ===== Dropdown column ===== */
function DropdownColumn({ title, children }) {
  return (
    <div>
      <h4 className="text-2xl font-semibold mb-6 tracking-wide text-white">
        {title}
      </h4>
      <ul className="space-y-4 text-white/80 text-lg">{children}</ul>
    </div>
  );
}

/* ===== Dropdown item ===== */
function DropdownItem({ label }) {
  return (
    <li>
      <Link
        href="#"
        className="block text-lg transition-all duration-200 hover:text-white hover:translate-x-2"
      >
        {label}
      </Link>
    </li>
  );
}

/* ===== NavLink ===== */
function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#fffefd] after:transition-all after:duration-300 group-hover:after:w-full"
    >
      {children}
    </Link>
  );
}
