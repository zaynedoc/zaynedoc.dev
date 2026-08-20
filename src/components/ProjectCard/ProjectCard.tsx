import { DetailPanel } from "@/components/DetailPanel/DetailPanel";
import type { ProjectItem } from "@/data/projects";

import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  expanded: boolean;
  item: ProjectItem;
  onToggle: () => void;
  panelId: string;
};

export function ProjectCard({ expanded, item, onToggle, panelId }: ProjectCardProps) {
  return (
    <article className={`${styles.card} ${expanded ? styles.expanded : ""}`}>
      <button aria-controls={panelId} aria-expanded={expanded} className={styles.trigger} onClick={onToggle} type="button">
        <h3 className={styles.title}>{item.title} <span aria-hidden="true">↙</span></h3>
      </button>
      <a className={styles.descriptor} href={item.href} rel="noreferrer" target="_blank">
        {item.descriptor} <span aria-hidden="true">↗</span>
        <span className={styles.visuallyHidden}> (opens in a new tab)</span>
      </a>
      <DetailPanel details={item} expanded={expanded} id={panelId} />
    </article>
  );
}
