export type SocialLink = {
  href: string;
  label: string;
  text: string;
};

export type HeroConfig = {
  name: string;
  socialLinks: readonly SocialLink[];
};

export const homeHeroConfig: HeroConfig = {
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
      href: "https://zaynedoc.dev",
      label: "zaynedoc.dev",
      text: "zaynedoc.dev",
    },
  ],
};
