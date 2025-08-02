import Navbar from "@/components/Navbar";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";
export default function Home() {
  return (
    <div>
      <header >
       <Navbar/> 
      </header>
      <HeroSection/>
      <FeatureSection/>
      <PricingSection/>
      
    </div>
  );
}
