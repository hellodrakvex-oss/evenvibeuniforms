"use client";

import { m } from 'framer-motion';
import {
  PenTool, Layers, Factory, Truck,
  FileText, MessageCircle, ArrowRight,
  ShieldCheck, Clock, Users, Shirt,
  Tag
} from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function FinalCTA() {
  return (
    <section className="w-full py-10 md:py-5 bg-white">
      <div className="container mx-auto max-w-[1440px] px-4 md:px-6 lg:px-12">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="relative w-full bg-[#FDFBF7] rounded-[28px] overflow-hidden border border-[#EAE6DF] shadow-[0_4px_30px_rgba(0,0,0,0.02)] px-6 py-10 md:px-12 md:py-14 lg:px-20 flex flex-col items-center text-center"
        >
          {/* Subtle Textile Noise Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.22] pointer-events-none"
            style={{
              backgroundImage: "url('/bg5.webp')",
            }}
          />

          {/* Decorative Edge Elements */}


          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">

            {/* Header */}
            <m.div variants={itemVariants} className="flex items-center gap-4 mb-5">
              <div className="w-10 h-[1.5px] bg-[#3FAE49]" />
              <span className="text-[#3FAE49] font-bold text-[12px] tracking-[0.25em] uppercase">
                LET&apos;S GET STARTED
              </span>
              <div className="w-10 h-[1.5px] bg-[#3FAE49]" />
            </m.div>

            <m.h2 variants={itemVariants} className="text-[32px] md:text-[48px] lg:text-[56px] font-black uppercase tracking-tighter leading-[1.1] mb-6 text-[#111827]">
              YOUR TEAM DESERVES <br className="hidden md:block" />
              A UNIFORM <span className="text-[#3FAE49]">THAT STANDS OUT.</span>
            </m.h2>

            <m.p variants={itemVariants} className="text-gray-600 font-medium text-[15px] md:text-[18px] max-w-2xl leading-relaxed mb-10">
              Tell us what you need, and our uniform experts will help you with design, fabric, customization and bulk production.
            </m.p>

            {/* Center Decorative Divider */}
            <m.div variants={itemVariants} className="flex items-center gap-4 w-full max-w-[200px] mb-12">
              <div className="flex-1 h-[1px] bg-[#3FAE49]/30" />
              <Shirt className="w-5 h-5 text-[#3FAE49]" strokeWidth={1.5} />
              <div className="flex-1 h-[1px] bg-[#3FAE49]/30" />
            </m.div>

            {/* Service Highlights */}
            <m.div variants={itemVariants} className="w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-y-10 lg:gap-y-0 w-full max-w-3xl mb-16">
              {[
                { name: "DESIGN", icon: PenTool },
                { name: "FABRIC", icon: Layers },
                { name: "BRANDING", icon: Tag },
                { name: "PRODUCTION", icon: Factory },
                { name: "DELIVERY", icon: Truck }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center w-1/2 md:w-1/3 lg:w-auto px-4 relative group cursor-default">
                  {i !== 0 && (
                    <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-[#EAE6DF]" />
                  )}
                  <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-[#3FAE49]/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#EAF6EA] transition-all duration-300">
                    <item.icon className="w-6 h-6 text-[#3FAE49]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[12px] font-black text-[#111827] uppercase tracking-widest">{item.name}</span>
                </div>
              ))}
            </m.div>

            {/* CTA Buttons */}
            <m.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full justify-center">
              <Link
                href="/quote"
                className="group flex items-center justify-center gap-3 bg-[#3FAE49] hover:bg-[#2A3F2D] text-white px-8 py-4 md:py-5 rounded-xl font-bold text-[13px] md:text-[14px] tracking-widest uppercase transition-all duration-300 w-full sm:w-auto shadow-md hover:shadow-lg"
              >
                <FileText className="w-5 h-5 hidden sm:block" />
                REQUEST A QUOTE
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="https://wa.me/919344039068"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-white border-2 border-[#3FAE49] hover:bg-[#EAF6EA] text-[#3FAE49] px-8 py-4 md:py-5 rounded-xl font-bold text-[13px] md:text-[14px] tracking-widest uppercase transition-all duration-300 w-full sm:w-auto shadow-sm"
              >
                <MessageCircle className="w-5 h-5 transform group-hover:-rotate-12 transition-transform" />
                WHATSAPP US
              </Link>
            </m.div>

            {/* Trust Benefits Strip */}
            <m.div variants={itemVariants} className="w-full bg-white/90 backdrop-blur-md border border-gray-100/50 rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 shadow-sm">
              {[
                { title: "PREMIUM QUALITY", desc: "Finest fabrics & perfect finishing", icon: ShieldCheck },
                { title: "ON-TIME DELIVERY", desc: "Reliable timelines, every time", icon: Clock },
                { title: "TRUSTED BY 1000+", desc: "Schools, corporates & teams", icon: Users }
              ].map((trust, i) => (
                <div key={i} className="flex items-center gap-4 w-full md:w-1/3 relative justify-start md:justify-center px-4">
                  {i !== 0 && (
                    <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-14 bg-gray-100" />
                  )}
                  <div className="w-12 h-12 rounded-full border border-[#3FAE49]/20 flex items-center justify-center flex-shrink-0 bg-[#FDFBF7]">
                    <trust.icon className="w-6 h-6 text-[#3FAE49]" strokeWidth={1.5} />
                  </div>
                  <div className="text-left">
                    <h5 className="font-black text-[#111827] text-[13px] uppercase tracking-wider mb-0.5">{trust.title}</h5>
                    <p className="text-[12px] text-gray-500 font-medium">{trust.desc}</p>
                  </div>
                </div>
              ))}
            </m.div>

          </div>
        </m.div>
      </div>
    </section>
  );
}
