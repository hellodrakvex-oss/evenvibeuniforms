import Link from "next/link";
import Image from "next/image";
import {
  Phone, MessageCircle, Mail, MapPin, ArrowRight
} from "lucide-react";

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);


export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white overflow-hidden">
      {/* Top CTA Area */}
      <div className="bg-[#0B121F] border-b border-gray-800 py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1440px] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <h3 className="text-[20px] md:text-[24px] font-black uppercase tracking-[0.1em] mb-3 text-white">
              READY TO OUTFIT YOUR TEAM?
            </h3>
            <p className="text-gray-400 text-[14px] md:text-[15px] font-medium leading-relaxed">
              Let&apos;s create professional uniforms designed around your team, brand and requirements.
            </p>
          </div>
          <Link
            href="/quote"
            className="group flex items-center justify-center gap-3 bg-[#3FAE49] hover:bg-[#2A3F2D] text-white px-8 py-4 md:py-5 rounded-xl font-bold text-[13px] md:text-[14px] tracking-widest uppercase transition-all duration-300 flex-shrink-0 shadow-[0_4px_20px_rgba(63,174,73,0.2)] hover:shadow-[0_8px_25px_rgba(63,174,73,0.3)] w-full md:w-auto"
          >
            REQUEST A QUOTE
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 max-w-[1440px] pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Column 1 - Brand */}
          <div className="lg:col-span-4 flex flex-col lg:pr-8">
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center group"
                aria-label="EvenVibe Uniforms Home"
              >
                <Image
                  src="/logo.jpeg"
                  alt="EVENVIBE UNIFORMS Logo - Custom Uniform Manufacturer"
                  width={220}
                  height={64}
                  className="w-auto h-12 md:h-14 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-[14px] font-medium leading-relaxed mb-8 max-w-sm">
              Professional uniform solutions for schools, corporates, hospitals, hospitality and industries.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/evenvibe__uniforms?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==" className="w-10 h-10 rounded-full border border-gray-800 bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3FAE49] hover:bg-[#3FAE49]/10 transition-all duration-300">
                <InstagramIcon />
              </a>

            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[13px] font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3FAE49]" /> QUICK LINKS
            </h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About', 'Uniforms', 'Clients', 'Instagram'].map(link => (
                <li key={link}>
                  <Link href={`/#${link.toLowerCase()}`} className="text-gray-400 text-[14px] font-medium hover:text-[#3FAE49] transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-[#3FAE49] transition-all duration-300 group-hover:w-3" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Collections */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3FAE49]" /> COLLECTIONS
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                'School Uniforms', 'College Uniforms', 'Corporate Uniforms',
                'Hospital Uniforms', 'Hotel Uniforms', 'Industrial Uniforms',
                'Chef Uniforms', 'Event Uniforms'
              ].map(link => (
                <li key={link}>
                  <Link href="/#uniforms" className="text-gray-400 text-[14px] font-medium hover:text-[#3FAE49] transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-[#3FAE49] transition-all duration-300 group-hover:w-3" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Get In Touch */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3FAE49]" /> GET IN TOUCH
            </h4>
            <div className="flex flex-col gap-6">

              <a href="tel:+919363227147" aria-label="Call +91 93632 27147" className="group flex items-start gap-4 cursor-pointer transition-all">
                <div className="w-10 h-10 rounded-full border border-gray-800 bg-gray-900 flex items-center justify-center flex-shrink-0 text-[#3FAE49] group-hover:bg-[#3FAE49]/10 group-hover:border-[#3FAE49] transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">PHONE</div>
                  <div className="text-[14px] text-white font-medium group-hover:text-[#3FAE49] transition-colors">+91 9344039068</div>
                </div>
              </a>

              <a href="https://wa.me/919344039068" target="_blank" rel="noopener noreferrer" aria-label="Chat with our experts on WhatsApp" className="group flex items-start gap-4 cursor-pointer transition-all">
                <div className="w-10 h-10 rounded-full border border-gray-800 bg-gray-900 flex items-center justify-center flex-shrink-0 text-[#3FAE49] group-hover:bg-[#3FAE49]/10 group-hover:border-[#3FAE49] transition-all">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">WHATSAPP</div>
                  <div className="text-[14px] text-white font-medium group-hover:text-[#3FAE49] transition-colors">Chat with our experts</div>
                </div>
              </a>

              <a href="mailto:dkjapparels@gmail.com" aria-label="Email dkjapparels@gmail.com" className="group flex items-start gap-4 cursor-pointer transition-all">
                <div className="w-10 h-10 rounded-full border border-gray-800 bg-gray-900 flex items-center justify-center flex-shrink-0 text-[#3FAE49] group-hover:bg-[#3FAE49]/10 group-hover:border-[#3FAE49] transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">EMAIL</div>
                  <div className="text-[14px] text-white font-medium group-hover:text-[#3FAE49] transition-colors">dkjapparels@gmail.com</div>
                </div>
              </a>

              <a href="https://www.google.com/maps/search/?api=1&query=Tamil+Nadu+India" target="_blank" rel="noopener noreferrer" aria-label="View location on Google Maps" className="group flex items-start gap-4 cursor-pointer transition-all">
                <div className="w-10 h-10 rounded-full border border-gray-800 bg-gray-900 flex items-center justify-center flex-shrink-0 text-[#3FAE49] group-hover:bg-[#3FAE49]/10 group-hover:border-[#3FAE49] transition-all">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">LOCATION</div>
                  <div className="text-[14px] text-white font-medium group-hover:text-[#3FAE49] transition-colors">DKJ APPARELS, 20th, Azer Nagar, SAP Theatre Backside, Avinashi Road,<br /> Tirupur – 641603 </div>
                </div>
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar & Drakvex Credit */}
        <div className="border-t border-gray-800 pt-8 pb-4 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left text-gray-500 text-[13px] font-medium">
            <span>© 2026 EVENVIBE UNIFORMS. All Rights Reserved.</span>

          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-500 text-[12px] font-medium tracking-wide uppercase">
            <span>Website crafted by  </span>
            <a href="https://drakvex.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              drakvex
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
