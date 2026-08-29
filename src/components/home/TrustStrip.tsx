"use client";

import { m } from 'framer-motion';

export default function TrustStrip() {
  return (
    <div className="w-full bg-brand-light py-4 border-y border-gray-100">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 text-center">
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base font-medium text-gray-500 tracking-wide"
        >
          Trusted for{" "}
          <span className="text-brand-charcoal font-semibold">Schools</span> •{" "}
          <span className="text-brand-charcoal font-semibold">Sports Teams</span> •{" "}
          <span className="text-brand-charcoal font-semibold">Corporates</span> •{" "}
          <span className="text-brand-charcoal font-semibold">Institutions</span>
        </m.p>
      </div>
    </div>
  );
}
