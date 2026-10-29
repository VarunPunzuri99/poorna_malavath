import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: {
    absolute: "Poorna Malavath · Mountaineer, Adventurer & Mentor",
  },
  description:
    "Official website of Poorna Malavath, mountaineer, adventurer and mentor. Inspiring young minds to rise beyond their limits.",
};

export default function Page() {
  return <HomePage />;
}
