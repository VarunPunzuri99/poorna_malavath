import type { Metadata } from "next";
import { AchievementsPage } from "@/components/achievements/AchievementsPage";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Achievements of Poorna Malavath: Mount Everest at thirteen, the Seven Summits, awards, records and media appearances.",
};

export default function Page() {
  return <AchievementsPage />;
}
