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
    <section className={styles.hero} aria-label="Portfolio hero" data-cursor-tone="dark" data-theme-color="#cba5e5">
      <HeroBackground />
      <HeroDecorations isExpro={isExpro} />
      <div className={`${styles.content} ${isExpro ? styles.exproContent : styles.homeContent}`}>
        <HeroTitle contentLayout={config.contentLayout} name={config.name} />
        {isExpro && config.roles ? (
          <div className={styles.exproDetails}>
            <div className={styles.exproRoles}>
              <HeroRoles text={config.roles.text} texture={config.roles.texture} />
            </div>
            {/* Retains the former social row's footprint, without exposing links on Expro. */}
            <div aria-hidden="true" className={styles.exproSocialSpacer} />
          </div>
        ) : (
          <SocialLinks links={config.socialLinks} />
        )}
      </div>
      {isExpro ? <span aria-hidden="true" className={styles.scrollCue}>↓</span> : null}
    </section>
  );
}
