export type PortfolioTimeline = {
  start: string;
  end?: string;
};

export type PortfolioDetails = {
  timeline?: PortfolioTimeline;
  highlights: readonly string[];
  tags: readonly string[];
};
