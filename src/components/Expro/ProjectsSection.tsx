"use client";

import Image from "next/image";
import { useState } from "react";

import { DecorativeLayer } from "@/components/DecorativeLayer/DecorativeLayer";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { ProjectVisualizer } from "@/components/ProjectVisualizer/ProjectVisualizer";
import { SectionBackground } from "@/components/SectionBackground/SectionBackground";
import { projectItems } from "@/data/projects";

import styles from "./ProjectsSection.module.css";

export function ProjectsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

      <ProjectVisualizer
        projects={projectItems}
        selectedProject={openIndex === null ? null : projectItems[openIndex]}
      />

      <div className={styles.content}>
        <div className={styles.headingGroup}>
          <h2 className={styles.heading} id="projects-heading"><span aria-hidden="true">↓ </span>Projects</h2>
          <div className={styles.headingRule} aria-hidden="true" />
        </div>

        <div className={styles.entries}>
          {projectItems.map((item, index) => (
            <ProjectCard
              expanded={openIndex === index}
              item={item}
              key={item.title}
              onToggle={() => setOpenIndex((currentIndex) => currentIndex === index ? null : index)}
              panelId={`project-details-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
