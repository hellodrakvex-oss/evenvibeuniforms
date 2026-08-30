"use client";

import React from 'react';
import { m } from 'framer-motion';
import { Users, Briefcase, GraduationCap, Handshake, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// --- DATA ARRAYS ---
type ClientType = {
  name: string;
  shortName: string;
  color: string;
  font?: string;
  logo?: string;
  isNavy?: boolean;
};

const corporateClients: ClientType[] = [
  { name: "MRF LIMITED", shortName: "MRF", color: "text-[#E31837]", font: "font-black", logo: "/images/logo/corporate/mrf.PNG" },
  { name: "POLYHOSE", shortName: "POLYHOSE", color: "text-[#00573D]", font: "font-black tracking-tighter", logo: "/images/logo/corporate/polyhose.PNG" },
  { name: "INDIAN NAVY", shortName: "INDIAN NAVY", color: "text-[#1C325B]", font: "font-serif font-bold tracking-widest", isNavy: true, logo: "/images/logo/corporate/indian navy.PNG" },
  { name: "PART TIMER", shortName: "PART TIMER", color: "text-[#111827]", font: "font-black tracking-wider", logo: "/images/logo/corporate/part timer.PNG" },
  { name: "SWIGGY", shortName: "SWIGGY", color: "text-[#111827]", font: "font-black italic", logo: "/images/logo/corporate/swiggy.PNG" },
  { name: "ZOMATO", shortName: "ZOMATO", color: "text-[#00529B]", font: "font-bold tracking-tight", logo: "/images/logo/corporate/Zomato.PNG" }
];

const schoolClients: ClientType[] = [
  { name: "Montfort Schools", shortName: "MONTFORT", color: "text-[#1C325B]", logo: "/images/logo/school/monfort school.PNG" },
  { name: "Sri Vignesh Vidyalaya", shortName: "SRI VIGNESH", color: "text-[#00573D]", logo: "/images/logo/school/sri vignesh vidyalaya school.PNG" },
  { name: "Vignesh Sri Renga Matriculation", shortName: "SRI RENGA", color: "text-[#111827]", logo: "/images/logo/school/vignesh sri renga school.PNG" },
  { name: "Lakshmi School", shortName: "LAKSHMI", color: "text-[#E31837]", logo: "/images/logo/school/lakshmi school.PNG" },
  { name: "Lions Matriculation School", shortName: "LIONS", color: "text-[#00529B]", logo: "/images/logo/school/lions school.PNG" },
  { name: "Nachiyar Montessori School", shortName: "NACHIYAR MONTESSORi", color: "text-[#111827]", logo: "/images/logo/school/nachiyar montessori school.PNG" },
  { name: "Nachiyar Padasalai", shortName: "NACHIYAR PADASALAI", color: "text-[#111827]", logo: "/images/logo/school/nachiyar padasala school.PNG" },
  { name: "Raja Ravi Varma School", shortName: "RAJA RAVI VARMA", color: "text-[#111827]", logo: "/images/logo/school/raja ravi school.PNG" },
  { name: "St. joseph's Matriculations School", shortName: "ST. JOSEPH'S", color: "text-[#111827]", logo: "/images/logo/school/st.joseph school.PNG" },
  { name: "Sowma Matriculation School", shortName: "SOWMYA", color: "text-[#111827]", logo: "/images/logo/school/sowma school.PNG" },
  { name: "Sri Vignesh School", shortName: "SRI VIGNESH", color: "text-[#111827]", logo: "/images/logo/school/sri vignesh school.PNG" },
  { name: "Vriksham School", shortName: "VRIKSHAM", color: "text-[#111827]", logo: "/images/logo/school/vriksham school.PNG" },
  { name: "RamaKrishna School", shortName: "RAMAKRISHNA", color: "text-[#111827]", logo: "/images/logo/school/Ramakrishna School.PNG" },
  { name: "Mount Flower English School", shortName: "MOUNT FLOWER", color: "text-[#111827]", logo: "/images/logo/school/Mount flower school.PNG" },
  { name: "CSI Ewart Global School", shortName: "CSI EWART", color: "text-[#111827]", logo: "/images/logo/school/csi ewart.PNG" },
  { name: "Mount Zion School", shortName: "MOUNT ZION", color: "text-[#111827]", logo: "/images/logo/school/mount zion.PNG" },
  { name: "Image Creative Education", shortName: "IMAGE CREATIVE", color: "text-[#111827]", logo: "/images/logo/school/image creative.PNG" },

];

// --- RENDER HELPERS ---
const renderCorporate = (client: ClientType) => (
  <div className="flex flex-col items-center justify-center text-center gap-2 px-2 w-full h-full">
    {client.logo ? (
      <div className="relative w-full max-w-[110px] h-[50px] mb-1">
        <Image src={client.logo} alt={client.name} fill className="object-contain" />
      </div>
    ) : (
      <>
        {client.isNavy ? (
          <ShieldCheck className="w-8 h-8 text-[#1C325B]" strokeWidth={1.5} />
        ) : (
          <Briefcase className={`w-8 h-8 ${client.color || "text-[#64748B]"}`} strokeWidth={1.5} />
        )}
      </>
    )}
    <span className={`text-[10px] md:text-[11px] font-bold leading-tight uppercase tracking-wider text-[#64748B] max-w-[130px]`}>
      {client.name}
    </span>
  </div>
);

const renderSchool = (client: ClientType) => (
  <div className="flex flex-col items-center justify-center text-center gap-2 px-2 w-full h-full">
    {client.logo ? (
      <div className="relative w-full max-w-[110px] h-[50px] mb-1">
        <Image src={client.logo} alt={client.name} fill className="object-contain" />
      </div>
    ) : (
      <GraduationCap className={`w-8 h-8 ${client.color}`} strokeWidth={1.5} />
    )}
    <span className={`text-[10px] md:text-[11px] font-bold leading-tight uppercase tracking-wider text-[#64748B] max-w-[130px]`}>
      {client.name}
    </span>
  </div>
);

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// --- CAROUSEL COMPONENT ---
function MarqueeCarousel({ items, renderItem, speed = "35s" }: { items: ClientType[], renderItem: (item: ClientType) => React.ReactNode, speed?: string }) {
  // Duplicate 4 times to ensure track is wider than the largest ultrawide monitor
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="w-full bg-white border border-[#E5E7EB] rounded-[20px] md:rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] h-[110px] md:h-[130px] lg:h-[140px] flex items-center overflow-hidden"
      >
        <div
          className="flex h-full w-max animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDuration: speed }}
        >
          {duplicatedItems.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[220px] xl:w-[240px] h-full flex items-center justify-center border-r border-[#E5E7EB]/70 px-4 group/item"
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); } /* Exactly one set of items out of 4 */
        }
        .animate-marquee {
          animation: marquee linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
}

// --- MAIN SECTION ---
export default function Clients() {
  return (
    <section id="clients" className="w-full bg-[#FDFDFD] py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto max-w-[1350px] px-6 md:px-10 lg:px-12">
        {/* HEADER */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <m.div variants={itemVariants} className="flex items-center gap-4 mb-5">
            <div className="w-8 h-[2px] bg-[#3FAE49]" />
            <div className="flex items-center gap-2 text-[#3FAE49]">
              <Users className="w-4 h-4" />
              <span className="font-bold text-[12px] md:text-[13px] tracking-[0.2em] uppercase">
                OUR VALUED CLIENTS
              </span>
            </div>
            <div className="w-8 h-[2px] bg-[#3FAE49]" />
          </m.div>

          <m.h2 variants={itemVariants} className="text-[32px] md:text-[44px] lg:text-[48px] font-black uppercase tracking-tight leading-tight mb-5 text-[#111827]">
            TRUSTED BY <span className="text-[#3FAE49]">LEADING ORGANISATIONS</span>
          </m.h2>

          <m.p variants={itemVariants} className="text-[#64748B] font-medium text-[16px] md:text-[18px] max-w-[700px] leading-relaxed">
            Proud to have served leading organisations, institutions and schools across different industries.
          </m.p>
        </m.div>

        {/* CORPORATE CLIENTS */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="flex-1 border-t border-[#E5E7EB] hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-[#3FAE49]" />
              <h3 className="font-bold text-[14px] md:text-[15px] tracking-[0.15em] uppercase text-[#111827]">
                CORPORATE CLIENTS
              </h3>
            </div>
            <div className="flex-1 border-t border-[#E5E7EB] hidden sm:block"></div>
          </div>

          <MarqueeCarousel
            items={corporateClients}
            renderItem={renderCorporate}
            speed="30s"
          />
        </m.div>

        {/* SCHOOLS & INSTITUTIONS */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-24"
        >
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="flex-1 border-t border-[#E5E7EB] hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-[#3FAE49]" />
              <h3 className="font-bold text-[14px] md:text-[15px] tracking-[0.15em] uppercase text-[#111827]">
                SCHOOLS & INSTITUTIONS
              </h3>
            </div>
            <div className="flex-1 border-t border-[#E5E7EB] hidden sm:block"></div>
          </div>

          <MarqueeCarousel
            items={schoolClients}
            renderItem={renderSchool}
            speed="85s"
          />
        </m.div>

        {/* BOTTOM TRUST CTA */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full bg-[#F0F9F1] rounded-[24px] p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm border border-[#E5E7EB]/50"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left w-full lg:w-auto">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 border border-[#3FAE49]/10">
              <Handshake className="w-8 h-8 md:w-10 md:h-10 text-[#3FAE49]" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-black text-[#111827] text-[18px] md:text-[22px] uppercase tracking-wide mb-2">
                YOUR TRUST. OUR COMMITMENT.
              </h4>
              <p className="text-[#64748B] text-[14px] md:text-[15px] font-medium leading-relaxed max-w-xl">
                We are honoured to be a part of these incredible journeys.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-auto flex justify-center lg:justify-end flex-shrink-0">
            <Link
              href="/quote"
              className="group flex items-center justify-center gap-3 bg-[#3FAE49] hover:bg-[#349640] text-white px-8 py-4 md:py-5 rounded-[14px] font-bold text-[13px] md:text-[14px] tracking-widest uppercase transition-all duration-300 w-full lg:w-auto shadow-[0_4px_14px_rgba(63,174,73,0.3)] hover:shadow-[0_6px_20px_rgba(63,174,73,0.4)]"
            >
              PARTNER WITH US
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </m.div>

      </div>
    </section>
  );
}

