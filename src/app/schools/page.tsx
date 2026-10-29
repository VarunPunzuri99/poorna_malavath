import type { Metadata } from "next";
import { SchoolsPage } from "@/components/schools/SchoolsPage";

export const metadata: Metadata = {
  title: "For Schools",
  description:
    "Outdoor school programs from Poorna Mountaineering Academy that help students discover courage, responsibility and one another.",
};

export default function Page() {
  return <SchoolsPage />;
}
