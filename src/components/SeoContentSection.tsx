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
  Tv,
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
            Welcome to KP Zone Stays, a platform from where anyone can find a
            nest in Greater Noida for a 100% safe and secure environment.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
          {[
            {
              metric: "100%",
              label: "Personally Audited",
              desc: "Physical on-site checks",
            },
            {
              metric: "Real Phone",
              label: "Camera Captures",
              desc: "No misleading stock images",
            },
            {
              metric: "24/7",
              label: "Student Care",
              desc: "Always here to assist",
            },
            {
              metric: "Safe Zone",
              label: "Gated Security",
              desc: "Prioritizing peace of mind",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-white/70 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white"
            >
              <span className="absolute top-3 right-3 text-xs font-bold text-slate-200 group-hover:text-blue-100 transition-colors">
                0{idx + 1}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-indigo-700">
                {stat.metric}
              </h3>
              <p className="text-slate-800 font-semibold text-sm sm:text-base mt-2">
                {stat.label}
              </p>
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
                  {
                    icon: Building2,
                    text: "Verified Hostels & PGs Complete List",
                  },
                ].map((badge, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-medium text-slate-200"
                  >
                    <badge.icon className="w-3.5 h-3.5 text-blue-400" />
                    {badge.text}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-3xl leading-tight">
                Verified Hostels and PGs Complete List
              </h3>
              <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
                Thousands of names show up in the market but telling which one
                is truly good becomes very hard. Discover verified stays backed
                by strict multi-step processing.
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
                  <div className="space-y-4">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <span className="h-6 w-1 rounded-full bg-blue-600 block" />
                        Best Hostel in Greater Noida near GL Bajaj and Knowledge
                        Park, Verified Hostels and PGs.
                      </h4>
                      <p>
                        Welcome to KP Zone Stays a platfarm from where anyone
                        can find a nest in Greater Noida for 100% safe and
                        secure environment. Our team built this directory
                        because every day we were getting messages from people
                        searching for the <a href="https://www.kpzonestays.com/"><i>best hostel in greater noida</i></a> and they
                        could not find the right place. Thousands of names show
                        up in the market but telling which one is truly good
                        becomes very hard. Our team started working to solve
                        this same problem and today every listing on our website
                        has been added only after our team personally verified
                        it.
                      </p>
                      <p>
                        Our team has different members for different tasks and
                        all of us together give full attention to every listing.
                        Whenever a new place <strong>like nalanda living hostel greater
                        noida</strong> joins our directory, a member from our team goes
                        there in person, clicks photos of the rooms from their
                        own phone, talks to the owners and checks every small
                        detail with their own eyes. We never add anyone to the
                        list without visiting ourselves, and that is the reason
                        why you can trust every name on our website. If you are
                        searching for a pg near gl bajaj greater noida, you will
                        find many good verified names on our directory.
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-inner space-y-4">
                      <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        Our Team has Personally Visited and Verified every
                        Listing and that is our biggest strength
                      </h4>

                      <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
                        <li className="flex items-start gap-2">
                          👉 Our verification process is very clear and it has
                          many steps which every member of our team takes very
                          seriously. For any property to get a place in our
                          list, we first meet the owner and check all their
                          documents ourselves. Then we inspect the whole
                          building and check things like fire safety, cctv,
                          water supply and electricity backup. After this our
                          team clicks real photos of the rooms from their own
                          phones and checks every tiny detail with their own
                          eyes.
                        </li>
                        <li className="flex items-start gap-2">
                          👉 Our team has also removed many hostels from the
                          list where we noticed any kind of weakness so that all
                          trusted names for hostel greater noida stay on our
                          directory. Our verification policy is the same for
                          everyone and we never compromise. If any property
                          owner did not share correct details with our team,
                          that property was removed immediately, and that is the
                          reason why we are fully sure about every listing under
                          pg greater noida.
                        </li>
                        <li className="flex items-start gap-2">
                          👉 Our team works differently because we do not just
                          upload a listing, we personally verify every photo,
                          address, owner details and every important detail
                          about the property with our own hands. We want no
                          hidden fact in front of you and we want you to take
                          your decision with full honesty.{" "}
                        </li>
                      </ul>
                      <p className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                        Our team has also removed many hostels from the list
                        where we noticed any kind of weakness so that all
                        trusted names for <strong>hostel greater noida</strong>{" "}
                        stay on our directory. If any property owner did not
                        share correct details with our team, that property was
                        removed immediately under{" "}
                        <strong>pg greater noida</strong>.
                      </p>
                    </div>
                  </div>

                  {/* Row 2: Location Coverage */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-slate-900">
                      Our Team has Covered every Area of Knowledge Park and
                      Greater Noida
                    </h4>
                    <p>
                      In Greater Noida, new hostels are opening in every lane today and everyone claims they are the best, but to catch the real quality our team visits new places every month. In Knowledge Park our team has visited many hostels and we found several names that are truly the best in their category. Our team has covered every area of Knowledge Park and clicked real photos of every property from their own phones.
                    </p>
                    <p>
                      Outside Knowledge Park, our team has also done good work in other parts of Greater Noida and the names for best hostel in knowledge park are on our directory only because our team visited there in person. Our team also noticed that every student has a different budget, so we placed the affordable options in Knowledge Park in a separate section. If you are searching for affordable hostels in knowledge park, you will find many good verified names on our website that are budget-friendly yet never weak in their service.
                    </p>
                    <p>
                      Our team has done its verification in every small and big area of Greater Noida and for that reason if you are searching for affordable hostel in greater noida, every price range option is on our website. Our team made a rule from the start that in every price range only verified and good quality names should be placed in the directory. That is the reason why every student and working professional coming to Greater Noida gets the most correct and safe option from our website. 
                    </p>
                  </div>

                  {/* Row 3: Campus Specific Micro-locations */}
                  <div >
                    <div className="bg-blue-50/50 border border-blue-100/70 p-6 rounded-2xl space-y-3">
                      <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                        The Hostels near GL Bajaj, IILM, Sharda Universe and Lloyd are fully Safe and Verified
                      </h4>
                      <p className="text-sm">
                        When a new student takes admission in any college in Greater Noida, their first task becomes finding a good and safe place to stay near their college. Our team thought, why not personally visit and verify the properties near every college separately. Near GL Bajaj our team has visited many hostels and these have CCTV, proper washroom, regular cleaning and good food. In the section hostels near gl bajaj on our directory, you will find the trusted names that our team personally approved and staying at these hostels, full attention is given to student safety.
                      </p>
                      <p className="text-sm">
                        Our team has also worked near IILM and placed several hostels from there in our list. In the section hostels near iilm you will find those options where students can stay and focus better on their studies. Our team also checked that these hostels have good internet speed, have a study room and the student life there is very supportive. In every hostel our team also spoke with the students so that real feedback could be gathered and we place only the good names on our directory.
                      </p>
                      <p className="text-sm">Our team has covered the whole area near Sharda University as well and after verifying several hostels from there we placed them in our list. In the section hostels near sharda universe you will find every trusted name where students can spend their time well and focus on their studies. Near Lloyd Law College as well our team has done deep inspection of several hostels and in the list of hostels near lloyd you will find names that will fully meet your hopes.</p>
                    </div>

                    
                  </div>

                  {/* Row 4: Category Structuring & Noida Explanations */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-slate-900">
                      Every Category of Hostels is given so that every Visitor can find the right Option as per their need
                    </h4>
                    <p>
                      If you are searching for any good room under Hostel in Noida, you will find everything on our website. Our team has organized the directory in a way that you can easily browse and find your category. Our team has placed in the list all those hostels that could be helpful for students and working professionals in Greater Noida. In one place you get every option from budget to premium.
                    </p>
                    <p>
                      If your question is where the full list of Hostels in Noida is available, KP Zone Stays is the best place for you. In our directory there is a section of Best Hostels in Noida where our team has placed only those names that are the best in quality, service and safety all three. Our team has given time to every hostel and noticed every small thing about it, and that is why we guarantee that every name listed on our directory is leading in its category.
                    </p>
                    <p>For students coming to Greater Noida for the first time, there is a separate section on our directory for Student Hostel in Noida where the study environment is good and students get full support in their studies. Our team has also verified in these hostels that internet speed is good, study room is proper and the warden is supportive.</p>
                  </div>

                  {/* Girls Hostels Callout */}
                  <div className="bg-purple-50/40 border border-purple-100 p-6 sm:p-8 rounded-2xl items-center">
                    <div className="md:col-span-3 space-y-2">
                      <h4 className="text-lg font-bold text-purple-950 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-purple-700" />
                        The full List of Safe and Trusted Hostels for Ladies is on our Directory
                      </h4>
                      <p className="text-purple-900/80 text-sm">
                        Our team often gets this question from parents about how safe a place their daughter will stay at in Greater Noida. Keeping this same concern in mind we have placed very good names under girls Hostel in Noida on our directory. Our team has personally verified that here full attention is given to the safety of ladies and the entry of outside people is fully controlled. In these hostels CCTV cameras are placed everywhere and proper arrangement of women security guard is maintained.
                      </p>
                      <p className="text-purple-900/80 text-sm">
                        You get the full list of Ladies Hostels in Noida on our website and the details of every hostel are so clear that you can easily take the right decision. Our team has verified in these hostels that there is a separate kitchen area for ladies, separate washroom facilities and proper lighting system for them. Keeping full attention to the safety and comfort of women, we have also added the section Women's Hostel in Noida in our directory and only women stay there.
                      </p>
                      <p className="text-purple-900/80 text-sm">Working women have a different need and for that reason our team created the separate category of Working Women's Hostel in Noida where only working ladies stay. In these hostels all facilities are as per work needs like flexible timing, proper facility for late night entry and a calm environment to rest after work. Our team has also verified that in these hostels the food quality remains good and proper meals are served on time. </p>
                    </div>
                    
                  </div>

                  {/* Amenities Quick Grid */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-amber-500" />
                      Separate Categories are made as per Facilities so that you spend less time in Searching
                    </h4>
                    <p>
                      Our team has organized each category separately so that
                      you get the right option for your need in the first place:
                    </p>
                    <div className="space-y-2">
                      <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-3 shadow-sm">
                        <Users className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-xs font-bold text-slate-900">
                            Hostels for Students in Noida
                          </p>
                          <p className="text-[10px] text-slate-500">
                            If you are searching for any hostel with basic facilities under Hostels for Students in Noida, you will find many good options on our website. Our team has verified in these hostels that the basic facilities like bed, study table, fan, light and proper washroom all work properly. For food lovers, a separate section of Hostels with Food in Noida is also on our website and good food is served there regularly.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-3 shadow-sm">
                        <User className="w-5 h-5 text-purple-600" />
                        <div>
                          <p className="text-xs font-bold text-slate-900">
                            Single Room Hostels in Noida
                          </p>
                          <p className="text-[10px] text-slate-500">
                            For students who are sensitive about privacy, a separate category of Single Room Hostels in Noida is on our directory and in these rooms the student stays alone. The summer season in Greater Noida gets very hot and for that reason we also made the section AC Hostels in Noida where students stay comfortable even in summer. Our team has organized each category separately so that you get the right option for your need in the first place.
                          </p>
                        </div>
                      </div>
                    
                    </div>
                  </div>

                  {/* PG Segment Section */}
                  <div className="space-y-6 border-t border-slate-200/60 pt-8">
                    <h4 className="text-xl font-bold text-slate-900">
                      The best and Verified List of PG in Greater Noida is available on our Website
                    </h4>
                    <p>
                      The demand for PG has increased a lot today and many students as well as working professionals prefer to stay in a PG only. If you are searching for PG in Noida, you will find many trusted options on our website. Our team has personally verified every PG and only added it to the list after talking to the owner. In these PGs you get a home-like environment and you can focus better on your studies or job.
                    </p>
                    <p>
                      In the section of Paying Guest in Noida on our directory, there are many verified PGs where food and stay both come in one place. Our team has personally tasted the food of every PG and checked it, and talked to the owner to verify every detail. For this same reason you get the trusted names of Noida Paying Guest on our website and every one of them is the best in its category.
                    </p>
                    <p>If you are searching for the list of Best PG in Noida, there are names on our directory that are at the top of every category and have no weakness in their quality. Our team has given the full information of PG Accommodation in Noida on our directory so that you face no difficulty in searching. In our list there are options of PG Room in Noida where the proper ventilation and lighting arrangement of the rooms has been verified by our team. </p>

                    <div className="grid md:grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
                      <div className="bg-slate-50 p-4 rounded-xl border">
                        <span className="text-blue-600 font-bold block mb-1">
                          Our Team has made separate Categories as per PG Facilities and Room Type
                        </span>
                        <p>For those who place privacy at the top, a separate category of Single Room PG in Noida is on our directory and here you get a dedicated single room facility. Our team has also checked in these PGs that all basic facilities work properly and the room is in a good condition. For students or working professionals who are sensitive about food quality, the section of PG with Food in Noida is there where regular meals are served on the proper time.</p>
                        <p>In the harsh summer of Greater Noida, the options of AC PG in Noida help a lot and our team has verified several PGs where the AC works properly. In the summer season both students and working professionals need AC and for that reason we made this section separately. If you need a furniture facility, in the section of Furnished PG in Noida there are PGs where bed, table, chair and almirah all come ready-made.</p>
                        <p>Our team has placed the safety of women at the topmost and for that reason created the separate category of Ladies PG in Noida. In these PGs only ladies stay and the whole environment stays very safe and supportive. Our team has also verified the names of PG for Female in Noida and here there are strict rules that outside men cannot enter. </p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border">
                        <span className="text-purple-600 font-bold block mb-1">
                          Our Team has made separate Categories on our Directory as per the needs of different people
                        </span>
                        <p>Our team has made a separate section for boys and in PG for Male in Noida there are the trusted names where only boys stay and the whole environment remains good. Our team has verified that in these PGs all basic facilities work properly and there is proper cleaning. For students, in the separate category of PG for Students in Noida there are PGs where study table, proper lighting and fast internet facility is fully available. Our team has also understood the separate needs of working professionals and in PG for Working Professionals in Noida there are PGs where the proper environment for work and a calm atmosphere is available.
                        
                        </p>
                        <p>Today many couples stay in Greater Noida and they search for a PG where they get proper privacy. Our team has placed verified names in the section of Couple Friendly PG in Noida where unmarried or married couples can stay very comfortably. In these PGs there is no restriction on couples and they get proper freedom. Similarly the list of PG for Couples in Noida is also on our directory and by staying here couples can live their life very well.</p>
                        <p>Our team believes that everyone has a different need and for that reason from single room to shared room, from ordinary PG to luxury PG, every option is on our website. Whether you need an affordable option or a premium one, verified options in every price range are present on our directory for you.</p>
                    
                      </div>
                
                    </div>
                  </div>

                  {/* Luxury and Coliving Segment */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-slate-900">
                      The Premium Category of Luxury and Coliving PGs is also included in our Directory
                    </h4>
                    <p>
                      If you want a premium and classy life, then in the section of Luxury PG in Noida our team has placed such verified PGs where high class facilities are available. In these PGs there are premium rooms, gym, recreational area and many good facilities. Our team has given space to these PGs in our directory after personally verifying them and by staying here you can live your life in a stylish and comfortable way.
                    </p>
                    <p>The concept of coliving is becoming very popular among the new generation of students and working professionals and for that reason our team created the separate category of Coliving PG in Noida. Here you can stay together with other people of your choice and build a good social life. These PGs are known for their modern design and community events and our team has visited these PGs in person and verified every detail.</p>
                    <p>Our team maintains a strict quality checklist and every PG is rated on the basis of the same checklist. A PG that does not complete this checklist is never placed in the list of Luxury PG in Noida or Coliving PG in Noida. That is the reason why you can fully trust every PG listed on our directory. </p>
                  </div>

                  {/* Final Trust Summary */}
                  <div className="bg-slate-900 text-slate-300 p-6 sm:p-10 rounded-2xl space-y-4">
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-blue-400" />
                      Being Listed on KP Zone Stays means you are fully Safe
                    </h4>
                    <p className="text-sm leading-relaxed">
                      The biggest strength of our team is that we have verified every listing with our own eyes. From Hostel in Noida to PG in Noida, in every category whatever name is there, it is 100% real, 100% safe and 100% verified. The moment you come to www.kpzonestays.com, every information is so clear that your decision becomes very easy. Our team has made sure that no visitor on our website gets any kind of cheated feeling.
                    </p>
                    <p>Our policy is very clear that our team itself talks to every property owner and we click the photo of every property from our own phones. The safety of any property is personally verified by our team and only after that we give it a place in our directory. Our team believes that a good directory is one that is fully honest in every piece of its information. That is the reason why all trusted hostels and PGs of Greater Noida are present on our website.</p>
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
