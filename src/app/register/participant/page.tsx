import type { Metadata } from "next";
import { ParticipantStep } from "@/components/register/RegisterSteps";

export const metadata: Metadata = {
  title: "Register — Participant",
  description: "Add the participant or school coordination details for this registration.",
};

export default function Page() {
  return <ParticipantStep />;
}
