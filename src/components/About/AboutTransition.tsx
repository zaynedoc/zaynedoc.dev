import { HeroBackground } from "@/components/PortfolioHero/HeroBackground";
import { ResponsivePublicImage } from "@/components/ResponsivePublicImage/ResponsivePublicImage";

import styles from "./AboutTransition.module.css";

export function AboutTransition() {
  return (
    <section aria-hidden="true" className={styles.transition} data-cursor-tone="dark" data-theme-color="#cba5e5">
      <HeroBackground />
      <div className={styles.squares}>
        <ResponsivePublicImage alt="" webpSrc="/about-squares-2.png" />
      </div>
    </section>
  );
}
