import type { Metadata } from "next";

import { AboutMasthead } from "@/components/About/AboutMasthead";
import { AboutTransition } from "@/components/About/AboutTransition";
import { GenesisSection } from "@/components/About/GenesisSection";
import { MusicShelf } from "@/components/About/MusicShelf";
import { WhoAmISection } from "@/components/About/WhoAmISection";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";
import { indexableRobots, siteName } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  description: "Learn more about Zayne Doc: a UX/UI-focused developer interested in DevOps, application security, cars, design, and music.",
  openGraph: {
    description: "Learn more about Zayne Doc: a UX/UI-focused developer interested in DevOps, application security, cars, design, and music.",
    images: [{ alt: "Zayne Doc portfolio", height: 1080, url: "/og-image.jpg", width: 1920 }],
    locale: "en_US",
    siteName,
    title: "About Zayne Doc",
    type: "website",
    url: "/about",
  },
  robots: indexableRobots,
  title: "About Zayne Doc",
  twitter: {
    card: "summary_large_image",
    creator: "@zaynedoc",
    description: "Learn more about Zayne Doc: a UX/UI-focused developer interested in DevOps, application security, cars, design, and music.",
    images: ["/og-image.jpg"],
    title: "About Zayne Doc",
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
