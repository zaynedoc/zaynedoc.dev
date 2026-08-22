import { ResponsivePublicImage } from "@/components/ResponsivePublicImage/ResponsivePublicImage";
import { HeroBackground } from "@/components/PortfolioHero/HeroBackground";

import styles from "./ExproMasthead.module.css";

type ExproMastheadProps = {
  decorative?: boolean;
};

export function ExproMasthead({ decorative = false }: ExproMastheadProps) {
  return (
    <section
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : "Expro"}
      className={`${styles.masthead} ${decorative ? styles.decorative : ""}`}
      data-cursor-tone="dark"
      data-theme-color="#cba5e5"
    >
      <HeroBackground
        animated={!decorative}
        interactiveDots={!decorative}
        pauseWhenOffscreen={!decorative}
      />
      <div className={styles.artwork}>
        <div className={styles.curves}>
          <ResponsivePublicImage alt="" decoding={decorative ? "async" : undefined} loading={decorative ? "lazy" : undefined} webpSrc="/main-curves.webp" />
        </div>
        {decorative ? (
          <div className={styles.squares}>
            <ResponsivePublicImage alt="" decoding="async" loading="lazy" webpSrc="/main-squares.webp" />
          </div>
        ) : null}
      </div>
      {!decorative ? <h1 className={styles.title}>EXPRO</h1> : null}
    </section>
  );
}
