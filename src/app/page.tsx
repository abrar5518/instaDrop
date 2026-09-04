import HeroSection from "@/components/Home/HeroSection";
import ClientLogos from "@/components/Home/ClientLogos";
import ServicesSection from "@/components/Home/ServicesSection";
import HowItWorksSection from "@/components/Home/HowItWorksSection";
import LiveDeliveryAnimation from "@/components/Home/LiveDeliveryAnimation";
import TrackingPodSection from "@/components/Home/TrackingPodSection";
import FleetSection from "@/components/Home/FleetSection";
import CtaBanner from "@/components/Home/CtaBanner";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import IndustriesSection from "@/components/Home/IndustriesSection";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <ClientLogos />
      <ServicesSection />
      <IndustriesSection />
      <HowItWorksSection />

      {/* CENTER OF HOMEPAGE VISUAL ANIMATION */}
      <LiveDeliveryAnimation />

      <TrackingPodSection />
      <FleetSection />
      <CtaBanner />
      <TestimonialsSection />
    </div>
  );
}
