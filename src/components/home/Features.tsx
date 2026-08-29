"use client";

import { m } from 'framer-motion';
import { Shirt, Palette, Scissors, Truck } from "lucide-react";

const featuresData = [
  {
    icon: Shirt,
    title: "PREMIUM FABRICS",
    description: "High-quality fabrics designed for comfort, durability and daily professional use.",
  },
  {
    icon: Palette,
    title: "CUSTOM DESIGN",
    description: "Uniforms customized to match your brand identity, colors and requirements.",
  },
  {
    icon: Scissors,
    title: "QUALITY STITCHING",
    description: "Precise stitching and finishing for a clean, professional appearance.",
  },
  {
    icon: Truck,
    title: "FAST DELIVERY",
    description: "Efficient production and reliable delivery for your deadlines.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Features() {
  return (
    <section className="relative w-full bg-white py-24 overflow-hidden border-b border-gray-100">

      {/* Subtle Background Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[1.0] z-0 pointer-events-none"
        style={{ backgroundImage: "url('/bg4.webp')" }}
      />

      {/* Subtle Green Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3FAE49]/[0.04] rounded-full blur-[80px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none z-0" />

      <div className="container mx-auto max-w-[1300px] px-6 lg:px-12 relative z-10 flex flex-col">

        {/* Header Area */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={itemVariants}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-[1px] bg-[#3FAE49]" />
            <span className="text-[#3FAE49] font-bold text-[11px] tracking-[0.2em] uppercase">
              WHAT WE DELIVER
            </span>
            <div className="w-8 h-[1px] bg-[#3FAE49]" />
          </div>
          <h2 className="text-[32px] md:text-[40px] font-black text-[#111827] uppercase tracking-tight leading-[1.1] max-w-[650px]">
            UNIFORMS BUILT FOR EVERY TEAM
          </h2>
        </m.div>

        {/* Features Grid */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 lg:gap-y-0"
        >
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <m.div
                key={feature.title}
                variants={itemVariants}
                className={`group flex flex-col px-4 sm:px-8 relative bg-transparent transition-transform duration-300 hover:-translate-y-1 ${index % 2 === 0 ? "sm:border-r border-gray-100 lg:border-r-0" : ""
                  } ${index !== 3 ? "lg:border-r border-gray-100" : ""
                  }`}
              >
                {/* Icon */}
                <div className="w-[52px] h-[52px] rounded-full bg-[#EAF6EA] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-[22px] h-[22px] text-[#3FAE49]" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-[16px] font-black text-[#111827] uppercase tracking-wider mb-3">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                  {feature.description}
                </p>

                {/* Animated Accent Line */}
                <div className="w-8 h-[2px] bg-[#3FAE49] mt-6 transition-all duration-300 group-hover:w-16" />
              </m.div>
            );
          })}
        </m.div>

      </div>
    </section>
  );
}
