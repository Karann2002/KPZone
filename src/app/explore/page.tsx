import Footer from "@/components/Footer";
import FloatingWhatsAppEnquiry from "@/components/HostelEnquiryButton";
import Navbar from "@/components/Navbar";

import Explore from "@/pages/Explore";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Hostel in Greater Noida",
  description:
    "Browse verified hostels and PG accommodations with photos, pricing, and amenities.",
};
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar />

      <main className="flex-1">
        <Explore />
      </main>

      <div className="fixed bottom-6 right-6 z-50">
        <FloatingWhatsAppEnquiry />
      </div>

      <Footer />
    </div>
  );
}