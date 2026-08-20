import Image, { type StaticImageData } from "next/image";

import githubIcon from "@/assets/hero/social-github.svg";
import linkedInIcon from "@/assets/hero/social-linkedin.svg";
import compactSocialIcons from "@/assets/hero/social-list-compact.svg";
import websiteIcon from "@/assets/hero/social-website.svg";
import type { SocialLink } from "@/data/hero";

import styles from "./SocialLinks.module.css";

const socialIcons: readonly StaticImageData[] = [githubIcon, linkedInIcon, websiteIcon];

type SocialLinksProps = {
  links: readonly SocialLink[];
};

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <>
      <ul className={styles.desktopList} aria-label="Social links">
        {links.map((link, index) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noreferrer">
              <Image alt="" aria-hidden="true" className={styles.desktopIcon} src={socialIcons[index]} />
              <span>{link.text}</span>
            </a>
          </li>
        ))}
      </ul>

      <ul className={styles.compactList} aria-label="Social links">
        <Image alt="" aria-hidden="true" className={styles.compactArtwork} src={compactSocialIcons} />
        {links.map((link, index) => (
          <li key={link.href}>
            <a
              className={styles.compactLink}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              style={{ left: `${index * 74}px` }}
            >
              <span className={styles.visuallyHidden}>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
