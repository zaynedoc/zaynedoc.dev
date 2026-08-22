"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import desktopBackdrop from "@/assets/navigation/navigation-desktop.png";
import phoneBackdrop from "@/assets/navigation/navigation-phone.png";
import tabletBackdrop from "@/assets/navigation/navigation-tablet.png";
import { PageTransitionLink } from "@/components/PageReveal/PageTransitionLink";

import styles from "./SiteHeader.module.css";

const navigationLinks = [
  { href: "/", label: "/root", disabled: false },
  { href: "/expro", label: "/expro", disabled: false },
  { href: "/about", label: "/about", disabled: false },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header} data-theme-color="#ffffff">
      <div className={styles.backdrops} aria-hidden="true">
        <Image
          alt=""
          className={`${styles.backdrop} ${styles.desktopBackdrop}`}
          fill
          priority
          sizes="100vw"
          src={desktopBackdrop}
        />
        <Image
          alt=""
          className={`${styles.backdrop} ${styles.tabletBackdrop}`}
          fill
          priority
          sizes="100vw"
          src={tabletBackdrop}
        />
        <Image
          alt=""
          className={`${styles.backdrop} ${styles.phoneBackdrop}`}
          fill
          priority
          sizes="100vw"
          src={phoneBackdrop}
        />
      </div>

      <div className={styles.content}>
        <PageTransitionLink className={styles.wordmark} href="/" aria-label="zaynedoc.dev home">
          <span>zaynedoc</span>
          <small>.dev</small>
        </PageTransitionLink>

        <nav aria-label="Primary navigation">
          <ul className={styles.menu}>
            {navigationLinks.map((link) => (
              <li key={link.href}>
                {link.disabled ? (
                  <span aria-disabled="true" className={styles.disabledLink}>{link.label}</span>
                ) : (
                  <PageTransitionLink
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={pathname === link.href ? styles.activeLink : undefined}
                    href={link.href}
                  >
                    {link.label}
                  </PageTransitionLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
