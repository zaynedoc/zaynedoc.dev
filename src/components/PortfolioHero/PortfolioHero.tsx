import type { HeroConfig } from "@/data/hero";

import { HeroBackground } from "./HeroBackground";
import { HeroDecorations } from "./HeroDecorations";
import { HeroTitle } from "./HeroTitle";
import { SocialLinks } from "./SocialLinks";
import styles from "./PortfolioHero.module.css";

type PortfolioHeroProps = {
  config: HeroConfig;
};

export function PortfolioHero({ config }: PortfolioHeroProps) {
  return (
    <section className={styles.hero} aria-label="Portfolio hero">
      <HeroBackground />
      <HeroDecorations />
      <div className={styles.content}>
        <HeroTitle name={config.name} />
        <SocialLinks links={config.socialLinks} />
      </div>
    </section>
  );
}
