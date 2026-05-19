import Filters from "@/components/Filter";
import Footer from "@/components/Footer";
import FloatingWhatsAppEnquiry from "@/components/HostelEnquiryButton";
import Navbar from "@/components/Navbar";

import HostelDetail from "@/pages/HostelDetail";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar />

      <main className="flex-1 ">
        {/* <div><Filters/></div> */}
        
        <div><HostelDetail /></div>
      </main>

      <div className="fixed bottom-6 right-6 z-50">
        <FloatingWhatsAppEnquiry />
      </div>

      <Footer />
    </div>
  );
}