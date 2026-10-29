import type { Metadata } from "next";
import { ScheduleStep } from "@/components/register/RegisterSteps";

export const metadata: Metadata = {
  title: "Register — Schedule",
  description: "Share a preferred date and location. This is a preference, not a confirmed booking.",
};

export default function Page() {
  return <ScheduleStep />;
}
