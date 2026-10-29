import type { Metadata } from "next";
import { StoriesPage } from "@/components/stories/StoriesPage";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Field notes from training grounds, mountain paths and the quiet moments where confidence begins to take shape.",
};

export default function Page() {
  return <StoriesPage />;
}
