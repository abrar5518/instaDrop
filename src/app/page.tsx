import HeroSection from "@/components/Home/HeroSection";
import HomeExperience from "@/components/Home/HomeExperience";
import type { Metadata } from "next";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <HomeExperience />
    </div>
  );
}
