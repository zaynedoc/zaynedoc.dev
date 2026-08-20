import Image from "next/image";

import { DecorativeLayer } from "@/components/DecorativeLayer/DecorativeLayer";
import { SectionBackground } from "@/components/SectionBackground/SectionBackground";

import styles from "./ExperienceSection.module.css";

export function ExperienceSection() {
  return (
    <section className={styles.section} aria-label="Experience">
      <SectionBackground variant="experience" />

      <DecorativeLayer className={styles.stripes}>
        <Image alt="" fill priority sizes="1003px" src="/expro-experience-stripes.png" />
      </DecorativeLayer>

      <DecorativeLayer className={styles.curves}>
        <Image alt="" fill priority sizes="384px" src="/expro-experience-curves.png" />
      </DecorativeLayer>

      <DecorativeLayer className={styles.stickers}>
        <div className={styles.figmaSticker}>
          <Image alt="" fill priority sizes="346px" src="/figma-sticker.png" />
        </div>
        <div className={styles.kdiSticker}>
          <Image alt="" fill priority sizes="414px" src="/kdi-sticker.png" />
        </div>
        <div className={styles.khSticker}>
          <Image alt="" fill priority sizes="809px" src="/kh-sticker.png" />
        </div>
        <div className={styles.mgSticker}>
          <Image alt="" fill priority sizes="293px" src="/mg-sticker.png" />
        </div>
      </DecorativeLayer>
    </section>
  );
}
