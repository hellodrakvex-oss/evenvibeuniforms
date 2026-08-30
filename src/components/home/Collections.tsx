"use client";

import { m } from 'framer-motion';
import { ArrowRight, Backpack, GraduationCap, Briefcase, Stethoscope, Bell, Utensils, Shield, Factory, ChefHat, PartyPopper } from "lucide-react";
import Image from "next/image";

const collectionsData = [
  {
    title: "SCHOOL UNIFORMS",
    image: "/images/collections/school.png",
    icon: Backpack,
  },
  {
    title: "T-SHIRTS WEAR",
    image: "/images/collections/tshirt.png",
    icon: Backpack,
  },
  {
    title: "SPORTS WEAR",
    image: "/images/collections/sports.png",
    icon: Backpack,
  },
  {
    title: "COLLEGE UNIFORMS",
    image: "/images/collections/college.png",
    icon: GraduationCap,
  },
  {
    title: "CORPORATE / OFFICE",
    image: "/images/collections/corporate.png",
    icon: Briefcase,
  },
  {
    title: "HOSPITAL UNIFORMS",
    image: "/images/collections/hospital.png",
    icon: Stethoscope,
  },
  {
    title: "HOTEL UNIFORMS",
    image: "/images/collections/hotel.png",
    icon: Bell,
  },
  {
    title: "RESTAURANT UNIFORMS",
    image: "/images/collections/restaurant.png",
    icon: Utensils,
  },
  {
    title: "SECURITY UNIFORMS",
    image: "/images/collections/security.png",
    icon: Shield,
  },
  {
    title: "INDUSTRIAL / FACTORY",
    image: "/images/collections/factory.png",
    icon: Factory,
  },
  {
    title: "CHEF UNIFORMS",
    image: "/images/collections/chef.png",
    icon: ChefHat,
  },
  {
    title: "EVENT UNIFORMS",
    image: "/images/collections/event.png",
    icon: PartyPopper,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Collections() {
  return (
    <section id="uniforms" className="relative w-full bg-[#FAFAFA] py-24 overflow-hidden">

      {/* Subtle Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.04]"
          style={{ backgroundImage: "url('/bg4.webp')" }}
        />
      </div>

      {/* Subtle Green Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3FAE49]/[0.03] rounded-full blur-[80px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#3FAE49]/[0.02] rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2 pointer-events-none z-0" />

      <div className="container mx-auto max-w-[1440px] px-6 lg:px-12 relative z-10 flex flex-col">

        {/* Header Area */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={itemVariants}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-[#3FAE49]" />
            <span className="text-[#3FAE49] font-bold text-[11px] tracking-[0.2em] uppercase">
              OUR UNIFORM COLLECTIONS
            </span>
            <div className="w-8 h-[1px] bg-[#3FAE49]" />
          </div>
          <h2 className="text-[32px] md:text-[42px] font-black text-[#111827] uppercase tracking-tight leading-[1.1] mb-5">
            UNIFORMS FOR EVERY TEAM
          </h2>
          <p className="text-gray-500 text-[14px] md:text-[15px] font-medium max-w-[600px]">
            From schools to industries, we create professional uniforms designed for every environment.
          </p>
          <div className="flex items-center gap-1.5 mt-5">
            <div className="w-2 h-2 rounded-full bg-[#3FAE49]" />
            <div className="w-12 h-[2px] bg-[#3FAE49]" />
            <div className="w-2 h-2 rounded-full bg-[#3FAE49]" />
          </div>
        </m.div>

        {/* Collections Grid */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6"
        >
          {collectionsData.map((collection) => {
            const Icon = collection.icon;
            return (
              <m.div
                key={collection.title}
                variants={itemVariants}
                className="group relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1.5 border border-black/5"
              >
                {/* Background Image */}
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Content Container */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end">

                  {/* Circular Badge with Icon */}
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-3 shadow-md transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#3FAE49]">
                    <Icon className="w-5 h-5 text-[#3FAE49] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>

                  {/* Title and Arrow */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-bold text-[14px] md:text-[15px] tracking-wide leading-snug pr-2">
                      {collection.title}
                    </h3>
                  </div>
                </div>
              </m.div>
            );
          })}
        </m.div>

      </div>
    </section>
  );
}
