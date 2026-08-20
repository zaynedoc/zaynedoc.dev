import Image from "next/image";

import experienceBackground from "@/assets/bg/expro-experience-background.png";
import projectBackground from "@/assets/bg/expro-project-background.png";

import styles from "./SectionBackground.module.css";

type SectionBackgroundProps = {
  variant: "experience" | "projects";
};

const backgrounds = {
  experience: experienceBackground,
  projects: projectBackground,
} as const;

export function SectionBackground({ variant }: SectionBackgroundProps) {
  return (
    <div className={`${styles.background} ${styles[variant]}`} aria-hidden="true">
      <Image alt="" className={styles.artwork} height={5840} src={backgrounds[variant]} unoptimized width={7680} />
    </div>
  );
}
