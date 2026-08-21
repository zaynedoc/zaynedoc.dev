"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import type { ProjectItem } from "@/data/projects";

import styles from "./ProjectVisualizer.module.css";

const IDLE_SHUFFLE_DELAY = 10_000;

type ProjectVisualizerProps = {
  projects: readonly ProjectItem[];
  selectedProject: ProjectItem | null;
};

export function ProjectVisualizer({ projects, selectedProject }: ProjectVisualizerProps) {
  const projectsWithMedia = useMemo(() => projects.filter((project) => project.media), [projects]);
  const [idleIndex, setIdleIndex] = useState(0);

  useEffect(() => {
    if (selectedProject || projectsWithMedia.length < 2) {
      return;
    }

    const initialShuffle = window.setTimeout(() => {
      setIdleIndex(Math.floor(Math.random() * projectsWithMedia.length));
    }, 0);
    const interval = window.setInterval(() => {
      setIdleIndex((currentIndex) => (currentIndex + 1) % projectsWithMedia.length);
    }, IDLE_SHUFFLE_DELAY);

    return () => {
      window.clearTimeout(initialShuffle);
      window.clearInterval(interval);
    };
  }, [projectsWithMedia, selectedProject]);

  const activeProject = selectedProject ?? projectsWithMedia[idleIndex] ?? projects[0];
  const media = activeProject?.media;

  if (!activeProject) {
    return null;
  }

  return (
    <aside className={styles.visualizer} aria-label="Project visualizer">
      <div className={styles.float}>
        <div className={styles.card}>
          {media?.type === "video" ? (
            <video autoPlay className={styles.media} key={media.src} loop muted playsInline src={media.src} />
          ) : media?.type === "image" ? (
            <Image alt={media.alt ?? `${activeProject.title} project preview`} className={styles.media} fill sizes="(min-width: 64.0625rem) 30vw, 0px" src={media.src} />
          ) : (
            <div className={styles.emptyState}>
              <span>Project visualizer</span>
              <strong>{activeProject.title}</strong>
              <small>Add a PNG or MP4 in <code>/public/projects</code></small>
            </div>
          )}
          <div className={styles.label}>
            <span>{selectedProject ? "Selected project" : "Now showing"}</span>
            <strong>{activeProject.title}</strong>
          </div>
        </div>
      </div>
    </aside>
  );
}
