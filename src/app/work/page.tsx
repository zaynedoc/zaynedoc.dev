import type { Metadata } from "next";

import { ExperienceSection } from "@/components/Work/ExperienceSection";
import { ProjectsSection } from "@/components/Work/ProjectsSection";
import { WorkMasthead } from "@/components/Work/WorkMasthead";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";
import { indexableRobots, siteName, sitePreviewImage } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/work" },
  description: "Experience and selected projects by Zayne Dockery, spanning UX/UI, software development, DevOps, and application security.",
  openGraph: {
    description: "Experience and selected projects by Zayne Dockery, spanning UX/UI, software development, DevOps, and application security.",
    images: [{ alt: "Portrait of Zayne Dockery", height: 630, url: sitePreviewImage, width: 1200 }],
    locale: "en_US",
    siteName,
    title: "Work",
    type: "website",
    url: "/work",
  },
  robots: indexableRobots,
  title: "Work",
  twitter: {
    card: "summary_large_image",
    creator: "@zaynedoc",
    description: "Experience and selected projects by Zayne Dockery, spanning UX/UI, software development, DevOps, and application security.",
    images: [sitePreviewImage],
    title: "Work",
  },
};

export default function WorkPage() {
  return (
    <main className={styles.page}>
      <WorkMasthead />
      <ExperienceSection />
      <WorkMasthead decorative />
      <ProjectsSection />
      <SiteFooter />
    </main>
  );
}
