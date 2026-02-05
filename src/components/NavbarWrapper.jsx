"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  const hideNavbar =
  // pathname.startsWith("/account")
    pathname === "/Auth/login" ||
    pathname === "/Auth/signup" ||
    pathname === "/Auth/forgot-password";

  if (hideNavbar) return null;

  return <Navbar />;
}
