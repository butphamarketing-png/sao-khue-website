import { HomePostsBand } from "@/components/HomePostsBand";
import { HomeTicker } from "@/components/HomeTicker";
import { StatsSection } from "@/components/StatsSection";
import { CostCalculator } from "@/components/CostCalculator";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactCTASection } from "@/components/ContactCTASection";
import { defaultHomePostsBands } from "@/lib/home-content";

export function HomeBelowHero() {
  return (
    <>
      <HomeTicker />
      {defaultHomePostsBands.map((band) => (
        <HomePostsBand key={band.id} config={band} />
      ))}
      <StatsSection variant="qh" />
      <CostCalculator titleVariant="qh" />
      <TestimonialsSection variant="qh" />
      <ContactCTASection />
    </>
  );
}
