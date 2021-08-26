import { WebHeader } from "@/components/molecules/WebHeader";
import { WebFooter } from "@/components/molecules/WebFooter";
import { LpDemoSection } from "@/components/molecules/LpDemoSection";
import { LpCollaborationsSection } from "@/components/molecules/LpCollaborationsSection";
import { LpHeroSection } from "@/components/molecules/LpHeroSection";
import { LpPriceSection } from "@/components/molecules/LpPriceSection";

export function HomePage() {
  return (
    <div>
      <WebHeader />
      <LpHeroSection />
      <LpDemoSection />
      <LpCollaborationsSection />
      <LpPriceSection />
      <WebFooter />
    </div>
  );
}
