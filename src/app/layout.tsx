import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.evenvibeuniforms.com'),
  title: {
    default: "EVENVIBE UNIFORMS | Custom Uniform Manufacturer in Tamil Nadu",
    template: "%s | EVENVIBE UNIFORMS"
  },
  description: "EVENVIBE UNIFORMS is a leading custom uniform manufacturer in Tamil Nadu, specializing in school, corporate, industrial, and sports uniforms, offering bulk orders with premium quality.",
  keywords: ["uniform manufacturers in Tamil Nadu", "school uniform manufacturers", "custom uniform manufacturers", "corporate uniform suppliers", "bulk uniform manufacturers", "custom school uniforms", "uniform suppliers Tamil Nadu", "Tiruppur uniforms", "hospital uniforms", "industrial uniforms"],
  authors: [{ name: "EVENVIBE UNIFORMS" }],
  creator: "EVENVIBE UNIFORMS",
  publisher: "EVENVIBE UNIFORMS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EVENVIBE UNIFORMS | Custom Uniform Manufacturer in Tamil Nadu',
    description: 'EVENVIBE UNIFORMS is a leading custom uniform manufacturer in Tamil Nadu, specializing in school, corporate, industrial, and sports uniforms, offering bulk orders with premium quality.',
    url: 'https://www.evenvibeuniforms.com',
    siteName: 'EVENVIBE UNIFORMS',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EVENVIBE UNIFORMS | Custom Uniform Manufacturer in Tamil Nadu',
    description: 'Leading custom uniform manufacturer in Tamil Nadu for schools, corporates, and industries. Premium fabrics and bulk production.',
    creator: '@evenvibe',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "EVENVIBE UNIFORMS",
  "image": "https://www.evenvibeuniforms.com/logo.jpeg",
  "url": "https://www.evenvibeuniforms.com",
  "telephone": "+919363227147",
  "email": "hello@evenvibe.com",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "areaServed": ["Tamil Nadu", "Kerala", "India"],
  "priceRange": "$$"
};

import MotionProvider from "@/providers/MotionProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-[72px]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
