import Navbar from "@/components/Navbar";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import { Playfair_Display, Inter } from "next/font/google";

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
  return (
    <html lang="en" className={playfair.variable} suppressHydrationWarning>
      <body className="font-serif bg-black text-white">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer /> 
        </ThemeProvider>
       
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="bg-black text-white font-inter">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
