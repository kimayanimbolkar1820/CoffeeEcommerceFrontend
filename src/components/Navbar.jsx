"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlinePhone } from "react-icons/md";

import navbarData from "@/data/navbar.json";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrollState, setScrollState] = useState("top");
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  /* ================= SCROLL ================= */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const heroHeight = window.innerHeight;

      if (y < 80) setScrollState("top");
      else if (y < heroHeight - 80) setScrollState("mid");
      else setScrollState("past");
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      {/* ================= DESKTOP NAVBAR ================= */}
      <div
        className={clsx(
          "flex items-center justify-between px-8 py-5 transition-all duration-300",
          {
            "bg-transparent": scrollState === "top",
            "bg-black/30 backdrop-blur-lg": scrollState === "mid",
            "bg-black/70 backdrop-blur-2xl border-b border-white/20 shadow-lg":
              scrollState === "past",
          }
        )}
      >
        {/* LOGO */}
        <Link href="/">
          <div className="text-xl font-cinzel text-white cursor-pointer whitespace-nowrap">
            Coffee & Joy
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-10 text-sm font-medium font-cinzel text-white">
          {navbarData.links.map((link, index) => (
            <li key={index} className="relative group">
              <NavLink href={link.href}>{link.label}</NavLink>

              {Array.isArray(link.dropdown) && (
                <DropdownContainer scrollState={scrollState}>
                  <div className="grid grid-cols-3 gap-10 p-10">
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

        {/* RIGHT ICONS */}
        <div className="relative flex items-center text-white">
          {/* DESKTOP SEARCH */}
          <div
            className={clsx(
              "hidden md:flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 overflow-hidden",
              searchOpen
                ? "w-64 bg-black/60 border-white/30"
                : "w-10 border-transparent"
            )}
          >
            <button onClick={() => setSearchOpen((p) => !p)}>
              <FiSearch />
            </button>

            {searchOpen && (
              <input
                autoFocus
                type="text"
                placeholder="Search coffee, beans..."
                className="bg-transparent outline-none text-sm text-white placeholder-white/50 w-full"
                onBlur={() => setSearchOpen(false)}
              />
            )}
          </div>

          {/* DESKTOP ICONS */}
          <div className="hidden md:flex items-center gap-6 ml-6">
            <Link href="/Auth/login">
              <AiOutlineUser className="text-xl" />
            </Link>
            <MdOutlinePhone className="text-xl" />
            <Link href="/cart">
              <HiOutlineShoppingBag className="text-xl hover:scale-110 transition" />
            </Link>
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden ml-4 text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={clsx(
          "fixed inset-y-0 right-0 z-[60] w-[85%] max-w-sm bg-black text-white transform transition-transform duration-500 md:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/20">
          <span className="text-lg font-cinzel">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-2xl p-2 rounded-full font-bold cursor-pointer
                       transition transform hover:scale-75 active:scale-95"

            onClick={() => {
              setMenuOpen(false);
              setOpenMobileDropdown(null);
            }}
            className="text-2xl p-3 rounded-full font-bold hover:scale-75 active:scale-95 transition"

          >
            ✕
          </button>
        </div>

        {/* MENU CONTENT */}

        <nav className="px-8 py-5 cursor-pointer space-y-6 overflow-y-auto h-full pb-32">

        <nav className="px-6 py-6 space-y-6 overflow-y-auto h-full pb-32">

          {navbarData.links.map((link, index) => {
            const isOpen = openMobileDropdown === index;

            return (
              <div key={index} className="border-b border-white/10 pb-4">
                <button
                  className="flex items-center justify-between w-full text-left text-lg font-cinzel"
                  onClick={() =>
                    setOpenMobileDropdown(isOpen ? null : index)
                  }
                >
                  {link.label}
                  {link.dropdown && <span>{isOpen ? "−" : "+"}</span>}
                </button>

                {link.dropdown && (
                  <div
                    className={clsx(
                      "grid gap-6 overflow-hidden transition-all duration-300",
                      isOpen ? "max-h-[800px] mt-6" : "max-h-0"
                    )}
                  >
                    {link.dropdown.map((col, i) => (
                      <div key={i}>
                        <h4 className="text-sm mb-3 text-white/70 uppercase">
                          {col.title}
                        </h4>
                        <ul className="space-y-2">
                          {col.items.map((item, j) => (
                            <li key={j}>
                              <Link
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="block text-white/80 hover:text-white transition"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* MOBILE ICONS */}
          <div className="flex gap-6 pt-6">
            <Link href="/login">
              <AiOutlineUser className="text-2xl" />
            </Link>


            <Link
              href="/cart"
              className="flex items-center justify-center pr-2 cursor-pointer text-white/80 transition transform hover:scale-75 active:scale-115"
            >
              <HiOutlineShoppingBag className="text-2xl font-bold" />

            <Link href="/cart">
              <HiOutlineShoppingBag className="text-2xl" />

            </Link>
          </div>
        </nav>
      </div>
    </nav>
  );
}

/* ================= HELPERS ================= */

function DropdownContainer({ children, scrollState }) {
  return (
    <div
      className={clsx(
        "fixed top-[88px] left-12 right-12 rounded-2xl z-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all",
        scrollState === "top"
          ? "bg-black/30 backdrop-blur-lg"
          : "bg-black/70 backdrop-blur-2xl border border-white/20"
      )}
    >
      {children}
    </div>
  );
}

function DropdownColumn({ title, children }) {
  return (
    <div>
      <h4 className="text-2xl mb-5 text-white">{title}</h4>
      <ul className="space-y-3 text-white/80">{children}</ul>
    </div>
  );
}

function DropdownItem({ label }) {
  return (
    <li className="hover:text-white hover:translate-x-2 transition">
      <Link href="#">{label}</Link>
    </li>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all group-hover:after:w-full"
    >
      {children}
    </Link>
  );
}
