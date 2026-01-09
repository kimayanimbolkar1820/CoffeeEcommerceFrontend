"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";
import navbarData from "./data/navbar.json"; 
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);


 const [scrollState, setScrollState] = useState("top"); // top | mid | past

useEffect(() => {
  const onScroll = () => {
    const y = window.scrollY;
    const heroHeight = window.innerHeight;

    if (y < 80) {
      setScrollState("top");
    } else if (y < heroHeight - 80) {
      setScrollState("mid");
    } else {
      setScrollState("past");
    }
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);


  return (
    <nav className="md:fixed fixed top-0 left-0 z-50 w-full ">
      <div
  className={`flex items-center justify-between px-8 py-5 transition-all duration-300 ${
    scrollState === "top"
      ? "bg-transparent"
      : scrollState === "mid"
      ? "bg-black/30"
      : "bg-black/70 backdrop-blur-xl border-b border-white/20 shadow-lg"
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
  <FiSearch className="hidden md:block" />
  <AiOutlineUser className="hidden md:block" />
  <MdOutlinePhone className="hidden md:block" />

  {/* MOBILE MENU ICON */}
  <button
    className="md:hidden text-2xl"
    onClick={() => setMenuOpen(true)}
    aria-label="Open Menu"
  >
    <RxHamburgerMenu/>
  </button>
</div>

        
      </div>
      {/* MOBILE SLIDE MENU */}
<div
  className={`fixed inset-y-0 right-0 z-[60] w-[85%] max-w-sm bg-black text-white transform transition-transform duration-500 ease-in-out md:hidden ${
    menuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* HEADER */}
  <div className="flex items-center justify-between px-6 py-5 border-b border-white/20">
    <span className="text-lg font-cinzel">Menu</span>
    <button
      className="text-2xl"
      onClick={() => setMenuOpen(false)}
      aria-label="Close Menu"
    >
      ✕
    </button>
  </div>

  {/* NAV ITEMS */}
  <ul className="px-6 py-8 space-y-6 text-lg">
    {navbarData.links.map((link, index) => (
      <li key={index}>
        {/* MAIN LINK */}
        <button
          className="flex w-full items-center justify-between text-left font-medium"
          onClick={() =>
            setActiveMobileDropdown(
              activeMobileDropdown === index ? null : index
            )
          }
        >
          <span>{link.label}</span>
          {link.dropdown && (
            <span className="text-xl">
              {activeMobileDropdown === index ? "−" : "+"}
            </span>
          )}
        </button>

        {/* SUBMENU */}
        {link.dropdown && activeMobileDropdown === index && (
          <div className="mt-4 ml-4 space-y-6">
            {link.dropdown.map((col, i) => (
              <div key={i}>
                <h4 className="text-sm uppercase tracking-widest text-white/70 mb-3">
                  {col.title}
                </h4>
                <ul className="space-y-3 text-white/90">
                  {col.items.map((item, j) => (
                    <li key={j} className="hover:text-white">
                      {item}
                    </li>
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
