import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { ProcessSection } from "@/components/ProcessSection";
import { LocationSection } from "@/components/LocationSection";
import { CTASection } from "@/components/CTASection";
import { MobileCallBar } from "@/components/MobileCallBar";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <LocationSection />
      <CTASection />
      <MobileCallBar />
    </>
  );
}
