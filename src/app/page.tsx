import type { Metadata } from "next";

import { PortfolioHero } from "@/components/PortfolioHero/PortfolioHero";
import { indexableRobots, siteName } from "@/data/site";
import { homeHeroConfig } from "@/data/hero";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description: "Zayne Doc's portfolio for UX/UI, DevOps, application security, and software projects.",
  openGraph: {
    description: "Zayne Doc's portfolio for UX/UI, DevOps, application security, and software projects.",
    images: [{ alt: "Zayne Doc portfolio", height: 1080, url: "/og-image.jpg", width: 1920 }],
    locale: "en_US",
    siteName,
    title: "zaynedoc.dev",
    type: "website",
    url: "/",
  },
  robots: indexableRobots,
  title: "zaynedoc.dev",
  twitter: {
    card: "summary_large_image",
    creator: "@zaynedoc",
    description: "Zayne Doc's portfolio for UX/UI, DevOps, application security, and software projects.",
    images: ["/og-image.jpg"],
    title: "zaynedoc.dev",
  },
};

export default function HomePage() {
  return (
    <main>
      <PortfolioHero config={homeHeroConfig} />
    </main>
  );
}
