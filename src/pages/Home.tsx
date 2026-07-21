"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown ,ArrowRight, ShieldCheck, Home as HomeIcon, BadgePercent, Quote,
  
  Building2,
  Camera,
  MapPinned,
  Users,
  Star,
  CheckCircle,
 } from "lucide-react";
import Hero from "../components/Hero";
import HostelCard from "../components/HostelCard";
import { mockHostels } from "@/data/mockHostel";
import Link from "next/link";
import SeoContentSection from "@/components/SeoContentSection";

const Home: React.FC = () => {
  const navigate = useRouter();

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Display top 3 featured hostels
  const featuredHostels = mockHostels.slice(0, 3);

  // Mock Testimonials Data
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Student, IIT Indore",
      content: "Finding a hostel without brokerage used to be a nightmare. KP Zone made it seamless. Found a premium room within 2 days!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Working Professional",
      content: "The properties are 100% verified. The amenities listed matched exactly with what I got. Highly recommended!",
      rating: 5,
    },
  ];
  const stats = [
    { number: "100+", label: "Verified Properties" },
    { number: "1000+", label: "Students Helped" },
    { number: "20+", label: "Areas Covered" },
    { number: "100%", label: "Personally Verified" },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Verified Listings",
      description:
        "Every hostel and PG is personally inspected and verified by our team before being listed.",
    },
    {
      icon: Camera,
      title: "Real Photos",
      description:
        "All property photos are captured by our team to ensure complete transparency.",
    },
    {
      icon: Building2,
      title: "Trusted Owners",
      description:
        "We verify owner details and property information before approval.",
    },
    {
      icon: MapPinned,
      title: "Wide Coverage",
      description:
        "Covering Knowledge Park, Pari Chowk, GL Bajaj, Sharda University, IILM, and more.",
    },
  ];

  const faqs = [
  {
    question: "How Safe are the Hostels Listed on KP Zone Stays?",
    answer:
      "Our team personally visits every hostel and PG before listing it on KP Zone Stays. We verify CCTV coverage, security arrangements, property condition, owner details, and overall safety standards to ensure students and working professionals get trusted accommodation.",
  },
  {
    question: "What is the Monthly Cost of AC Hostels in Greater Noida?",
    answer:
      "The rent of AC hostels is generally 30% to 40% higher than non-AC hostels. On KP Zone Stays, you can find verified AC hostels in different budget ranges near Knowledge Park, GL Bajaj, Sharda University, and Pari Chowk.",
  },
  {
    question: "What Safety Arrangements are Available in Ladies Hostels?",
    answer:
      "Most ladies hostels listed on our platform offer CCTV surveillance, women wardens, restricted male entry, secure access control, proper lighting, and dedicated support staff. Our team verifies these facilities before approval.",
  },
  {
    question: "Which is the Best Hostel Near GL Bajaj College?",
    answer:
      "There are several highly-rated hostels near GL Bajaj College. Our Hostels Near GL Bajaj section includes only verified properties that have been inspected by our team for safety, cleanliness, food quality, and student-friendly facilities.",
  },
];

  const values = [
    "100% Genuine Listings",
    "Student-Friendly Support",
    "Safety First Approach",
    "Transparent Information",
    "Affordable & Premium Options",
    "Regular Property Inspections",
  ];

  return (
    <div className="flex flex-col gap-24 bg-gradient-to-b from-bg-base to-bg-surface/30 ">
      
      {/* Hero Section */}
      <Hero />

      {/* Featured Properties */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
          <div>
            <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block mb-2">
              Handpicked for you
            </span>
            <h2 className="text-3xl md:text-4xl text-text-primary font-heading font-bold tracking-tight">
              Featured Properties
            </h2>
          </div>
          <Link href="/explore">  <button
            className="group flex items-center gap-2 bg-brand-primary/10 text-brand-primary font-semibold py-2.5 px-5 rounded-full transition-all duration-300 hover:bg-brand-primary hover:text-white"
          >
            View All Properties
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>  </Link>
          
        </div>

        {/* Hostel Cards Grid */}
        <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
          {featuredHostels.map((hostel) => (
            <div key={hostel.slug} className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl overflow-hidden">
              <HostelCard hostel={hostel} />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20   relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block mb-2">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl text-text-primary font-heading font-bold">
              Why Choose KP Zone Hostels?
            </h2>
            <p className="text-text-secondary mt-4">
              We slice out the middleman and bring verified, premium living spaces straight to your screen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Premium Properties */}
            <div className="group bg-white p-8 text-center rounded-3xl border border-border-light shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 text-brand-primary flex items-center justify-center rounded-2xl transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
                <HomeIcon size={28} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Premium Properties
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Handpicked accommodations optimized for dynamic student living and professional comfort.
              </p>
            </div>

            {/* Verified Listings */}
            <div className="group bg-white p-8 text-center rounded-3xl border border-border-light shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-50 text-green-600 flex items-center justify-center rounded-2xl transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Verified Listings
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Every listing is physically checked by our team for safety, hygiene, and baseline standards.
              </p>
            </div>

            {/* No Brokerage */}
            <div className="group bg-white p-8 text-center rounded-3xl border border-border-light shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-50 text-purple-600 flex items-center justify-center rounded-2xl transition-colors duration-300 group-hover:bg-purple-600 group-hover:text-white">
                <BadgePercent size={28} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Zero Brokerage
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Connect directly with property managers. No hidden fees, no unnecessary cuts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block mb-2">
            Reviews
          </span>
          <h2 className="text-3xl md:text-4xl text-text-primary font-heading font-bold">
            What Our Residents Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-bg-surface p-8 rounded-3xl border border-border-light relative shadow-sm">
              <Quote className="absolute top-6 right-8 text-brand-primary/10 w-12 h-12" />
              <div className="flex gap-1 mb-4 text-amber-500">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-text-primary text-base italic mb-6 leading-relaxed">
                "{t.content}"
              </p>
              <div>
                <h4 className="font-bold text-text-primary">{t.name}</h4>
                <p className="text-text-secondary text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <main className="min-h-screen ">
              {/* Hero Section */}
              <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
                <div className="absolute inset-0 bg-black/10" />
        
                <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
                  <div className="mx-auto max-w-4xl text-center text-white">
                
        
                    <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                      Greater Noida's Most Trusted
                      <span className="block text-blue-200">
                        Hostel & PG Directory
                      </span>
                    </h1>
        
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
                      We help students and working professionals find safe,
                      verified, and comfortable hostels & PG accommodations near
                      Knowledge Park, Pari Chowk, GL Bajaj, Sharda University,
                      IILM, and across Greater Noida.
                    </p>
                  </div>
                </div>
              </section>
        
              {/* Stats */}
              <section className="relative z-10 -mt-12 px-6">
                <div className="mx-auto max-w-6xl">
                  <div className="grid grid-cols-2 gap-4 rounded-3xl bg-white p-8 shadow-xl md:grid-cols-4">
                    {stats.map((item) => (
                      <div key={item.label} className="text-center">
                        <h3 className="text-3xl font-bold text-blue-600">
                          {item.number}
                        </h3>
                        <p className="mt-2 text-gray-600">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
        
              {/* Story Section */}
              <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                  <div>
                    <span className="font-semibold text-blue-600">
                      OUR STORY
                    </span>
        
                    <h2 className="mt-4 text-4xl font-bold text-gray-900">
                      Why We Built KP Zone Stays
                    </h2>
        
                    <p className="mt-6 text-lg leading-relaxed text-gray-600">
                      Finding a trustworthy hostel or PG in Greater Noida can be
                      overwhelming. Hundreds of options exist online, but very few
                      provide accurate information.
                    </p>
        
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                      That's why we created KP Zone Stays. Our mission is simple:
                      personally verify every property before listing it so students
                      and professionals can make informed decisions with confidence.
                    </p>
        
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                      We visit each property, inspect facilities, meet owners,
                      verify safety measures, and capture real photographs. Only
                      after passing our quality checks does a property earn a place
                      on our platform.
                    </p>
                  </div>
        
                  <div className="rounded-3xl  p-8">
                    <div className="space-y-6">
                      {values.map((value) => (
                        <div
                          key={value}
                          className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"
                        >
                          <CheckCircle className="h-6 w-6 text-green-500" />
                          <span className="font-medium text-gray-700">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
        
              {/* Features */}
              <section className="py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="text-center">
                    <span className="font-semibold text-blue-600">
                      WHY TRUST US
                    </span>
        
                    <h2 className="mt-4 text-4xl font-bold text-gray-900">
                      What Makes KP Zone Stays Different?
                    </h2>
                  </div>
        
                  <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                      <div
                        key={feature.title}
                        className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                      >
                        <feature.icon className="h-12 w-12 text-blue-600" />
        
                        <h3 className="mt-6 text-xl font-semibold">
                          {feature.title}
                        </h3>
        
                        <p className="mt-3 text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <SeoContentSection/>
              </section>
      
        
              {/* CTA */}
              <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-24">
                <div className="mx-auto max-w-4xl px-6 text-center text-white">
                  <Users className="mx-auto h-14 w-14" />
        
                  <h2 className="mt-6 text-4xl font-bold">
                    Find Your Perfect Stay Today
                  </h2>
        
                  <p className="mt-4 text-lg text-blue-100">
                    Explore verified hostels and PG accommodations across
                    Greater Noida with complete confidence.
                  </p>
        
                  <div className="mt-8 flex justify-center">
                    <a
                      href="/explore"
                      className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105"
                    >
                      Start Exploring Now
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </section>
            </main>
      </section>

      {/* Modern CTA Banner */}
      {/* <section className="container mx-auto px-6 max-w-7xl">
        <div className="bg-gradient-to-r from-brand-primary to-blue-700 text-white p-12 md:p-16 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight">
              Ready to find your perfect stay?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Explore verified student and professional accommodations tailored to your budget.
            </p>
            <Link href="/explore"> <button
              
              className="inline-flex items-center gap-2 bg-white text-brand-primary font-bold py-3.5 px-8 rounded-xl shadow-md transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              Start Exploring Now
              <ArrowRight size={18} />
            </button> </Link>
            
          </div>
        </div>
      </section> */}
      
{/*FAQ section */}
      <section className=" py-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Questions Students Ask Most
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Find answers about hostel safety, pricing, facilities, and
            accommodation options in Greater Noida.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="pr-4 text-lg font-semibold text-slate-800">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`h-5 w-5 text-blue-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-3xl bg-blue-600 p-8 text-center text-white">
          <h3 className="text-2xl font-bold">
            Still Have Questions?
          </h3>

          <p className="mt-2 text-blue-100">
            Contact our team and we'll help you find the perfect hostel or PG in Greater Noida.
          </p>

          <a
            href="/contact"
            className="mt-5 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>

    

    </div>
  );
};

export default Home;