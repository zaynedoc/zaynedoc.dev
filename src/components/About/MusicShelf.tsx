"use client";

import { useState } from "react";

import { ResponsivePublicImage } from "@/components/ResponsivePublicImage/ResponsivePublicImage";
import { HeroBackground } from "@/components/PortfolioHero/HeroBackground";
import { favoriteSongs } from "@/data/music";

import styles from "./MusicShelf.module.css";

export function MusicShelf() {
  const [activeIndex, setActiveIndex] = useState(0);
  const song = favoriteSongs[activeIndex];

  function moveSelection(direction: 1 | -1) {
    setActiveIndex((currentIndex) => (currentIndex + direction + favoriteSongs.length) % favoriteSongs.length);
  }

  return (
    <section className={styles.section} aria-label="Favorite songs" data-cursor-tone="dark" data-theme-color="#cba5e5">
      <HeroBackground />
      <div className={styles.content}>
        <div className={styles.controls} aria-label="Choose a favorite song">
          <button aria-label="Previous song" onClick={() => moveSelection(-1)} type="button">↑</button>
          <button aria-label="Next song" onClick={() => moveSelection(1)} type="button">↓</button>
        </div>
        <div className={styles.artwork} key={song.artwork}>
          <ResponsivePublicImage alt={`Album art for ${song.title}`} webpSrc={song.artwork} />
        </div>
        <div className={styles.songCopy}>
          <p className={styles.eyebrow}>Favorite Songs</p>
          <p className={styles.eyebrow}><br /></p>
          <p className={styles.title}>“{song.title}”</p>
          <p className={styles.byline}>by {song.artist}</p>
        </div>
      </div>
    </section>
  );
}
