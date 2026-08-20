import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  notFound();
}
