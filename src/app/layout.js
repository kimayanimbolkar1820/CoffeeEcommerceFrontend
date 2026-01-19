"use client";

import "./globals.css";
import { Cinzel_Decorative, Playfair_Display, Inter } from "next/font/google";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import ReduxProvider from "@/redux/ReduxProvider";


const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // pages where navbar & footer should be hidden
  const hideLayout =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgot-password" ||
    pathname === "/otp";

  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${playfair.variable} ${inter.variable}`}
    >
      <body className="bg-black text-white font-sans">
        <ReduxProvider>
        {!hideLayout && <NavbarWrapper />}
       <main className="min-h-screen">
            {children}
          </main>
        {!hideLayout && <Footer />}
       </ReduxProvider>
      </body>
    </html>
  );
}
