import { HomePostsBand } from "@/components/HomePostsBand";
import { HomeTicker } from "@/components/HomeTicker";
import { AboutSection } from "@/components/AboutSection";
import { StatsSection } from "@/components/StatsSection";
import { CostCalculator } from "@/components/CostCalculator";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactCTASection } from "@/components/ContactCTASection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { defaultHomePostsBands } from "@/lib/home-content";

export function HomeBelowHero() {
  return (
    <>
      <HomeTicker />
      <AboutSection />
      {defaultHomePostsBands.map((band) => (
        <HomePostsBand key={band.id} config={band} />
      ))}
      <ProjectsSection variant="qh" />
      <StatsSection variant="qh" />
      <CostCalculator titleVariant="qh" />
      <TestimonialsSection variant="qh" />
      <ContactCTASection />
    </>
  );
}
