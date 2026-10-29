import type { Metadata } from "next";
import { TrainingPage } from "@/components/training/TrainingPage";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Poorna Mountaineering Academy offers outdoor training for children, schools, college groups, individuals and teams.",
};

export default function Page() {
  return <TrainingPage />;
}
