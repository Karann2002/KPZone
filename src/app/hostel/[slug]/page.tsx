import Footer from "@/components/Footer";
import FloatingWhatsAppEnquiry from "@/components/HostelEnquiryButton";
import Navbar from "@/components/Navbar";

import HostelDetail from "@/pages/HostelDetail";

import { mockHostels } from "@/data/mockHostel";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps) {
  const { slug } = await params;

  const hostel = mockHostels.find(
    (h) => h.slug === slug
  );

  return {
    title: `${hostel?.name || "Hostel"} | KP Zone Stays`,
    description:
      hostel?.description ||
      "Premium hostel accommodation",

    openGraph: {
      title: hostel?.name,
      description: hostel?.description,
      images: [
        hostel?.gallery?.[0]?.url || "",
      ],
    },
  };
}

export default async function Page({
  params,
}: PageProps) {
  const { slug } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar />

      <main className="flex-1">
        <HostelDetail slug={slug} />
      </main>

      <div className="fixed bottom-6 right-6 z-50">
        <FloatingWhatsAppEnquiry />
      </div>

      <Footer />
    </div>
  );
}