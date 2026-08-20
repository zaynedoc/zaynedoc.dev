import Image from "next/image";

import { DecorativeLayer } from "@/components/DecorativeLayer/DecorativeLayer";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { SectionBackground } from "@/components/SectionBackground/SectionBackground";
import { projectItems } from "@/data/projects";

import styles from "./ProjectsSection.module.css";

export function ProjectsSection() {
  return (
    <section className={styles.section} aria-labelledby="projects-heading" data-theme-color="#fcf9ff">
      <SectionBackground variant="projects" />

      <DecorativeLayer className={styles.stripes}>
        <Image alt="" fill sizes="1200px" src="/expro-project-stripes.png" />
      </DecorativeLayer>

      <DecorativeLayer className={styles.curves}>
        <Image alt="" fill sizes="384px" src="/expro-project-curves.png" />
      </DecorativeLayer>

      <DecorativeLayer className={styles.squares}>
        <Image alt="" fill sizes="384px" src="/expro-project-squares.png" />
      </DecorativeLayer>

      <div className={styles.content}>
        <div className={styles.headingGroup}>
          <h2 className={styles.heading} id="projects-heading"><span aria-hidden="true">↓ </span>Projects</h2>
          <div className={styles.headingRule} aria-hidden="true" />
        </div>

        <div className={styles.entries}>
          {projectItems.map((item) => <ProjectCard item={item} key={item.title} />)}
        </div>
      </div>
    </section>
  );
}
