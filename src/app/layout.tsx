import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";

import "./globals.css";
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
  metadataBase: new URL("https://www.kpzonestays.com"),
  title: {
    default: "KPZone Stays | Best Hostels & PG in Greater Noida Near Galgotias, Sharda & GL Bajaj",
    template: "%s | KPZone Stays",
  },
  description:
  "Discover premium hostels and PG accommodations in Greater Noida near Knowledge Park, Pari Chowk, Galgotias University, Sharda University, G.L. Bajaj, Bennett University, and Noida International University. Book affordable boys' and girls' hostels with Wi-Fi, AC rooms, meals, 24x7 security, laundry, and modern amenities at KPZone Stays.",
  icons: {
    icon: "./favicon.ico",
    shortcut: "./favicon.ico",
    
  },
  keywords: [
  // Brand
  "KPZone Stays",
  "kpzonestays",
  "KPZone",

  // Primary Keywords
  "hostel in Greater Noida",
  "PG in Greater Noida",
  "student accommodation Greater Noida",
  "boys hostel Greater Noida",
  "girls hostel Greater Noida",
  "best hostel in Greater Noida",
  "best PG in Greater Noida",
  "affordable hostel Greater Noida",
  "budget PG Greater Noida",
  "luxury hostel Greater Noida",

  // Knowledge Park
  "hostel near Knowledge Park",
  "PG near Knowledge Park",
  "boys hostel Knowledge Park",
  "girls hostel Knowledge Park",

  // Pari Chowk
  "hostel near Pari Chowk",
  "PG near Pari Chowk",

  // Universities
  "hostel near Galgotias University",
  "PG near Galgotias University",
  "hostel near Sharda University",
  "PG near Sharda University",
  "hostel near GL Bajaj",
  "PG near GL Bajaj",
  "hostel near Bennett University",
  "PG near Bennett University",
  "hostel near Noida International University",
  "PG near Noida International University",

  // Facilities
  "AC hostel Greater Noida",
  "hostel with WiFi",
  "hostel with food",
  "fully furnished PG",
  "student hostel with meals",
  "safe girls hostel",
  "24x7 security hostel",
  "hostel with parking",
  "hostel with laundry",
  "hostel with power backup",

  // Search Intent
  "hostels near me",
  "PG near me",
  "student hostel",
  "college hostel",
  "student living Greater Noida",
  "student rental Greater Noida",
  "co-living Greater Noida",
  "hostel booking Greater Noida",
  "book PG online",
  "verified hostel Greater Noida",
],
    authors: [{ name: "kpzonestays" }],

  creator: "kpzonestays",

  publisher: "kpzonestays",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "kpzonestays",
    description:
      "Find verified hostels and PG accommodations with photos, facilities, and contact details.",
    url: "https://www.kpzonestays.com",
    siteName: "kpzonestays",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "kpzonestays",
    description:
      "Search verified hostels and PG accommodations near your college.",
  },

  alternates: {
    canonical: "/",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
