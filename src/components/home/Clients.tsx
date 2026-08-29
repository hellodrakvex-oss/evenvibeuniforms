"use client";

import { m } from 'framer-motion';
import { ShieldCheck, Building2, Handshake, ChevronRight } from "lucide-react";
import Link from "next/link";

const featuredClients = [
  { name: "MRF LIMITED", shortName: "MRF", color: "text-[#E31837]", font: "font-black" },
  { name: "POLYHOSE", shortName: "POLYHOSE", color: "text-[#00573D]", font: "font-black tracking-tighter" },
  { name: "INDIAN NAVY", shortName: "INDIAN NAVY", color: "text-[#1C325B]", font: "font-serif font-bold tracking-widest" }
];

const institutions = [
  "Montfort Schools",
  "Sri Vignesh Vidyalaya School",
  "Vignesh Public School",
  "Sri Renga Matriculation School",
  "Lakshmi School",
  "Sowma School",
  "Raja Ravi Varma Central School",
  "Diyes International School",
  "Lions Matriculation School",
  "Vriksham Anthill School",
  "Nachiyar Padasala School",
  "St. Antony’s Matriculation School",
  "St. Joseph’s Matriculation School",
  "Ewart School",
  "Sri Ramakrishna Vidya Bhavan",
  "Mount Flower English School"
];

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

export default function Clients() {
  return (
    <section id="clients" className="w-full bg-white py-24 overflow-hidden border-t border-gray-50">
      <div className="container mx-auto max-w-[1440px] px-6 lg:px-12">

        {/* HEADER */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-col items-center text-center mb-16"
        >
          <m.div variants={itemVariants} className="flex items-center gap-4 mb-5">
            <div className="w-10 h-[2px] bg-[#3FAE49]" />
            <span className="text-[#3FAE49] font-bold text-[12px] tracking-[0.25em] uppercase">
              MAJOR CLIENTS & INSTITUTIONS
            </span>
            <div className="w-10 h-[2px] bg-[#3FAE49]" />
          </m.div>

          <m.h2 variants={itemVariants} className="text-[36px] md:text-[48px] lg:text-[56px] font-black uppercase tracking-tighter leading-tight mb-4 text-[#111827]">
            TRUSTED BY <span className="text-[#3FAE49]">LEADING ORGANISATIONS</span>
          </m.h2>

          <m.p variants={itemVariants} className="text-gray-500 font-medium text-[16px] md:text-[18px] max-w-[700px] leading-relaxed mb-10">
            Proud to have served leading organisations, institutions and schools across different industries.
          </m.p>

          <m.div variants={itemVariants} className="w-12 h-1 bg-[#3FAE49] rounded-full opacity-30" />
        </m.div>

        {/* FEATURED CLIENTS */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {featuredClients.map((client, index) => (
            <m.div
              key={index}
              variants={itemVariants}
              className="group bg-[#FDFDFD] border border-gray-100 hover:border-[#3FAE49]/30 rounded-[20px] p-8 md:p-12 flex flex-col items-center text-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-[80px] flex items-center justify-center mb-6">
                <span className={`text-[40px] md:text-[48px] leading-none ${client.font} ${client.color}`}>
                  {client.shortName}
                </span>
              </div>
              <h4 className="text-[#111827] font-black text-[14px] uppercase tracking-[0.1em]">{client.name}</h4>
              <div className="w-10 h-[2px] bg-gray-200 group-hover:bg-[#3FAE49] transition-colors duration-300 mt-5" />
            </m.div>
          ))}
        </m.div>

        {/* INSTITUTIONS DIRECTORY */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="bg-[#FDFDFD] border border-gray-100 rounded-[24px] p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
        >
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="flex-1 border-t border-dashed border-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-[#3FAE49]" />
              <h3 className="font-black text-[15px] md:text-[18px] tracking-[0.15em] uppercase text-[#111827]">
                SCHOOLS & INSTITUTIONS
              </h3>
            </div>
            <div className="flex-1 border-t border-dashed border-gray-200 hidden sm:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0">
            {institutions.map((inst, i) => (
              <m.div
                key={i}
                variants={itemVariants}
                className="flex items-center gap-4 py-4 border-b border-gray-50 group hover:border-[#3FAE49]/20 transition-colors"
              >
                <ShieldCheck className="w-5 h-5 text-[#3FAE49] flex-shrink-0" strokeWidth={1.5} />
                <span className="text-[13px] font-bold text-gray-500 group-hover:text-[#111827] uppercase tracking-wider transition-colors leading-snug">
                  {inst}
                </span>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* BOTTOM TRUST CTA */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 w-full bg-[#EAF6EA] border border-[#3FAE49]/10 rounded-[24px] p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#3FAE49]/20 flex-shrink-0">
              <Handshake className="w-10 h-10 text-[#3FAE49]" strokeWidth={1.2} />
            </div>
            <div>
              <h4 className="font-black text-[#111827] text-[18px] md:text-[22px] uppercase tracking-wide mb-2">YOUR TRUST. OUR COMMITMENT.</h4>
              <p className="text-gray-600 text-[14px] md:text-[15px] font-medium leading-relaxed max-w-lg">
                We are honoured to be a part of these incredible journeys.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <Link
              href="/quote"
              className="group flex items-center justify-center gap-3 bg-[#3FAE49] hover:bg-[#2A3F2D] text-white px-8 py-4 md:py-5 rounded-xl font-bold text-[13px] md:text-[14px] tracking-widest uppercase transition-all duration-300 w-full lg:w-auto shadow-md hover:shadow-lg"
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
