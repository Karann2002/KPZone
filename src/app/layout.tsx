import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";

import "./globals.css";
import {
  organizationSchema,
  websiteSchema,
  lodgingBusinessSchema,
} from "@/lib/schema";
export const siteUrl = "https://www.kpzonestays.com";
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
  metadataBase: new URL(siteUrl),
  title: "Best Hostels in Greater Noida PG Near Galgotias, Sharda and GL Bajaj",
   description:
  "Find premium boys' & girls' hostels in Greater Noida near Knowledge Park & Pari Chowk. Book luxury PGs near Galgotias, Sharda, GL Bajaj, Bennett & NIU.",
  applicationName: "KPZone Stays",
  icons: {
    icon: "./favicon.ico",
    shortcut: "./favicon.ico",
    
  },
  alternates: {
    canonical: siteUrl,
  },
  authors: [{ name: "kpzonestays" }],

  creator: "kpzonestays",

  publisher: "kpzonestays",

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "KPZone Stays",
    title:
      "Best Hostels in Greater Noida PG Near Galgotias, Sharda and GL Bajaj",
    description:
      "Find premium boys' & girls' hostels in Greater Noida near Knowledge Park & Pari Chowk. Book luxury PGs near Galgotias, Sharda, GL Bajaj, Bennett & NIU.",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Hostels in Greater Noida PG Near Galgotias, Sharda and GL Bajaj",
    description:
      "Find premium boys' & girls' hostels in Greater Noida near Knowledge Park & Pari Chowk. Book luxury PGs near Galgotias, Sharda, GL Bajaj, Bennett & NIU.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  
  };
  
//   keywords: [
//   // Brand
//   "KPZone Stays",
//   "kpzonestays",
//   "KPZone",

//   // Primary Keywords
//   "hostel in Greater Noida",
//   "PG in Greater Noida",
//   "student accommodation Greater Noida",
//   "boys hostel Greater Noida",
//   "girls hostel Greater Noida",
//   "best hostel in Greater Noida",
//   "best PG in Greater Noida",
//   "affordable hostel Greater Noida",
//   "budget PG Greater Noida",
//   "luxury hostel Greater Noida",

//   // Knowledge Park
//   "hostel near Knowledge Park",
//   "PG near Knowledge Park",
//   "boys hostel Knowledge Park",
//   "girls hostel Knowledge Park",

//   // Pari Chowk
//   "hostel near Pari Chowk",
//   "PG near Pari Chowk",

//   // Universities
//   "hostel near Galgotias University",
//   "PG near Galgotias University",
//   "hostel near Sharda University",
//   "PG near Sharda University",
//   "hostel near GL Bajaj",
//   "PG near GL Bajaj",
//   "hostel near Bennett University",
//   "PG near Bennett University",
//   "hostel near Noida International University",
//   "PG near Noida International University",

//   // Facilities
//   "AC hostel Greater Noida",
//   "hostel with WiFi",
//   "hostel with food",
//   "fully furnished PG",
//   "student hostel with meals",
//   "safe girls hostel",
//   "24x7 security hostel",
//   "hostel with parking",
//   "hostel with laundry",
//   "hostel with power backup",
//     "best hostels near knowledge park",
//   // Search Intent
//   "hostels near me",
//   "PG near me",
//   "student hostel",
//   "college hostel",
//   "student living Greater Noida",
//   "student rental Greater Noida",
//   "co-living Greater Noida",
//   "hostel booking Greater Noida",
//   "book PG online",
//   "verified hostel Greater Noida",
// ],
  



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-full flex flex-col">{children}
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* Lodging Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(lodgingBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
