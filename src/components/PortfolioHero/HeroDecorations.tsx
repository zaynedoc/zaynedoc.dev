import { ResponsivePublicImage } from "@/components/ResponsivePublicImage/ResponsivePublicImage";

import styles from "./HeroDecorations.module.css";

type HeroDecorationsProps = {
  isExpro: boolean;
};

export function HeroDecorations({ isExpro }: HeroDecorationsProps) {
  return (
    <div className={`${styles.decorations} ${isExpro ? styles.exproDecorations : ""}`} aria-hidden="true">
      <div className={styles.squares}>
        <ResponsivePublicImage alt="" webpSrc="/main-squares.webp" />
      </div>
      <div className={styles.curves}>
        <ResponsivePublicImage alt="" webpSrc="/main-curves.webp" />
      </div>
    </div>
  );
}
