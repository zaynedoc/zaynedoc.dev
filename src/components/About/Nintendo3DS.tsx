import { PageTransitionLink } from "@/components/PageReveal/PageTransitionLink";
import { ResponsivePublicImage } from "@/components/ResponsivePublicImage/ResponsivePublicImage";

import styles from "./Nintendo3DS.module.css";

export function Nintendo3DS() {
  return (
    <PageTransitionLink aria-label="Open Zayne's 3DS dashboard" className={styles.trigger} href="/dashboard">
      <span aria-hidden="true" className={styles.star}>
        <ResponsivePublicImage alt="" webpSrc="/star-ds.png" />
      </span>
      <span aria-hidden="true" className={`${styles.console} ${styles.closed}`}>
        <ResponsivePublicImage alt="" webpSrc="/ds-closed.png" />
      </span>
      <span aria-hidden="true" className={`${styles.console} ${styles.open}`}>
        <ResponsivePublicImage alt="" webpSrc="/ds-open.png" />
      </span>
    </PageTransitionLink>
  );
}
