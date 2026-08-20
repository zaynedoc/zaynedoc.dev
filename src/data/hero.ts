import type { StaticImageData } from "next/image";

import exproRolesTexture from "@/assets/hero/expro-roles-texture.png";

export type SocialLink = {
  href: string;
  label: string;
  text: string;
};

export type HeroConfig = {
  contentLayout: "home" | "expro";
  name: string;
  roles?: {
    text: string;
    texture: StaticImageData;
  };
  socialLinks: readonly SocialLink[];
};

export const homeHeroConfig: HeroConfig = {
  contentLayout: "home",
  name: "Zayne Dockery",
  socialLinks: [
    {
      href: "https://github.com/zaynedoc",
      label: "Zayne Dockery on GitHub",
      text: "zaynedoc",
    },
    {
      href: "https://www.linkedin.com/in/zaynedoc/",
      label: "Zayne Dockery on LinkedIn",
      text: "in/zaynedoc",
    },
    {
      href: "https://www.figma.com/@zaynedoc",
      label: "Zayne Dockery on Figma",
      text: "@zaynedoc",
    },
  ],
};

export const exproHeroConfig: HeroConfig = {
  contentLayout: "expro",
  name: "Zayne Dockery",
  roles: {
    text: "Figma Campus Leader • Web Dev @ KDI • SWE Intern @ BNY • Outreach @ KH",
    texture: exproRolesTexture,
  },
  socialLinks: homeHeroConfig.socialLinks,
};
