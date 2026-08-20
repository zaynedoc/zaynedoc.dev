import type { ExperienceItem } from "@/data/experience";

import styles from "./ExperienceCard.module.css";

type ExperienceCardProps = {
  item: ExperienceItem;
};

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <article className={styles.card}>
      <h3 className={styles.role}>{item.role} <span aria-hidden="true">↙</span></h3>
      <a className={styles.organization} href={item.organizationUrl} rel="noreferrer" target="_blank">
        {item.organization} <span aria-hidden="true">↗</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </article>
  );
}
