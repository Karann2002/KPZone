import Footer from "@/components/Footer";
import FloatingWhatsAppEnquiry from "@/components/HostelEnquiryButton";
import Navbar from "@/components/Navbar";

import HostelDetail from "@/pages/HostelDetail";

import type { Metadata } from "next";
import { mockHostels } from "@/data/mockHostel";

const BASE_URL = "https://kpzonestays.com"; // Replace with your domain

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const hostel = mockHostels.find((h) => h.slug === slug);

  if (!hostel) {
    return {
      title: "Hostel Not Found | KP Zone Stays",
      description: "The requested hostel could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${hostel.name} | Best Hostel in Greater Noida | KP Zone Stays`;

  const description =
    hostel.description ||
    `${hostel.name} offers affordable and premium hostel accommodation in Greater Noida with AC rooms, Wi-Fi, food, laundry, 24x7 security, and modern amenities.`;

  const image = hostel.gallery?.[0]?.url;

  return {
    title,
    description,

    keywords: [
      hostel.name,
      "Hostel in Greater Noida",
      "PG in Greater Noida",
      "Hostel near Knowledge Park",
      "Hostel near Pari Chowk",
      "Hostel near Galgotias University",
      "Hostel near Sharda University",
      "Hostel near GL Bajaj",
      "Boys Hostel",
      "Girls Hostel",
      "Student Accommodation",
      "Affordable Hostel",
      "Hostel with WiFi",
      "Hostel with Food",
      "AC Hostel",
    ],

    alternates: {
      canonical: `${BASE_URL}/hostel/${hostel.slug}`,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },

    openGraph: {
      title,
      description,
      url: `${BASE_URL}/hostel/${hostel.slug}`,
      siteName: "KP Zone Stays",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: hostel.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const hostel = mockHostels.find((h) => h.slug === slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: hostel?.name,
    description: hostel?.description,
    url: `https://kpzonestays.com/hostel/${slug}`,
    image: hostel?.gallery?.[0]?.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Greater Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
        <HostelDetail slug={slug} />
      </main>

      <div className="fixed bottom-6 right-6 z-50">
        <FloatingWhatsAppEnquiry />
      </div>

      <Footer />
    </div>
  );
}
