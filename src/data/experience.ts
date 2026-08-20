export type ExperienceItem = {
  organization: string;
  organizationUrl: string;
  role: string;
};

export const experienceItems: readonly ExperienceItem[] = [
  {
    organization: "Figma",
    organizationUrl: "https://www.figma.com/",
    role: "Campus Leader",
  },
  {
    organization: "Knights Design Interactive",
    organizationUrl: "https://www.instagram.com/knightsdesigninteractive/",
    role: "Web Developer",
  },
  {
    organization: "Bank of New York",
    organizationUrl: "https://www.bny.com/",
    role: "Software Engineer Intern",
  },
  {
    organization: "Knight Hacks",
    organizationUrl: "https://knighthacks.org/",
    role: "Project Lead + Outreach Team",
  },
  {
    organization: "Moonstone Games",
    organizationUrl: "https://www.linkedin.com/company/moonstonegames/",
    role: "QA Tester + Contributor",
  },
];
