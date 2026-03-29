import ornamentPattern from "@/assets/ornament-pattern.jpg";
import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import JourneySection from "@/components/JourneySection";
import ImpactSection from "@/components/ImpactSection";
import TargetSection from "@/components/TargetSection";
import CollabSection from "@/components/CollabSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* 1. Hero */}
      <HeroSection />

      {/* Ornament divider */}
      <div className="h-16 overflow-hidden opacity-30">
        <img src={ornamentPattern} alt="" loading="lazy" width={1920} height={512} className="w-full h-full object-cover" />
      </div>

      {/* 2. Tantangan */}
      <ChallengeSection />

      {/* 3. Solusi */}
      <SolutionSection />

      {/* Ornament divider */}
      <div className="h-12 overflow-hidden opacity-20">
        <img src={ornamentPattern} alt="" loading="lazy" width={1920} height={512} className="w-full h-full object-cover" />
      </div>

      {/* 4. Fitur Utama */}
      <FeaturesSection />

      {/* 5. Alur Petualangan */}
      <JourneySection />

      {/* Ornament divider */}
      <div className="h-12 overflow-hidden opacity-20">
        <img src={ornamentPattern} alt="" loading="lazy" width={1920} height={512} className="w-full h-full object-cover" />
      </div>

      {/* 6. Dampak */}
      <ImpactSection />

      {/* 7. Target User */}
      <TargetSection />

      {/* 8. Kolaborasi */}
      <CollabSection />

      {/* Ornament divider */}
      <div className="h-12 overflow-hidden opacity-20">
        <img src={ornamentPattern} alt="" loading="lazy" width={1920} height={512} className="w-full h-full object-cover" />
      </div>

      {/* 9. CTA Akhir */}
      <CTASection />

      {/* 10. Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;
