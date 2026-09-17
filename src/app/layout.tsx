import type { Metadata } from "next";
import localFont from "next/font/local";

import { BrowserThemeColor } from "@/components/BrowserThemeColor/BrowserThemeColor";
import { InvertedCursor } from "@/components/InvertedCursor/InvertedCursor";
import { LenisScroll } from "@/components/LenisScroll/LenisScroll";
import { PageReveal } from "@/components/PageReveal/PageReveal";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { noIndexRobots, siteDescription, siteName, sitePreviewImage, siteTitle, siteUrl } from "@/data/site";
import "./globals.css";

const zalandoSemiExpanded = localFont({
  src: "../../font/ZalandoSans-SemiExpanded.ttf",
  variable: "--font-zalando-semi-expanded",
});

const zalandoExpanded = localFont({
  src: [
    {
      path: "../../font/ZalandoSans-Expanded.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../font/ZalandoSans-ExpandedItalic.ttf",
      style: "italic",
      weight: "400",
    },
  ],
  variable: "--font-zalando-expanded",
});

const zalandoExpandedExtraBold = localFont({
  src: "../../font/ZalandoSansExpanded-ExtraBold.ttf",
  variable: "--font-zalando-expanded-extra-bold",
  weight: "800",
});

export const metadata: Metadata = {
  applicationName: siteName,
  authors: [{ name: "Zayne Dockery", url: siteUrl }],
  creator: "Zayne Dockery",
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    images: [{ alt: "Portrait of Zayne Dockery", height: 630, url: sitePreviewImage, width: 1200 }],
    locale: "en_US",
    siteName,
    type: "website",
  },
  publisher: "Zayne Dockery",
  robots: noIndexRobots,
  twitter: {
    card: "summary_large_image",
    creator: "@zaynedoc",
    images: [sitePreviewImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${zalandoSemiExpanded.variable} ${zalandoExpanded.variable} ${zalandoExpandedExtraBold.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@id": `${siteUrl}/#website`,
                  "@type": "WebSite",
                  name: siteTitle,
                  url: siteUrl,
                },
                {
                  "@id": `${siteUrl}/#zayne-dockery`,
                  "@type": "Person",
                  email: "mailto:zayne@zaynedoc.dev",
                  image: `${siteUrl}${sitePreviewImage}`,
                  jobTitle: "Software Developer and UX/UI Designer",
                  name: "Zayne Dockery",
                  sameAs: [
                    "https://github.com/zaynedoc",
                    "https://www.linkedin.com/in/zaynedoc/",
                    "https://www.figma.com/@zaynedoc",
                  ],
                  url: siteUrl,
                },
              ],
            }),
          }}
          type="application/ld+json"
        />
        <PageReveal />
        <SiteHeader />
        {children}
        <BrowserThemeColor />
        <InvertedCursor />
        <LenisScroll />
      </body>
    </html>
  );
}
