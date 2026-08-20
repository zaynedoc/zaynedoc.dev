import type { PortfolioDetails } from "./portfolio-details";

export type ProjectItem = {
  descriptor: string;
  href: string;
  title: string;
} & PortfolioDetails;

export const projectItems: readonly ProjectItem[] = [
  {
    descriptor: "Hackathon (BloomHacks)",
    href: "https://github.com/Kevinli7673/Fleurish",
    title: "Fleurish",
    timeline: { start: "June 2026", end: "July 2026" },
    highlights: [
      "Placeholder: describe the problem Fleurish was designed to solve.",
      "Placeholder: add the product, technical, or team contribution that made it distinct.",
    ],
    tags: ["Hackathon", "Frontend", "Product"],
  },
  {
    descriptor: "Organization Project",
    href: "https://github.com/Knights-Design-Interactive/KDI-Website",
    title: "KDI’s Website",
    timeline: { start: "August 2026", end: "Present" },
    highlights: [
      "Placeholder: describe the organization site’s audience and primary experience.",
      "Placeholder: add a feature, implementation decision, or launch outcome.",
    ],
    tags: ["Web Development", "Frontend", "Organization"],
  },
  {
    descriptor: "Hackathon (Project Launch ’26)",
    href: "https://github.com/project-vigil-knighthacks/vigil",
    title: "Vigil SIEM",
    timeline: { start: "January 2026", end: "April 2026" },
    highlights: [
      "Placeholder: describe the monitoring or security problem Vigil SIEM addresses.",
      "Placeholder: add the stack, team role, or implementation highlight.",
    ],
    tags: ["Hackathon", "Security", "MCP"],
  },
  {
    descriptor: "Hackathon (HackUSF ’26)",
    href: "https://github.com/hackusf-2026-crisis-net/crisis-net",
    title: "Crisis-Net.tech",
    timeline: { start: "March 2026" },
    highlights: [
      "Placeholder: describe the civic, emergency, or coordination problem the project solves.",
      "Placeholder: add the stack, team role, or project outcome.",
    ],
    tags: ["Hackathon", "Frontend", "Impact"],
  },
];
