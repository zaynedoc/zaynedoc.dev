"use client";

import { useEffect, useRef } from "react";

import styles from "./InvertedCursor.module.css";

export function InvertedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const contrastRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const drawCursor = () => {
      const cursor = cursorRef.current;
      const contrast = contrastRef.current;

      if (cursor) {
        cursor.style.transform = `translate3d(${pointRef.current.x}px, ${pointRef.current.y}px, 0) translate(-50%, -50%)`;
        cursor.style.opacity = "1";
      }

      if (contrast) {
        const size = 22;
        const radius = size / 2;
        const { x, y } = pointRef.current;
        const darkSurface = [...document.querySelectorAll<HTMLElement>("[data-cursor-tone='dark']")]
          .map((surface) => surface.getBoundingClientRect())
          .find((surface) => (
            x + radius > surface.left
            && x - radius < surface.right
            && y + radius > surface.top
            && y - radius < surface.bottom
          ));

        if (!darkSurface) {
          contrast.style.clipPath = "inset(100%)";
        } else {
          const left = Math.max(0, Math.min(size, darkSurface.left - (x - radius)));
          const top = Math.max(0, Math.min(size, darkSurface.top - (y - radius)));
          const right = Math.max(0, Math.min(size, (x + radius) - darkSurface.right));
          const bottom = Math.max(0, Math.min(size, (y + radius) - darkSurface.bottom));

          contrast.style.clipPath = `inset(${top}px ${right}px ${bottom}px ${left}px)`;
        }
      }

      frameRef.current = null;
    };

    const moveCursor = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      pointRef.current = { x: event.clientX, y: event.clientY };

      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(drawCursor);
      }
    };

    const hideCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    window.addEventListener("blur", hideCursor);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("blur", hideCursor);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div aria-hidden="true" className={styles.cursor} ref={cursorRef}>
      <div className={styles.contrast} ref={contrastRef} />
    </div>
  );
}
