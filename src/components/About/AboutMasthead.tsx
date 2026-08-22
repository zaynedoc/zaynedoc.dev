import { HeroBackground } from "@/components/PortfolioHero/HeroBackground";
import { ResponsivePublicImage } from "@/components/ResponsivePublicImage/ResponsivePublicImage";

import styles from "./AboutMasthead.module.css";

export function AboutMasthead() {
  return (
    <section className={styles.masthead} aria-label="About" data-cursor-tone="dark" data-theme-color="#cba5e5">
      <HeroBackground />
      <div aria-hidden="true" className={styles.squares}>
        <ResponsivePublicImage alt="" webpSrc="/about-squares-1.png" />
      </div>
      <h1 className={styles.title}>ABOUT</h1>
    </section>
  );
}
