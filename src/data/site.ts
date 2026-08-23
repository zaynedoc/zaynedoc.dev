export const siteUrl = "https://zaynedoc.dev";
export const siteName = "zaynedoc.dev";

export const indexableRobots = {
  follow: true,
  googleBot: {
    follow: true,
    index: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  index: true,
};

export const noIndexRobots = {
  follow: false,
  googleBot: {
    follow: false,
    index: false,
  },
  index: false,
};
