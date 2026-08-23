import type { Metadata } from "next";

import { NotFoundHero } from "@/components/NotFoundHero/NotFoundHero";
import { noIndexRobots } from "@/data/site";

export const metadata: Metadata = {
  robots: noIndexRobots,
  title: "404 — Not Found",
};

export default function NotFound() {
  return (
    <main>
      <NotFoundHero />
    </main>
  );
}
