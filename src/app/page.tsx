import type { Metadata } from "next";

import { PortfolioHero } from "@/components/PortfolioHero/PortfolioHero";
import { indexableRobots, siteDescription, siteName, sitePreviewImage, siteTitle, siteUrl } from "@/data/site";
import { homeHeroConfig } from "@/data/hero";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description: siteDescription,
  openGraph: {
    description: siteDescription,
    images: [{ alt: "Portrait of Zayne Dockery", height: 630, url: sitePreviewImage, width: 1200 }],
    locale: "en_US",
    siteName,
    title: siteTitle,
    type: "website",
    url: "/",
  },
  robots: indexableRobots,
  twitter: {
    card: "summary_large_image",
    creator: "@zaynedoc",
    description: siteDescription,
    images: [sitePreviewImage],
    title: siteTitle,
  },
};

export default function HomePage() {
  return (
    <main>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            mainEntity: { "@id": `${siteUrl}/#zayne-dockery` },
            primaryImageOfPage: `${siteUrl}${sitePreviewImage}`,
            url: siteUrl,
          }),
        }}
        type="application/ld+json"
      />
      <PortfolioHero config={homeHeroConfig} />
    </main>
  );
}
