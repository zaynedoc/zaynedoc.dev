import { DetailPanel } from "@/components/DetailPanel/DetailPanel";
import type { ExperienceItem } from "@/data/experience";

import styles from "./ExperienceCard.module.css";

type ExperienceCardProps = {
  expanded: boolean;
  item: ExperienceItem;
  onToggle: () => void;
  panelId: string;
};

export function ExperienceCard({ expanded, item, onToggle, panelId }: ExperienceCardProps) {
  return (
    <article className={`${styles.card} ${expanded ? styles.expanded : ""}`}>
      <button aria-controls={panelId} aria-expanded={expanded} className={styles.trigger} onClick={onToggle} type="button">
        <h3 className={styles.role}>{item.role} <span aria-hidden="true">↙</span></h3>
      </button>
      <a className={styles.organization} href={item.organizationUrl} rel="noreferrer" target="_blank">
        {item.organization} <span aria-hidden="true">↗</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      <DetailPanel details={item} expanded={expanded} id={panelId} />
    </article>
  );
}
