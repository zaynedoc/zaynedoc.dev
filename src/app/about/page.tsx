import type { Metadata } from "next";

import { AboutMasthead } from "@/components/About/AboutMasthead";
import { AboutTransition } from "@/components/About/AboutTransition";
import { GenesisSection } from "@/components/About/GenesisSection";
import { MusicShelf } from "@/components/About/MusicShelf";
import { WhoAmISection } from "@/components/About/WhoAmISection";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";

export const metadata: Metadata = {
  title: "About",
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
