import type { Metadata } from "next";

import { ExperienceSection } from "@/components/Expro/ExperienceSection";
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
    </main>
  );
}
