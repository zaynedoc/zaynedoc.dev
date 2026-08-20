"use client";

import { useEffect, useRef } from "react";

import styles from "./HeroBackground.module.css";

export function HeroBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = dotsRef.current;

    if (!canvas) {
      return;
    }

    const cursor = { x: -1000, y: -1000 };
    let frame: number | null = null;

    const drawDots = () => {
      const bounds = canvas.getBoundingClientRect();
      const context = canvas.getContext("2d");

      if (!context || bounds.width === 0 || bounds.height === 0) {
        frame = null;
        return;
      }

      const pixelRatio = window.devicePixelRatio || 1;
      const width = Math.round(bounds.width * pixelRatio);
      const height = Math.round(bounds.height * pixelRatio);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      const styles = window.getComputedStyle(canvas);
      const step = Number.parseFloat(styles.getPropertyValue("--hero-dot-step")) || 24;
      const dotDiameter = Number.parseFloat(styles.getPropertyValue("--hero-dot-size")) || 2;
      const fadeRadius = 300;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, bounds.width, bounds.height);

      for (let y = 0; y <= bounds.height; y += step) {
        for (let x = 0; x <= bounds.width; x += step) {
          const distance = Math.hypot(x - cursor.x, y - cursor.y);
          const falloff = Math.min(1, distance / fadeRadius);
          const alpha = 0.2 * (0.05 + (0.95 * falloff * falloff));

          context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          context.beginPath();
          context.arc(x, y, dotDiameter / 2, 0, Math.PI * 2);
          context.fill();
        }
      }

      frame = null;
    };

    const requestDraw = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(drawDots);
      }
    };

    const updateCursor = (event: PointerEvent) => {
      const background = backgroundRef.current;

      if (!background || event.pointerType !== "mouse") {
        return;
      }

      const bounds = background.getBoundingClientRect();
      const isInsideHero = event.clientX >= bounds.left
        && event.clientX <= bounds.right
        && event.clientY >= bounds.top
        && event.clientY <= bounds.bottom;

      if (!isInsideHero) {
        cursor.x = -1000;
        cursor.y = -1000;
        requestDraw();
        return;
      }

      cursor.x = event.clientX - bounds.left;
      cursor.y = event.clientY - bounds.top;
      requestDraw();
    };

    const resizeObserver = new ResizeObserver(requestDraw);

    resizeObserver.observe(canvas);
    window.addEventListener("pointermove", updateCursor, { passive: true });
    window.addEventListener("resize", requestDraw);
    requestDraw();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", updateCursor);
      window.removeEventListener("resize", requestDraw);

      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div className={styles.background} aria-hidden="true" ref={backgroundRef}>
      <div className={`${styles.blob} ${styles.blobOne}`} />
      <div className={`${styles.blob} ${styles.blobTwo}`} />
      <div className={`${styles.blob} ${styles.blobThree}`} />
      <div className={`${styles.blob} ${styles.blobFour}`} />
      <div className={`${styles.blob} ${styles.blobFive}`} />
      <canvas className={styles.dots} ref={dotsRef} />
    </div>
  );
}
