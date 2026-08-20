"use client";

import Image from "next/image";
import { useState } from "react";

import { DecorativeLayer } from "@/components/DecorativeLayer/DecorativeLayer";
import { ExperienceCard } from "@/components/ExperienceCard/ExperienceCard";
import { SectionBackground } from "@/components/SectionBackground/SectionBackground";
import { experienceItems } from "@/data/experience";

import styles from "./ExperienceSection.module.css";

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section} aria-labelledby="experience-heading" data-theme-color="#fcf9ff">
      <SectionBackground variant="experience" />

      <DecorativeLayer className={styles.stripes}>
        <Image alt="" fill priority sizes="1003px" src="/expro-experience-stripes.png" />
      </DecorativeLayer>

      <DecorativeLayer className={styles.curves}>
        <Image alt="" fill priority sizes="384px" src="/expro-experience-curves.png" />
      </DecorativeLayer>

      <div className={styles.content}>
        <div className={styles.headingGroup}>
          <h2 className={styles.heading} id="experience-heading">Experience <span aria-hidden="true">↓</span></h2>
          <div className={styles.headingRule} aria-hidden="true" />
        </div>

        <div className={styles.entries}>
          {experienceItems.map((item, index) => (
            <ExperienceCard
              expanded={openIndex === index}
              item={item}
              key={item.organization}
              onToggle={() => setOpenIndex((currentIndex) => currentIndex === index ? null : index)}
              panelId={`experience-details-${index}`}
            />
          ))}
        </div>
      </div>

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
