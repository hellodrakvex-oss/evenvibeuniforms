"use client";

import { m } from 'framer-motion';

export default function WhyEvenvibe() {
  return (
    <section
      id="about"
      className="relative w-full bg-white pt-24 pb-32 overflow-hidden"
      style={{
        backgroundImage: "url('/bg2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    > {/* Subtle Dotted Pattern (Upper Right) */}


      <div className="container mx-auto max-w-[1200px] px-6 lg:px-12 relative z-10 flex flex-col items-center text-center translate-y-10">

        {/* Top Label */}
        <m.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex items-center gap-3 mb-8 lg:mb-10"
        >
          <div className="w-8 h-[1px] bg-[#3FAE49]" />
          <div className="text-[#3FAE49] font-bold text-[12px] tracking-[0.2em] uppercase">
            WHY EVENVIBE
          </div>
        </m.div>

        {/* Large Editorial Heading with Photographic Clipping Mask */}
        <m.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-8 relative flex items-baseline justify-center"
        >
          <h2
            className="text-[54px] sm:text-[80px] lg:text-[130px] font-black leading-[0.9] tracking-tighter uppercase pb-2"
            style={{
              backgroundImage: "url('/text.webp')",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "transparent" // Fallback
            }}
          >
            UNIFORMS<br />THAT UNITE
          </h2>
          <span className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full bg-[#3FAE49] ml-1 sm:ml-2 lg:ml-3 shrink-0 self-end mb-4 sm:mb-6 lg:mb-10" />
        </m.div>

        {/* Description */}
        <m.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-[17px] md:text-[20px] text-[#111827] leading-[1.6] max-w-[650px] lg:max-w-[700px] mb-10"
        >
          At <span className="text-[#3FAE49] font-bold">EVENVIBE</span> UNIFORMS, we design and deliver high-quality uniforms that reflect your brand identity and team spirit.
        </m.p>

        {/* Decorative Divider */}
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex items-center justify-center gap-3 mb-24"
        >
          <div className="w-2 h-2 rounded-full bg-[#3FAE49]" />
          <div className="w-16 h-1.5 rounded-full bg-[#3FAE49]" />
          <div className="w-2 h-2 rounded-full bg-[#3FAE49]" />
        </m.div>



        {/* Next Section Heading */}


      </div>


    </section>
  );
}
