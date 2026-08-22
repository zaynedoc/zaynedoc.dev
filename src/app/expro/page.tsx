import type { Metadata } from "next";

import { ExproMasthead } from "@/components/Expro/ExproMasthead";
import { ExperienceSection } from "@/components/Expro/ExperienceSection";
import { ProjectsSection } from "@/components/Expro/ProjectsSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Expro",
};

export default function ExproPage() {
  return (
    <main className={styles.page}>
      <ExproMasthead />
      <ExperienceSection />
      <ExproMasthead decorative />
      <ProjectsSection />
    </main>
  );
}
