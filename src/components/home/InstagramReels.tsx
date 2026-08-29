"use client";

import { m } from 'framer-motion';
import {
  Play,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Video,
  Users,
  Heart
} from "lucide-react";
import Image from "next/image";

const InstagramIcon = ({ className = "w-6 h-6", strokeWidth = 1.5 }: { className?: string, strokeWidth?: number }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);



const reels = [
  {
    image: "/images/insta/1.webp",
    url: "https://www.instagram.com/reel/Dck78ZDx3WE/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
  {
    image: "/images/insta/2.webp",
    url: "https://www.instagram.com/reel/Dca2s73Rfsz/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
  {
    image: "/images/insta/3.webp",
    url: "https://www.instagram.com/reel/DcVFjHFxjUc/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
  {

    image: "/images/insta/4.webp",
    url: "https://www.instagram.com/reel/DcSkHcfxcfW/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

export default function InstagramReels() {
  return (
    <section id="instagram" className="w-full bg-white py-24 overflow-hidden">
      <div className="container mx-auto max-w-[1440px] px-6 lg:px-12">

        {/* HEADER SECTION */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-col items-center text-center mb-16"
        >
          <m.div variants={itemVariants} className="flex items-center gap-4 mb-5">
            <div className="w-12 h-[1px] bg-[#3FAE49]" />
            <div className="flex items-center gap-2 text-[#3FAE49] font-bold text-[13px] tracking-[0.2em] uppercase">
              <InstagramIcon className="w-4 h-4" strokeWidth={2} />
              <span>FOLLOW OUR WORK</span>
            </div>
            <div className="w-12 h-[1px] bg-[#3FAE49]" />
          </m.div>

          <m.h2 variants={itemVariants} className="text-[40px] md:text-[56px] lg:text-[64px] font-black uppercase tracking-tighter leading-tight mb-4">
            <span className="text-[#3FAE49]">EVENVIBE</span> <span className="text-[#111827]">ON INSTAGRAM</span>
          </m.h2>

          <m.p variants={itemVariants} className="text-gray-600 font-medium text-[16px] md:text-[18px] max-w-[700px] leading-relaxed mb-10">
            Behind the scenes, new uniform designs, production moments and our latest work.
          </m.p>


        </m.div>


        {/* REELS SECTION */}
        <div className="relative w-full mb-16">
          {/* Navigation Arrows */}
          <button aria-label="Previous Reel" className="hidden xl:flex absolute left-[-24px] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center z-10 hover:border-[#3FAE49] hover:text-[#3FAE49] transition-colors duration-300">
            <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
          </button>

          <button aria-label="Next Reel" className="hidden xl:flex absolute right-[-24px] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center z-10 hover:border-[#3FAE49] hover:text-[#3FAE49] transition-colors duration-300">
            <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
          </button>

          {/* Reels Container */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="flex overflow-x-auto xl:grid xl:grid-cols-4 gap-4 md:gap-6 snap-x snap-mandatory hide-scrollbar pb-8 xl:pb-0 px-2 xl:px-0"
          >
            {reels.map((reel, index) => (
              <m.a
                key={index}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch Instagram Reel"
                variants={itemVariants}
                className="group relative block w-[280px] md:w-[320px] xl:w-full flex-shrink-0 snap-center aspect-[9/16] rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer bg-black"
              >
                {/* Background Image */}
                <Image
                  src={reel.image}
                  alt={`EvenVibe Uniforms Instagram Reel ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 280px, (max-width: 1200px) 320px, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />

                {/* Top Bar (Instagram Style) */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <Video className="w-4 h-4 text-white" fill="white" />
                    <span className="text-white text-[12px] font-bold tracking-wide">Reels</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[1.5px]">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <InstagramIcon className="w-4 h-4 text-black" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#3FAE49]/90 group-hover:border-[#3FAE49]">
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="w-0 h-[2px] bg-[#3FAE49] mb-4 transition-all duration-500 group-hover:w-12" />
                  <div className="flex items-end justify-end">
                    <MoreHorizontal className="w-5 h-5 text-white/70" />
                  </div>
                </div>
              </m.a>
            ))}
          </m.div>
        </div>


        {/* BOTTOM CTA BAR */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full bg-[#FDFDFD] border border-gray-200 rounded-[24px] p-6 lg:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Left Info */}
          <div className="flex items-center gap-5 lg:w-[40%]">
            <div className="w-16 h-16 flex-shrink-0 rounded-full bg-[#EAF6EA] border border-[#3FAE49]/20 flex items-center justify-center">
              <InstagramIcon className="w-7 h-7 text-[#3FAE49]" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-bold text-[#3FAE49] text-[15px] mb-1">@evenvibeuniforms</h4>
              <p className="text-gray-500 text-[13px] font-medium leading-relaxed">
                Follow us for more updates, new designs and behind the scenes.
              </p>
            </div>
          </div>

          {/* Middle Stats */}
          <div className="flex items-center justify-center gap-8 lg:gap-12 lg:w-[30%]">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-[#3FAE49]" strokeWidth={1.5} />
              <div>
                <div className="font-black text-[#111827] text-[16px] leading-none mb-1">272</div>
                <div className="text-[10px] text-gray-400 font-bold tracking-wider uppercase">FOLLOWERS</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-[#3FAE49]" strokeWidth={1.5} />
              <div>
                <div className="font-black text-[#111827] text-[16px] leading-none mb-1">49</div>
                <div className="text-[10px] text-gray-400 font-bold tracking-wider uppercase">POSTS</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Video className="w-6 h-6 text-[#3FAE49]" strokeWidth={1.5} />
              <div>
                <div className="font-black text-[#111827] text-[16px] leading-none mb-1">49</div>
                <div className="text-[10px] text-gray-400 font-bold tracking-wider uppercase">REELS</div>
              </div>
            </div>
          </div>

          {/* Right Button */}
          <div className="lg:w-[30%] flex justify-end w-full">
            <a
              href="https://www.instagram.com/evenvibe__uniforms?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-[#3FAE49] hover:bg-[#2A3F2D] text-white px-8 py-4 rounded-[12px] font-bold text-[13px] tracking-widest uppercase transition-all duration-300 w-full lg:w-auto shadow-md hover:shadow-lg"
            >
              SEE MORE ON INSTAGRAM
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </m.div>

      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
