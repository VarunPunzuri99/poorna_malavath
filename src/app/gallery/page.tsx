import type { Metadata } from "next";
import { GalleryPage } from "@/components/gallery/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A living archive of expeditions, training grounds, school programs and the people who turn preparation into possibility.",
};

export default function Page() {
  return <GalleryPage />;
}
