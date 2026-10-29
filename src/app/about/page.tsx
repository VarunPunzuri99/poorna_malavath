import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Poorna Malavath, a mountaineer shaped by courage, discipline and a belief that every young person deserves the chance to dream beyond their circumstances.",
};

export default function Page() {
  return <AboutPage />;
}
