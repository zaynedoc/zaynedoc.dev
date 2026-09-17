import type { Metadata } from "next";

import { AboutMasthead } from "@/components/About/AboutMasthead";
import { AboutTransition } from "@/components/About/AboutTransition";
import { GenesisSection } from "@/components/About/GenesisSection";
import { MusicShelf } from "@/components/About/MusicShelf";
import { WhoAmISection } from "@/components/About/WhoAmISection";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";
import { indexableRobots, siteName, sitePreviewImage } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  description: "Learn more about Zayne Dockery: a UX/UI-focused developer interested in DevOps, application security, cars, design, and music.",
  openGraph: {
    description: "Learn more about Zayne Dockery: a UX/UI-focused developer interested in DevOps, application security, cars, design, and music.",
    images: [{ alt: "Portrait of Zayne Dockery", height: 630, url: sitePreviewImage, width: 1200 }],
    locale: "en_US",
    siteName,
    title: "About",
    type: "website",
    url: "/about",
  },
  robots: indexableRobots,
  title: "About",
  twitter: {
    card: "summary_large_image",
    creator: "@zaynedoc",
    description: "Learn more about Zayne Dockery: a UX/UI-focused developer interested in DevOps, application security, cars, design, and music.",
    images: [sitePreviewImage],
    title: "About",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutMasthead />
      <WhoAmISection />
      <AboutTransition />
      <GenesisSection />
      <MusicShelf />
      <SiteFooter />
    </main>
  );
}
