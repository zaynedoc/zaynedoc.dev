import type { PortfolioDetails } from "./portfolio-details";

export type ExperienceItem = {
  organization: string;
  organizationUrl: string;
  role: string;
} & PortfolioDetails;

export const experienceItems: readonly ExperienceItem[] = [
  {
    organization: "Figma",
    organizationUrl: "https://www.instagram.com/figmacampusleaders/",
    role: "Campus Leader",
    timeline: { start: "August 2026", end: "Present" },
    highlights: [
      "Bringing Figma education accessibility to UCF students!",
    ],
    tags: ["Community", "Workshops", "Outreach", "Leadership"],
  },
  {
    organization: "Knights Design Interactive",
    organizationUrl: "https://www.instagram.com/kdi.club/",
    role: "Web Developer",
    timeline: { start: "August 2026", end: "Present" },
    highlights: [
      "Architecting prototypes for club website in collaboration with a team of 6 developers and designers",
      "Converting high-fidelity prototypes to responsive Next.js websites for desktop and mobile",
    ],
    tags: ["Frontend", "Web Development", "Design"],
  },
  {
    organization: "Bank of New York",
    organizationUrl: "https://www.bny.com/",
    role: "Software Engineer Intern",
    timeline: { start: "July 2026", end: "Present" },
    highlights: [
      "Fall 2026",
    ],
    tags: ["Software Engineering", "Agile", "Networking"],
  },
  {
    organization: "Knight Hacks",
    organizationUrl: "https://club.knighthacks.org/",
    role: "Project Lead + Outreach Team",
    timeline: { start: "August 2025", end: "Present" },
    highlights: [
      "Architected a local SIEM dashboard platform, processing real-time events from integrated applications via API-authenticated endpoints",
      "Attending student organization/ university tabling events to promote Knight Hacks to new audiences",
    ],
    tags: ["Leadership", "Outreach", "Hackathons", "Community"],
  },
  {
    organization: "Moonstone Games",
    organizationUrl: "https://www.linkedin.com/company/moonstonegames/",
    role: "QA Tester + Contributor",
    timeline: { start: "October 2022", end: "November 2024" },
    highlights: [
      "Conducted bug testing during testing sessions; led to multiple positive improvements in gameplay experience",
      "Developed numerous assets for Moonstone Games, while remaining as a QA Tester",
    ],
    tags: ["Quality Assurance", "Logo Creation", "Testing"],
  },
];
