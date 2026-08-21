import type { Metadata } from "next";
import localFont from "next/font/local";

import { BrowserThemeColor } from "@/components/BrowserThemeColor/BrowserThemeColor";
import { InvertedCursor } from "@/components/InvertedCursor/InvertedCursor";
import { LenisScroll } from "@/components/LenisScroll/LenisScroll";
import { PageReveal } from "@/components/PageReveal/PageReveal";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
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

export const metadata: Metadata = {
  title: {
    default: "zaynedoc.dev",
    template: "%s | zaynedoc.dev",
  },
  description: "Portfolio of Zayne Doc",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${zalandoSemiExpanded.variable} ${zalandoExpanded.variable}`}>
      <body>
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
