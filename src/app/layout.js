import Navbar from "@/components/Navbar";
import "./globals.css";
import { Cinzel_Decorative, Playfair , Inter } from "next/font/google";

const  cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400","700"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});
const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body className="bg-black text-white font-inter">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
