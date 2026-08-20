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
      "Worked with a team of 7 software engineers to collaborate on website development through Agile Scrum",
      "Implemented donation integration through secure payment link generation using Venmo/Cashapp API",
    ],
    tags: ["Hackathon", "Frontend", "Product"],
  },
  {
    descriptor: "Organization Project",
    href: "https://github.com/Knights-Design-Interactive/KDI-Website",
    title: "KDI’s Website",
    timeline: { start: "August 2026", end: "Present" },
    highlights: [
      "Currently in development!",
    ],
    tags: ["Web Development", "Frontend", "Organization"],
  },
  {
    descriptor: "Hackathon (Project Launch ’26)",
    href: "https://github.com/project-vigil-knighthacks/vigil",
    title: "Vigil SIEM",
    timeline: { start: "January 2026", end: "April 2026" },
    highlights: [
      "Led a team of 6 software developers with Jira ticketing-system and Agile methodology",
      "Architected a local SIEM (Security Information & Event Management) dashboard platform, processing real-time events from integrated applications via API-authenticated endpoints",
    ],
    tags: ["Hackathon", "Security", "MCP"],
  },
  {
    descriptor: "Hackathon (HackUSF ’26)",
    href: "https://github.com/hackusf-2026-crisis-net/crisis-net",
    title: "Crisis-Net.tech",
    timeline: { start: "March 2026" },
    highlights: [
      "HackUSF 2026 winner out of 85 projects for best use of .Tech, team of 4 software developers",
      "Built a real-time disaster response dashboard serving NWS alerts across 14+ API endpoints by orchestrating a multi-agentic system of 5 Google ADK agents on a FastAPI backend",
    ],
    tags: ["Hackathon", "Frontend", "Impact"],
  },
];
