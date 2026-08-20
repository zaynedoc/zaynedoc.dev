import type { ProjectItem } from "@/data/projects";

import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  item: ProjectItem;
};

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{item.title} <span aria-hidden="true">↙</span></h3>
      <a className={styles.descriptor} href={item.href} rel="noreferrer" target="_blank">
        {item.descriptor} <span aria-hidden="true">↗</span>
        <span className={styles.visuallyHidden}> (opens in a new tab)</span>
      </a>
    </article>
  );
}
