import Image from "next/image";

import styles from "./HeroDecorations.module.css";

export function HeroDecorations() {
  return (
    <div className={styles.decorations} aria-hidden="true">
      <div className={styles.squares}>
        <Image alt="" fill priority sizes="(max-width: 1920px) 30vw, 575px" src="/main-squares.png" />
      </div>
      <div className={styles.curves}>
        <Image alt="" fill priority sizes="(max-width: 1920px) 15vw, 288px" src="/main-curves.png" />
      </div>
    </div>
  );
}
