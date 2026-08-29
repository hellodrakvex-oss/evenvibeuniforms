import Hero from "@/components/home/Hero";
import WhyEvenvibe from "@/components/home/WhyEvenvibe";
import Stats from "@/components/home/Stats";
import Features from "@/components/home/Features";
import Collections from "@/components/home/Collections";
import Clients from "@/components/home/Clients";
import InstagramReels from "@/components/home/InstagramReels";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyEvenvibe />
      <Stats />
      <Features />
      <Collections />
      <Clients />
      <InstagramReels />

      <FinalCTA />
    </>
  );
}
