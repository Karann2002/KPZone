"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  Star,
  ArrowLeft,
  GraduationCap,
  MapPin,
  CheckCircle,
  Clock,
  ShieldAlert,
  MessageSquare,
  Compass,
  Layers,
  Phone,
  Play,
  Grid,
  Image as ImageIcon,
} from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { mockHostels } from "@/data/mockHostel";

/* ---------------- TYPES ---------------- */
interface GalleryItem {
  type: "image" | "video";
  url: string;
}

interface Amenity {
  name: string;
  icon?: React.ReactNode;
}

interface Review {
  user: string;
  comment: string;
  rating: number;
}

interface HostelDetailProps {
  slug: string;
}

interface Hostel {
  id: number;
  slug: string;
  name: string;
  price: number;
  gallery?: GalleryItem[];
  amenities?: Amenity[];
  institutions?: string[];
  reviews?: Review[];
  location?: string;
  description?: string;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const hostel = mockHostels.find((h) => h.slug === params.slug);

  return {
    title: hostel?.name,
    description: hostel?.description,
  };
}

/* ---------------- COMPONENT ---------------- */
const HostelDetail: React.FC<HostelDetailProps> = ({ slug }) => {
  const contactFormRef = useRef<HTMLDivElement>(null);
  
  // Booking Form State
  const [formData, setFormData] = useState({ name: "", phone: "", sharing: "Single Occupancy" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const hostel = mockHostels.find((h) => h.slug === slug) as Hostel | undefined;

  if (!hostel) {
    return (
      <div className="container mx-auto px-6 max-w-7xl py-32 text-center">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShieldAlert size={32} />
        </div>
        <h2 className="text-3xl font-heading font-bold text-text-primary mb-2">
          Hostel Not Found
        </h2>
        <p className="text-text-secondary mb-6">The property you are looking for might have been unlisted or removed.</p>
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-brand-primary/95 transition-all"
        >
          <ArrowLeft size={18} />
          Return to Explore
        </Link>
      </div>
    );
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Gallery array preprocessing
  const galleryItems = hostel.gallery || [];
  const featuredItem = galleryItems[0];
  const sideItems = galleryItems.slice(1, 5);

  return (
    <div className="bg-slate-50/50 min-h-screen pb-24 lg:pb-12 relative">
      
      {/* ================= REDESIGNED SWIPER & BENTO GALLERY AREA ================= */}
      <div className="w-full ">
        {/* 1. MOBILE VIEWPORT: High-End Minimal Touch Slider */}
        <div className="block md:hidden relative w-full h-[300px] sm:h-[380px]">
          {galleryItems.length > 0 ? (
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              onSlideChange={(swiper) => setActiveMobileIndex(swiper.activeIndex)}
              className="h-full w-full"
            >
              {galleryItems.map((item, idx) => (
                <SwiperSlide key={idx} className="relative w-full h-full ">
                  {item.type === "image" ? (
                    <Image
                      fill
                      src={item.url}
                      className="object-cover"
                      alt={`${hostel.name} view ${idx + 1}`}
                      priority={idx === 0}
                    />
                  ) : (
                    <div className="relative h-full w-full">
                      <video muted loop autoPlay playsInline className="w-full h-full object-cover">
                        <source src={item.url} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 " />
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-500 ">
              No images available
            </div>
          )}
          {galleryItems.length > 0 && (
            <div className="absolute bottom-4 right-4 z-10  backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md tracking-wider">
              {activeMobileIndex + 1} / {galleryItems.length}
            </div>
          )}
        </div>

        {/* 2. DESKTOP VIEWPORT: Premium Real Estate Asymmetric Bento Grid */}
        <div className="hidden md:grid grid-cols-4 gap-2.5 h-[440px] lg:h-[520px] w-full max-w-[1440px] mx-auto p-4 ">
          {galleryItems.length > 0 ? (
            <>
              {/* Left Column Showcase Box */}
              <div className="col-span-2 h-full relative overflow-hidden rounded-l-2xl group bg-zinc-900">
                {featuredItem.type === "image" ? (
                  <Image
                    fill
                    src={featuredItem.url}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                    alt={`${hostel.name} featured room asset`}
                    priority
                  />
                ) : (
                  <div className="w-full h-full relative">
                    <video muted loop autoPlay playsInline className="w-full h-full object-cover">
                      <source src={featuredItem.url} type="video/mp4" />
                    </video>
                    <div className="absolute top-4 left-4 bg-black/60 text-white p-2.5 rounded-full backdrop-blur-md">
                      <Play size={16} fill="currentColor" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Right Nested Mini Grid Layout */}
              <div className={`col-span-2 grid gap-2.5 ${sideItems.length > 2 ? "grid-cols-2 grid-rows-2" : "grid-cols-1"}`}>
                {sideItems.map((item, idx) => {
                  const isLastSlot = idx === sideItems.length - 1;
                  const remainingCount = galleryItems.length - 5;

                  return (
                    <div 
                      key={idx} 
                      className={`relative overflow-hidden group bg-zinc-900
                        ${idx === 1 && sideItems.length === 2 ? "rounded-tr-2xl" : ""}
                        ${idx === sideItems.length - 1 && sideItems.length === 4 ? "rounded-br-2xl" : ""}
                        ${idx === 1 && sideItems.length === 4 ? "rounded-tr-2xl" : ""}
                      `}
                    >
                      {item.type === "image" ? (
                        <Image
                          fill
                          src={item.url}
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          alt={`${hostel.name} preview item ${idx + 1}`}
                        />
                      ) : (
                        <div className="w-full h-full relative">
                          <video muted loop autoPlay playsInline className="w-full h-full object-cover">
                            <source src={item.url} type="video/mp4" />
                          </video>
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                            <div className="bg-white/90 p-2.5 rounded-full text-zinc-900 shadow-md">
                              <Play size={14} fill="currentColor" />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      {isLastSlot && remainingCount > 0 && (
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex flex-col items-center justify-center text-white cursor-pointer transition-colors hover:bg-black/60 select-none">
                          <Grid size={20} className="mb-1" />
                          <span className="text-xs font-bold tracking-wide">+{remainingCount} More Photos</span>
                        </div>
                      )}
                    </div>
                  );
                })}

                {sideItems.length === 0 && (
                  <div className="col-span-2 bg-zinc-900 rounded-r-2xl flex flex-col items-center justify-center text-zinc-500 text-xs gap-2 border border-zinc-800">
                    <ImageIcon size={24} className="opacity-40" />
                    <span>Additional property images loading</span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="col-span-4 h-full bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-500">
              No gallery images found
            </div>
          )}
        </div>
      </div>

      {/* Main Core Content Layout Structure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT CONTENT COLUMN - Continuous One Page Sections */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* SECTION 1: OVERVIEW */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
              <h1 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mb-3">
                {hostel.name}
              </h1>
              <div className="flex items-center gap-2 text-text-secondary mb-6 text-sm">
                <MapPin size={16} className="text-brand-primary shrink-0" />
                <span>{hostel.location || "Premium Location, Indore"}</span>
              </div>

              <p className="text-text-secondary text-sm sm:text-base mb-8 leading-relaxed">
                {hostel.description || 
                  "Experience high-quality living spaces tailored meticulously to corporate professionals and university students. Features structural integrations with smart workspaces, active common community hubs, premium cleaning upkeep, and ultra high-speed fiber channels."}
              </p>

              <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2 pt-2 border-t border-slate-100">
                <GraduationCap className="text-brand-primary" size={20} />
                Nearby Educational Hubs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hostel.institutions?.map((inst) => (
                  <div
                    key={inst}
                    className="flex items-center gap-3 p-4 bg-slate-50/60 rounded-xl border border-slate-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                    <span className="text-sm font-medium text-text-primary">{inst}</span>
                  </div>
                )) || <p className="text-text-tertiary text-sm">No nearby colleges listed.</p>}
              </div>
            </section>

            {/* SECTION 2: AMENITIES */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2.5 mb-2">
                <Layers className="text-brand-primary" size={22} />
                <h3 className="text-xl font-heading font-bold text-text-primary">Included Amenities</h3>
              </div>
              <p className="text-text-secondary text-sm mb-6">Premium living values built right into your standard monthly package parameters.</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {hostel.amenities?.map((amenity) => (
                  <div
                    key={amenity.name}
                    className="flex flex-col items-start p-5 border border-slate-100 rounded-xl hover:border-brand-primary/40 hover:bg-brand-primary/[0.01] transition-all"
                  >
                    <div className="text-brand-primary mb-3 p-2 bg-brand-primary/5 rounded-lg shrink-0">
                      {amenity.icon || <CheckCircle size={20} />}
                    </div>
                    <span className="font-semibold text-text-primary text-sm sm:text-base">
                      {amenity.name}
                    </span>
                  </div>
                )) || <p className="text-text-tertiary text-sm">No specific amenities configured.</p>}
              </div>
            </section>

            {/* SECTION 3: VISUAL GALLERY STATIC */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold text-text-primary">Hostel Gallery</h3>
                <p className="text-sm text-text-secondary mt-1">Explore all room photos, amenities, and property visuals.</p>
              </div>

              {hostel.gallery && hostel.gallery.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {hostel.gallery.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative overflow-hidden rounded-xl border border-slate-100 bg-zinc-100 group aspect-[4/3]"
                    >
                      {item.type === "image" ? (
                        <Image
                          fill
                          src={item.url}
                          alt={`${hostel.name} gallery ${idx + 1}`}
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <video controls className="w-full h-full object-cover">
                          <source src={item.url} type="video/mp4" />
                        </video>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-text-tertiary">No gallery media available.</div>
              )}
            </section>

            {/* SECTION 4: LOCATION MAP */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <Compass className="text-brand-primary" size={22} />
                <h3 className="text-xl font-heading font-bold text-text-primary">Map & Proximity</h3>
              </div>
              <div className="w-full bg-zinc-100 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.7271410590643!2d77.49892889678955!3d28.457640600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc15e96160b51%3A0x41d7b05b0722757a!2sShree%20Sawaria%20House%20-%20Boys%20Hostel%20In%20Greater%20Noida!5e0!3m2!1sen!2sin!4v1779444238177!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
              <p className="text-xs text-text-tertiary mt-3 text-center">
                Google Maps dynamic embedding activates upon verified routing calls.
              </p>
            </section>

            {/* SECTION 5: REVIEWS */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="text-brand-primary" size={22} />
                  <h3 className="text-xl font-heading font-bold text-text-primary">Resident Feedbacks</h3>
                </div>
                <div className="flex items-center gap-1.5 bg-amber-50 text-amber-700 py-1 px-2.5 rounded-lg text-sm font-bold">
                  <Star size={16} fill="currentColor" />
                  <span>4.8 / 5.0</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hostel.reviews && hostel.reviews.length > 0 ? (
                  hostel.reviews.map((r, i) => (
                    <div key={i} className="p-5 border border-slate-100 rounded-xl bg-slate-50/50 flex flex-col justify-between">
                      <div>
                        <div className="flex gap-1 mb-2.5 text-amber-500">
                          {[...Array(r.rating)].map((_, ratingIdx) => (
                            <Star key={ratingIdx} size={14} fill="currentColor" stroke="none" />
                          ))}
                        </div>
                        <p className="text-text-primary text-sm italic leading-relaxed">"{r.comment}"</p>
                      </div>
                      <span className="text-xs font-bold text-text-secondary mt-4 block">— {r.user}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-text-tertiary text-sm italic col-span-2">No user reviews submitted yet.</p>
                )}
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN: DYNAMIC DESKTOP FLOAT / STICKY FORM */}
          <div className="lg:col-span-1" ref={contactFormRef}>
            <div className="lg:sticky lg:top-24 space-y-4">
              
              {/* Booking input Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-100/70">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary tracking-tight pb-3 border-b border-slate-50">
                    Contact Us
                  </h3>
                </div>

                {isSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center mt-4 animate-in zoom-in-95 duration-200">
                    <CheckCircle className="mx-auto text-emerald-600 mb-2" size={28} />
                    <h4 className="font-bold mb-1">Visit Scheduled!</h4>
                    <p className="text-xs text-emerald-700">An operator will connect with you via mobile shortly.</p>
                  </div>
                ) : (
                  <form className="space-y-4 mt-4" onSubmit={handleBookingSubmit}>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 bg-slate-50 border border-slate-200 text-text-primary text-sm rounded-xl focus:border-brand-primary focus:bg-white focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1.5">Mobile Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter 10-digit phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 bg-slate-50 border border-slate-200 text-text-primary text-sm rounded-xl focus:border-brand-primary focus:bg-white focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1.5">Room Requirements</label>
                      <select 
                        value={formData.sharing}
                        onChange={(e) => setFormData({ ...formData, sharing: e.target.value })}
                        className="w-full p-3 bg-slate-50 border border-slate-200 text-text-primary text-sm rounded-xl focus:border-brand-primary focus:bg-white outline-none transition-all"
                      >
                        <option>Single Occupancy</option>
                        <option>Double Sharing</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-primary hover:bg-brand-primary/95 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-brand-primary/10 transition-all active:scale-[0.99] mt-2 text-sm sm:text-base"
                    >
                      Schedule Free Visit
                    </button>

                    <div className="flex items-center gap-2 justify-center text-text-tertiary text-xs pt-1">
                      <Clock size={13} />
                      <span>Instant callback response within 15 mins</span>
                    </div>
                  </form>
                )}
              </div>

              {/* Support Anchor */}
              <div className="bg-gradient-to-br from-brand-primary to-blue-700 rounded-2xl p-6 text-white flex items-center justify-between overflow-hidden relative shadow-md group">
                <div className="z-10 max-w-[65%]">
                  <h4 className="font-bold text-base mb-0.5">Need Custom Help?</h4>
                  <p className="text-xs text-white/80 leading-snug">Connect directly with a dedicated property advisor.</p>
                </div>
                <a
                  href="https://wa.me/917999032854"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-primary hover:bg-zinc-50 font-bold text-xs py-2.5 px-4 rounded-xl transition-transform active:scale-95 shadow-md z-10 shrink-0"
                >
                  WhatsApp
                </a>
                <div className="absolute -right-4 -bottom-4 bg-white/10 w-24 h-24 rounded-full pointer-events-none transition-transform duration-500 group-hover:scale-110" />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* MOBILE BOTTOM FIXED ACCELERATOR BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 border-t border-slate-200/80 p-3 shadow-[0_-8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md flex items-center justify-between px-5">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Premium Space</span>
          <span className="text-sm font-extrabold text-slate-800">{hostel.name.split(" ")[0]}...</span>
        </div>
        <button
          onClick={scrollToContactForm}
          className="bg-brand-primary hover:bg-brand-primary/95 text-white text-xs font-bold py-2.5 px-5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
        >
          <Phone size={14} />
          Book Visit
        </button>
      </div>

    </div>
  );
};

export default HostelDetail;