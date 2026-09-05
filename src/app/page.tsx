import HeroSection from "@/components/Home/HeroSection";
import ServicesSection from "@/components/Home/ServicesSection";
import HowItWorksSection from "@/components/Home/HowItWorksSection";
import LiveDeliveryAnimation from "@/components/Home/LiveDeliveryAnimation";
import TrackingPodSection from "@/components/Home/TrackingPodSection";
import FleetSection from "@/components/Home/FleetSection";
import CtaBanner from "@/components/Home/CtaBanner";
import IndustriesSection from "@/components/Home/IndustriesSection";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <HowItWorksSection />

      {/* CENTER OF HOMEPAGE VISUAL ANIMATION */}
      <LiveDeliveryAnimation />

      <TrackingPodSection />
      <FleetSection />
      <CtaBanner />
    </div>
  );
}
