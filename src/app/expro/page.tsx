import type { Metadata } from "next";

import { ExperienceSection } from "@/components/Expro/ExperienceSection";
import { ProjectsSection } from "@/components/Expro/ProjectsSection";
import { PortfolioHero } from "@/components/PortfolioHero/PortfolioHero";
import { exproHeroConfig } from "@/data/hero";

export const metadata: Metadata = {
  title: "Expro",
};

export default function ExproPage() {
  return (
    <main>
      <PortfolioHero config={exproHeroConfig} />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
