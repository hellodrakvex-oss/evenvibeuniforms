"use client";

import { ShieldCheck, Users, CalendarClock, MapPin } from "lucide-react";

const statsData = [
  {
    icon: ShieldCheck,
    value: "15+",
    title: "YEARS EXPERIENCE",
  },
  {
    icon: Users,
    value: "1 LAKH+",
    title: "UNIFORMS DELIVERED",
  },
  {
    icon: CalendarClock,
    value: "10–30 DAYS",
    title: "TYPICAL DELIVERY",
  },
  {
    icon: MapPin,
    value: "TN + KERALA",
    title: "SERVICE REACH",
  },
];

export default function Stats() {
  return (
    <section aria-labelledby="stats-heading" className="relative w-full border-y border-gray-100 flex items-center min-h-[180px] md:min-h-[220px] py-10 md:py-0 overflow-hidden group">
      <h2 id="stats-heading" className="sr-only">Our Statistics</h2>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-[1.02]"
        style={{ backgroundImage: "url('/stats-bg.webp')" }}
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/100" />

      {/* Subtle edge decorations */}
      <div
        className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none z-10"
        style={{
          backgroundImage: "radial-gradient(#3FAE49 2px, transparent 2px)",
          backgroundSize: "16px 16px"
        }}
      />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-b-[1px] border-l-[1px] border-[#3FAE49]/10 rounded-bl-full pointer-events-none transform -translate-x-1/2 translate-y-1/2 z-10" />

      <div className="container mx-auto max-w-[1300px] px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 divide-x-0 md:divide-x divide-gray-100">
          {statsData.map((stat, index) => (
            <div
              key={stat.title}
              className={`flex flex-col items-center justify-center text-center px-4 ${index % 2 === 0 ? "border-r border-gray-100 md:border-r-0" : ""
                }`}
            >
              <div className="flex flex-col items-center">
                <div className="w-[48px] h-[48px] rounded-full bg-[#EAF6EA] flex items-center justify-center mb-4 border border-[#3FAE49]/5 transition-transform hover:scale-105">
                  <stat.icon className="w-5 h-5 text-[#3FAE49]" strokeWidth={1.5} />
                </div>

                <h4 className="text-[32px] md:text-[38px] lg:text-[42px] font-black text-[#3FAE49] leading-none mb-2 tracking-tight">
                  {stat.value}
                </h4>

                <p className="text-[10px] md:text-[11px] font-bold text-[#111827] tracking-[0.15em] uppercase leading-snug">
                  {stat.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
