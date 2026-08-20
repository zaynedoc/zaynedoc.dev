import type { HeroConfig } from "@/data/hero";

import { HeroBackground } from "./HeroBackground";
import { HeroDecorations } from "./HeroDecorations";
import { HeroRoles } from "./HeroRoles";
import { HeroTitle } from "./HeroTitle";
import { SocialLinks } from "./SocialLinks";
import styles from "./PortfolioHero.module.css";

type PortfolioHeroProps = {
  config: HeroConfig;
};

export function PortfolioHero({ config }: PortfolioHeroProps) {
  const isExpro = config.contentLayout === "expro";

  return (
    <section className={styles.hero} aria-label="Portfolio hero">
      <HeroBackground />
      <HeroDecorations />
      <div className={`${styles.content} ${isExpro ? styles.exproContent : styles.homeContent}`}>
        <HeroTitle contentLayout={config.contentLayout} name={config.name} />
        {isExpro && config.roles ? (
          <div className={styles.exproDetails}>
            <HeroRoles text={config.roles.text} texture={config.roles.texture} />
            <SocialLinks layout="row" links={config.socialLinks} />
          </div>
        ) : (
          <SocialLinks links={config.socialLinks} />
        )}
      </div>
    </section>
  );
}
