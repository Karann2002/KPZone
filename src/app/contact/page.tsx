import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import FloatingWhatsAppEnquiry from "@/components/HostelEnquiryButton";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Contact from "@/pages/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Kpzonestays for hostel enquiries, support, and partnerships.",
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedBackground/>
      <Navbar />

      <main className="flex-1">
        <Contact />
      </main>

      <div className="fixed bottom-6 right-6 z-50">
        <FloatingWhatsAppEnquiry />
      </div>

      <Footer />
    </div>
  );
}