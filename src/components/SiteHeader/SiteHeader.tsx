import Image from "next/image";
import Link from "next/link";

import desktopBackdrop from "@/assets/navigation/navigation-desktop.png";
import phoneBackdrop from "@/assets/navigation/navigation-phone.png";
import tabletBackdrop from "@/assets/navigation/navigation-tablet.png";

import styles from "./SiteHeader.module.css";

const navigationLinks = [
  { href: "/", label: "/home" },
  { href: "/expro", label: "/expro" },
  { href: "/about", label: "/about" },
] as const;

export function SiteHeader() {
  return (
    <header className={styles.header}>
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
        <Link className={styles.wordmark} href="/" aria-label="zaynedoc.dev home">
          <span>zaynedoc</span>
          <small>.dev</small>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className={styles.menu}>
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
