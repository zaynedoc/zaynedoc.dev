import Image from "next/image";

import experienceBackground from "@/assets/bg/expro-experience-background.png";

import styles from "./SectionBackground.module.css";

type SectionBackgroundProps = {
  variant: "experience";
};

export function SectionBackground({ variant }: SectionBackgroundProps) {
  return (
    <div className={`${styles.background} ${styles[variant]}`} aria-hidden="true">
      <Image alt="" className={styles.artwork} height={5840} src={experienceBackground} unoptimized width={7680} />
    </div>
  );
}
