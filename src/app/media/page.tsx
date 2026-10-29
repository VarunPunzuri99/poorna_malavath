import type { Metadata } from "next";
import { MediaPage } from "@/components/media/MediaPage";

export const metadata: Metadata = {
  title: "Media",
  description:
    "News coverage, conversations and resources documenting Poorna Malavath’s journey—from a village in Telangana to the world’s highest summits.",
};

export default function Page() {
  return <MediaPage />;
}
