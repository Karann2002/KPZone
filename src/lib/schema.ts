// src/lib/schema.ts

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.kpzonestays.com/#organization",
  name: "KPZone Stays",
  url: "https://www.kpzonestays.com",
  email: "kpzonestays@gmail.com",
  telephone: [
    "+91-7999032854",
    "+91-7489837462",
    "+91-7999023135",
  ],
  description:
    "KPZone Stays provides premium boys' and girls' hostels and luxury PG accommodation in Greater Noida near Knowledge Park and Pari Chowk.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Greater Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Greater Noida",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.kpzonestays.com/#website",
  url: "https://www.kpzonestays.com",
  name: "KPZone Stays",
  publisher: {
    "@id": "https://www.kpzonestays.com/#organization",
  },
};

export const lodgingBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://www.kpzonestays.com/#lodgingbusiness",
  name: "KPZone Stays",
  url: "https://www.kpzonestays.com",
  telephone: "+91-7999032854",
  email: "kpzonestays@gmail.com",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: [
    "Cash",
    "UPI",
    "Credit Card",
    "Debit Card",
    "Net Banking",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Greater Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "WiFi",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Air Conditioning",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Laundry",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Housekeeping",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "CCTV Security",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Power Backup",
      value: true,
    },
  ],
  knowsAbout: [
    "Boys Hostel",
    "Girls Hostel",
    "Luxury PG",
    "Student Accommodation",
    "Hostel near Knowledge Park",
    "Hostel near Pari Chowk",
    "Hostel near Galgotias University",
    "Hostel near Sharda University",
    "Hostel near GL Bajaj",
    "Hostel near Bennett University",
    "Hostel near Noida International University",
  ],
};