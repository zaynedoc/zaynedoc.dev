import { HeroBackground } from "@/components/PortfolioHero/HeroBackground";

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main>
      <section className={styles.hero} aria-label="Home hero">
        <HeroBackground />
      </section>
    </main>
  );
}
