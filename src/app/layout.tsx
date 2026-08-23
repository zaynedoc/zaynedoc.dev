import type { Metadata } from "next";
import localFont from "next/font/local";

import { BrowserThemeColor } from "@/components/BrowserThemeColor/BrowserThemeColor";
import { InvertedCursor } from "@/components/InvertedCursor/InvertedCursor";
import { LenisScroll } from "@/components/LenisScroll/LenisScroll";
import { PageReveal } from "@/components/PageReveal/PageReveal";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { noIndexRobots, siteName, siteUrl } from "@/data/site";
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
  authors: [{ name: "Zayne Doc", url: siteUrl }],
  creator: "Zayne Doc",
  title: {
    default: "zaynedoc.dev",
    template: "%s | zaynedoc.dev",
  },
  description: "Portfolio of Zayne Doc — UX/UI, DevOps, application security, and software projects.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    images: [{ alt: "Zayne Doc portfolio", height: 1080, url: "/og-image.jpg", width: 1920 }],
    locale: "en_US",
    siteName,
    type: "website",
  },
  publisher: "Zayne Doc",
  robots: noIndexRobots,
  twitter: {
    card: "summary_large_image",
    creator: "@zaynedoc",
    images: ["/og-image.jpg"],
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
                  name: siteName,
                  url: siteUrl,
                },
                {
                  "@id": `${siteUrl}/#zayne-doc`,
                  "@type": "Person",
                  email: "mailto:zayne@zaynedoc.dev",
                  jobTitle: "Software Developer and UX/UI Designer",
                  name: "Zayne Doc",
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
