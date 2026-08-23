import type { Metadata } from "next";

import { ExproMasthead } from "@/components/Expro/ExproMasthead";
import { ExperienceSection } from "@/components/Expro/ExperienceSection";
import { ProjectsSection } from "@/components/Expro/ProjectsSection";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";
import { indexableRobots, siteName } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/expro" },
  description: "Experience and selected projects by Zayne Doc, spanning UX/UI, software development, DevOps, and application security.",
  openGraph: {
    description: "Experience and selected projects by Zayne Doc, spanning UX/UI, software development, DevOps, and application security.",
    images: [{ alt: "Zayne Doc portfolio", height: 1080, url: "/og-image.jpg", width: 1920 }],
    locale: "en_US",
    siteName,
    title: "Expro",
    type: "website",
    url: "/expro",
  },
  robots: indexableRobots,
  title: "Expro",
  twitter: {
    card: "summary_large_image",
    creator: "@zaynedoc",
    description: "Experience and selected projects by Zayne Doc, spanning UX/UI, software development, DevOps, and application security.",
    images: ["/og-image.jpg"],
    title: "Expro",
  },
};

export default function ExproPage() {
  return (
    <main className={styles.page}>
      <ExproMasthead />
      <ExperienceSection />
      <ExproMasthead decorative />
      <ProjectsSection />
      <SiteFooter />
    </main>
  );
}
