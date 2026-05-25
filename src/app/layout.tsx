import type { Metadata } from "next";
import {
  Inter,
  Outfit,
} from "next/font/google";

import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["500", "600", "700", "800"],
});
export const metadata: Metadata = {
  title: "KPZone Stays - Find Your Perfect Stay",
  description:
    "Discover premium hostels and PG accommodations near Greater Noida, Knowledge Park, Pari Chowk, Galgotias University, Sharda University, and G.L. Bajaj. Find affordable student stays with Wi-Fi, food, security, AC rooms, and modern amenities at KPZone Stays.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
