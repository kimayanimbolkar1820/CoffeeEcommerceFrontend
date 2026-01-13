"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

import navbarData from "@/data/navbar.json";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [scrollState, setScrollState] = useState("top"); // top | mid | past

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
      {/* ================= NAV BAR ================= */}
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
        <div
          className={clsx(
            "text-xl font-semibold font-cinzel transition-colors",
            scrollState === "top" ? "text-white" : "text-white/90"
          )}
        >
          Coffee & Joy
        </div>

        {/* ================= DESKTOP NAV ================= */}
        <ul className="hidden md:flex gap-10 text-sm font-medium font-cinzel text-white">
          {(navbarData?.links ?? []).map((link, index) => (
            <li key={index} className="relative group">
              <NavLink href={link.href}>{link.label}</NavLink>

              {/* MEGA DROPDOWN */}
              {Array.isArray(link.dropdown) && (
                <DropdownContainer scrollState={scrollState}>
                  <div
                    className={clsx(
                      "grid gap-10 p-10 text-base",
                      link.dropdown.length > 3
                        ? "grid-cols-4"
                        : "grid-cols-3"
                    )}
                  >
                    {link.dropdown.map((col, i) => (
  <DropdownColumn key={i} title={col.title}>
    {(col.items ?? []).map((item, j) => (
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

        {/* ================= ICONS ================= */}
        <div
          className={clsx(
            "flex items-center gap-6 text-xl transition-colors",
            scrollState === "top" ? "text-white" : "text-white/90"
          )}
        >
          <FiSearch className="hidden md:block" />
          <AiOutlineUser className="hidden md:block" />
          <MdOutlinePhone className="hidden md:block" />

          {/* MOBILE MENU */}
          <button
            className="md:hidden text-2xl"
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
          <button className="text-2xl" onClick={() => setMenuOpen(false)}>
            ✕
          </button>
        </div>

        {/* LINKS */}
        <ul className="px-6 py-8 space-y-6 text-lg">
          {(navbarData?.links ?? []).map((link, index) => (
            <li key={index}>
              <button
                className="flex w-full justify-between items-center"
                onClick={() =>
                  setActiveMobileDropdown(
                    activeMobileDropdown === index ? null : index
                  )
                }
              >
                <span>{link.label}</span>
                {link.dropdown && (
                  <span>{activeMobileDropdown === index ? "−" : "+"}</span>
                )}
              </button>

              {Array.isArray(link.dropdown) &&
                activeMobileDropdown === index && (
                  <div className="mt-4 ml-4 space-y-6">
                    {link.dropdown.map((col, i) => (
                      <div key={i}>
                        <h4 className="text-sm uppercase tracking-widest text-white/70 mb-3">
                          {col.title}
                        </h4>
                        <ul className="space-y-3 text-white/90">
                          {(col.items ?? []).map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* ================= DROPDOWN ================= */
function DropdownContainer({ children, scrollState }) {
  return (
    <div
      className={clsx(
        "fixed top-[88px] left-12 right-12 z-40 rounded-2xl flex justify-center items-start p-8 transition-all duration-300 ease-out opacity-0 invisible group-hover:opacity-100 group-hover:visible",
        scrollState !== "top"
          ? "bg-black/70 backdrop-blur-2xl border border-white/20 shadow-2xl"
          : "bg-black/20 backdrop-blur-lg border border-white/20"
      )}
    >
      <div className="w-full max-h-[calc(100vh-220px)] overflow-auto">
        {children}
      </div>
    </div>
  );
}

/* ================= HELPERS ================= */
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

function DropdownItem({ label }) {
  return (
    <li>
      <Link
        href="#"
        className="block transition-all duration-200 hover:text-white hover:translate-x-2"
      >
        {label}
      </Link>
    </li>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"
    >
      {children}
    </Link>
  );
}
