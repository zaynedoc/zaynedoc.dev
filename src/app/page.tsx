import { PortfolioHero } from "@/components/PortfolioHero/PortfolioHero";
import { homeHeroConfig } from "@/data/hero";

export default function HomePage() {
  return (
    <main>
      <PortfolioHero config={homeHeroConfig} />
    </main>
  );
}
