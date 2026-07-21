"use client";

import { useState } from "react";
import { 
  ChevronDown, 
  ShieldCheck, 
  MapPin, 
  GraduationCap, 
  Building2, 
  CheckCircle2, 
  Lock, 
  Sparkles,
  ArrowRight,
  User,
  Users,
  Utensils,
  AirVent,
  Tv
} from "lucide-react";

export default function SeoContentSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative py-20 md:py-32 bg-slate-50 overflow-hidden selection:bg-blue-500 selection:text-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-40">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] rounded-full bg-purple-200/30 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
            <ShieldCheck className="w-4 h-4 text-blue-600 animate-pulse" />
            100% Trusted & Verified Properties
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Best Hostel in Greater Noida near GL Bajaj and Knowledge Park
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Welcome to KP Zone Stays, a platform from where anyone can find a nest in Greater Noida for a 100% safe and secure environment. 
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
          {[
            { metric: "100%", label: "Personally Audited", desc: "Physical on-site checks" },
            { metric: "Real Phone", label: "Camera Captures", desc: "No misleading stock images" },
            { metric: "24/7", label: "Student Care", desc: "Always here to assist" },
            { metric: "Safe Zone", label: "Gated Security", desc: "Prioritizing peace of mind" },
          ].map((stat, idx) => (
            <div key={idx} className="group relative bg-white/70 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white">
              <span className="absolute top-3 right-3 text-xs font-bold text-slate-200 group-hover:text-blue-100 transition-colors">0{idx + 1}</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-indigo-700">{stat.metric}</h3>
              <p className="text-slate-800 font-semibold text-sm sm:text-base mt-2">{stat.label}</p>
              <p className="text-slate-500 text-xs mt-1">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Interactive Guide Container */}
        <div className="mt-20">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] overflow-hidden">
            
            {/* Context Hero Header Banner */}
            <div className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-12 lg:p-16 text-white overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_45%)]" />
              
              <div className="relative flex flex-wrap gap-2 sm:gap-3 mb-6">
                {[
                  { icon: MapPin, text: "Knowledge Park" },
                  { icon: GraduationCap, text: "GL Bajaj & Sharda" },
                  { icon: Building2, text: "Verified Hostels & PGs Complete List" }
                ].map((badge, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-medium text-slate-200">
                    <badge.icon className="w-3.5 h-3.5 text-blue-400" />
                    {badge.text}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-3xl leading-tight">
                Verified Hostels and PGs Complete List
              </h3>
              <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
                Thousands of names show up in the market but telling which one is truly good becomes very hard. Discover verified stays backed by strict multi-step processing.
              </p>
            </div>

            {/* Content Body with Dynamic Height Reveal */}
            <div className="p-6 sm:p-10 lg:p-14 bg-gradient-to-b from-white to-slate-50/50">
              <div 
                className={`relative overflow-hidden transition-all duration-700 ease-in-out ${
                  expanded ? "max-h-[9000px] opacity-100" : "max-h-[500px]"
                }`}
              >
                {/* Structural Grid Content */}
                <div className="space-y-12 text-slate-600 text-sm sm:text-base leading-relaxed">
                  
                  {/* Row 1: The Core Mission & Directory */}
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <span className="h-6 w-1 rounded-full bg-blue-600 block" />
                        Why We Built This Directory
                      </h4>
                      <p>
                        Our team built this directory because every day we were getting messages from people searching for the <strong>best hostel in greater noida</strong> and they could not find the right place. Our team started working to solve this same problem and today every listing on our website has been added only after our team personally verified it.
                      </p>
                      <p>
                        Our team has different members for different tasks and all of us together give full attention to every listing. Whenever a new place like <strong>nalanda living hostel greater noida</strong> joins our directory, a member from our team goes there in person, clicks photos of the rooms from their own phone, talks to the owners and checks every small detail with their own eyes.
                      </p>
                      <p>
                        We never add anyone to the list without visiting ourselves, and that is the reason why you can trust every name on our website. If you are searching for a <strong>pg near gl bajaj greater noida</strong>, you will find many good verified names on our directory.
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-inner space-y-4">
                      <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        Our Strict Verification Process
                      </h4>
                      <p className="text-xs text-slate-500">
                        Our verification process is very clear and it has many steps which every member of our team takes very seriously:
                      </p>
                      <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
                        <li className="flex items-start gap-2">👉 We first meet the owner and check all their documents ourselves.</li>
                        <li className="flex items-start gap-2">👉 We inspect the whole building and check fire safety, cctv, water supply and electricity backup.</li>
                        <li className="flex items-start gap-2">👉 Our team clicks real photos of the rooms from their own phones and checks every tiny detail.</li>
                      </ul>
                      <p className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                        Our team has also removed many hostels from the list where we noticed any kind of weakness so that all trusted names for <strong>hostel greater noida</strong> stay on our directory. If any property owner did not share correct details with our team, that property was removed immediately under <strong>pg greater noida</strong>.
                      </p>
                    </div>
                  </div>

                  {/* Row 2: Location Coverage */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-slate-900">Our Team has Covered every Area of Knowledge Park and Greater Noida</h4>
                    <p>
                      In Greater Noida, new hostels are opening in every lane today and everyone claims they are the best, but to catch the real quality our team visits new places every month. In Knowledge Park our team has visited many hostels and we found several names that are truly the best in their category. Our team has covered every area of Knowledge Park and clicked real photos of every property from their own phones.
                    </p>
                    <p>
                      Outside Knowledge Park, our team has also done good work in other parts of Greater Noida and the names for <strong>best hostel in knowledge park</strong> are on our directory only because our team visited there in person. Our team also noticed that every student has a different budget, so we placed the <strong>affordable hostels in knowledge park</strong> in a separate section. If you are searching for budget-friendly options that are never weak in their service, you will find them here. 
                    </p>
                    <p>
                      Whether you are looking for an <strong>affordable hostel in greater noida</strong> or options in a premium range, every price range option is on our website.
                    </p>
                  </div>

                  {/* Row 3: Campus Specific Micro-locations */}
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="bg-blue-50/50 border border-blue-100/70 p-6 rounded-2xl space-y-3">
                      <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                        Hostels near GL Bajaj & IILM
                      </h4>
                      <p className="text-sm">
                        Near GL Bajaj our team has visited many hostels and these have CCTV, proper washroom, regular cleaning and good food. In the section <strong>hostels near gl bajaj</strong> on our directory, you will find the trusted names that our team personally approved.
                      </p>
                      <p className="text-sm">
                        Our team has also worked near IILM and placed several hostels from there in our list. In the section <strong>hostels near iilm</strong> you will find those options where students can stay and focus better on their studies with good internet speed and supportive student life.
                      </p>
                    </div>

                    <div className="bg-indigo-50/50 border border-indigo-100/70 p-6 rounded-2xl space-y-3">
                      <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-indigo-600" />
                        Hostels near Sharda University & Lloyd
                      </h4>
                      <p className="text-sm">
                        Our team has covered the whole area near Sharda University as well. In the section <strong>hostels near sharda universe</strong> you will find every trusted name where students can spend their time well. Near Lloyd Law College as well our team has done deep inspection of several hostels and in the list of <strong>hostels near lloyd</strong> you will find names that will fully meet your hopes.
                      </p>
                    </div>
                  </div>

                  {/* Row 4: Category Structuring & Noida Explanations */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-slate-900">Every Category of Hostels is given for Student Needs</h4>
                    <p>
                      If you are searching for any good room under <strong>Hostel in Noida</strong>, you will find everything on our website. Our team has organized the directory in a way that you can easily browse and find your category from budget to premium. If your question is where the full list of Hostels in Noida is available, KP Zone Stays is the best place for you. In our directory there is a section of <strong>Best Hostels in Noida</strong> where our team has placed only those names that are the best in quality, service and safety all three.
                    </p>
                    <p>
                      For students coming to Greater Noida for the first time, there is a separate section on our directory for <strong>Student Hostel in Noida</strong> where the study environment is good, internet speed is fast, study rooms are proper, and the warden is supportive.
                    </p>
                  </div>

                  {/* Girls Hostels Callout */}
                  <div className="bg-purple-50/40 border border-purple-100 p-6 sm:p-8 rounded-2xl grid md:grid-cols-4 gap-6 items-center">
                    <div className="md:col-span-3 space-y-2">
                      <h4 className="text-lg font-bold text-purple-950 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-purple-700" />
                        The Full List of Safe and Trusted Hostels for Ladies
                      </h4>
                      <p className="text-purple-900/80 text-sm">
                        Keeping parents' concerns in mind, we have placed very good names under <strong>girls Hostel in Noida</strong> on our directory. Our team has personally verified that full attention is given to the safety of ladies, the entry of outside people is controlled, CCTV cameras are placed everywhere, and women security guards are maintained.
                      </p>
                      <p className="text-purple-900/70 text-xs">
                        You get the full list of <strong>Ladies Hostels in Noida</strong>, <strong>Women's Hostel in Noida</strong>, and <strong>Working Women's Hostel in Noida</strong> featuring flexible timings, proper facility for late night entry, and a calm environment to rest after work.
                      </p>
                    </div>
                    <div className="bg-white border border-purple-200 p-4 rounded-xl text-center shadow-sm">
                      <span className="text-2xl font-bold text-purple-700 block">100%</span>
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Ladies Security</span>
                    </div>
                  </div>

                  {/* Amenities Quick Grid */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-amber-500" />
                      Separate Categories as per Facilities and Room Types
                    </h4>
                    <p>Our team has organized each category separately so that you get the right option for your need in the first place:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                      <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-3 shadow-sm">
                        <Users className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-xs font-bold text-slate-900">Hostels for Students in Noida</p>
                          <p className="text-[10px] text-slate-500">Basic working amenities</p>
                        </div>
                      </div>
                      <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-3 shadow-sm">
                        <Utensils className="w-5 h-5 text-emerald-600" />
                        <div>
                          <p className="text-xs font-bold text-slate-900">Hostels with Food in Noida</p>
                          <p className="text-[10px] text-slate-500">Regular healthy meals</p>
                        </div>
                      </div>
                      <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-3 shadow-sm">
                        <User className="w-5 h-5 text-purple-600" />
                        <div>
                          <p className="text-xs font-bold text-slate-900">Single Room Hostels in Noida</p>
                          <p className="text-[10px] text-slate-500">Dedicated single spaces</p>
                        </div>
                      </div>
                      <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-3 shadow-sm">
                        <AirVent className="w-5 h-5 text-sky-600" />
                        <div>
                          <p className="text-xs font-bold text-slate-900">AC Hostels in Noida</p>
                          <p className="text-[10px] text-slate-500">High comfort summers</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* PG Segment Section */}
                  <div className="space-y-6 border-t border-slate-200/60 pt-8">
                    <h4 className="text-xl font-bold text-slate-900">The Best and Verified List of PG in Greater Noida</h4>
                    <p>
                      If you are searching for <strong>PG in Noida</strong>, you will find many trusted options on our website. Our team has personally verified every PG and only added it to the list after talking to the owner. In the section of <strong>Paying Guest in Noida</strong> on our directory, there are many verified PGs where food and stay both come in one place. Our team has personally tasted the food of every PG, bringing the trusted names of <strong>Noida Paying Guest</strong> and the <strong>Best PG in Noida</strong> straight to you. 
                    </p>
                    <p>
                      We provide full information of <strong>PG Accommodation in Noida</strong> and clean <strong>PG Room in Noida</strong> where proper ventilation and lighting arrangements have been verified.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 text-xs font-semibold text-slate-700">
                      <div className="bg-slate-50 p-4 rounded-xl border">
                        <span className="text-blue-600 font-bold block mb-1">Privacy & Comfort</span>
                        Options like <strong>Single Room PG in Noida</strong>, <strong>PG with Food in Noida</strong>, and <strong>AC PG in Noida</strong> or <strong>Furnished PG in Noida</strong> equipped with bed, table, chair and almirah.
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border">
                        <span className="text-purple-600 font-bold block mb-1">Gender Specific Spaces</span>
                        Dedicated categories like <strong>Ladies PG in Noida</strong>, <strong>PG for Female in Noida</strong> with strict no-men entry policies, alongside <strong>PG for Male in Noida</strong> options.
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border">
                        <span className="text-emerald-600 font-bold block mb-1">Targeted Demographics</span>
                        Tailored options for groups: <strong>PG for Students in Noida</strong>, <strong>PG for Working Professionals in Noida</strong>, as well as <strong>Couple Friendly PG in Noida</strong> and <strong>PG for Couples in Noida</strong>.
                      </div>
                    </div>
                  </div>

                  {/* Luxury and Coliving Segment */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-slate-900">The Premium Category of Luxury and Coliving PGs</h4>
                    <p>
                      If you want a premium and classy life, then in the section of <strong>Luxury PG in Noida</strong> our team has placed verified PGs where high class premium rooms, gym, and recreational areas are available. Similarly, our separate category of <strong>Coliving PG in Noida</strong> is popular among the new generation looking to build a good social life. A PG that does not complete our strict quality checklist is never placed in the list of Luxury or Coliving spaces.
                    </p>
                  </div>

                  {/* Final Trust Summary */}
                  <div className="bg-slate-900 text-slate-300 p-6 sm:p-10 rounded-2xl space-y-4">
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-blue-400" />
                      Being Listed on KP Zone Stays Means You Are Fully Safe
                    </h4>
                    <p className="text-sm leading-relaxed">
                      The biggest strength of our team is that we have verified every listing with our own eyes. From <strong>Hostel in Noida</strong> to <strong>PG in Noida</strong>, in every category whatever name is there, it is 100% real, 100% safe and 100% verified. The moment you come to <span className="text-blue-400 underline font-medium">www.kpzonestays.com</span>, every piece of information is transparent so you face zero cheating feelings. All trusted hostels and PGs of Greater Noida are present right here for you.
                    </p>
                  </div>

                </div>

                {/* Smooth Fade Overlay */}
                {!expanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none" />
                )}
              </div>

              {/* Dynamic Action Trigger Toggle */}
              <div className="mt-8 text-center relative z-10">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-[0.98]"
                >
                  <span>{expanded ? "Read Less" : "Read More"}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-500 text-slate-300 ${
                      expanded ? "rotate-180 text-blue-400" : ""
                    }`}
                  />
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}