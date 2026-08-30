"use client";
import Link from "next/link";
import { m } from 'framer-motion';
import { Play, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[100svh] lg:h-[85vh] lg:min-h-[640px] lg:max-h-[850px] flex items-center overflow-hidden pt-20 lg:pt-0">
      {/* 
        Full-bleed background image.
        On desktop, object-cover object-right keeps the models on the right and the white space on the left.
        On mobile, object-[85%_center] ensures the models stay visible while providing space for text.
      */}
      <m.div
        initial={{ scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <picture>
          <source media="(max-width: 767px)" srcSet="/bg02.png" />
          <source media="(min-width: 768px)" srcSet="/bg02.png" />
          <img
            src="/bg02.png"
            alt="EVENVIBE UNIFORMS Background"
            className="w-full h-full object-cover object-[80%_top] lg:object-right"
            // Using fetchpriority for immediate LCP loading
            fetchPriority="high"
          />
        </picture>
        {/* Extremely subtle mobile gradient just to guarantee text readability if aspect ratios clash, completely invisible on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent lg:hidden z-0 pointer-events-none" />
      </m.div>

      <div className="container mx-auto max-w-[1440px] px-6 lg:px-12 relative z-10 w-full h-full flex items-center">
        {/* Content Area - Carefully restricted width to fit the left negative space and avoid colliding with models */}
        <div className="w-full max-w-[480px] pt-10 pb-20 lg:py-0 flex flex-col justify-center">

          <m.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-5 h-[2px] bg-[#3FAE49]" />
            <p className="text-[#3FAE49] font-bold text-[10px] sm:text-[11px] tracking-[0.15em] uppercase">
              CUSTOM UNIFORM MANUFACTURER
            </p>
          </m.div>

          {/* Reduced headline size slightly for better fit and balance */}
          <m.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-[40px] sm:text-[50px] lg:text-[60px] font-black leading-[0.92] tracking-tight mb-5 uppercase"
          >
            <span className="text-[#111827] block">UNIFORMS</span>
            <span className="text-[#111827] block">THAT UNITE.</span>
            <span className="text-[#3FAE49] block mt-2 lg:mt-3">QUALITY THAT</span>
            <span className="text-[#3FAE49] block">REPRESENTS.</span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-[15px] sm:text-[17px] text-[#374151] leading-[1.6] max-w-[440px] mb-8 font-medium"
          >
            At EVENVIBE UNIFORMS, we design and deliver high-quality uniforms
            that reflect your brand identity and team spirit.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-8"
          >
            <Link
              href="/quote"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-[#3FAE49] hover:bg-[#2E7D32] text-white rounded-lg px-7 py-3.5 text-[13px] font-bold transition-all shadow-sm"
            >
              REQUEST A QUOTE
            </Link>
            <a
              href="#uniforms"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-white text-[#111827] border border-gray-200 hover:border-[#3FAE49] hover:text-[#3FAE49] rounded-lg px-7 py-3.5 text-[13px] font-bold transition-all shadow-sm"
            >
              EXPLORE UNIFORMS
              <ArrowRight className="w-[14px] h-[14px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all -ml-5 group-hover:ml-0" />
            </a>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="flex items-center gap-3 mb-12"
          >
            <Link href="#clients">
              <button aria-label="View our clients video" className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-[#111827] hover:border-[#3FAE49] hover:bg-[#3FAE49] hover:text-white transition-all group shadow-sm bg-white">
                <Play className="w-[12px] h-[12px] ml-0.5 fill-current" />
              </button>
              <span className="text-[11px] font-bold tracking-[0.1em] text-[#374151] hover:text-[#3FAE49] cursor-pointer transition-colors uppercase">
                VIEW OUR CLIENTS
              </span>
            </Link>

          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-auto lg:mt-0 lg:absolute lg:bottom-12"
          >
            Trusted by Schools <span className="mx-1.5">•</span> Sports Teams <span className="mx-1.5">•</span> Corporates <span className="mx-1.5">•</span> Institutions
          </m.div>
        </div>
      </div>
    </section>
  );
}
