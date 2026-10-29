import type { Metadata } from "next";
import { ProgramStep } from "@/components/register/RegisterSteps";

export const metadata: Metadata = {
  title: "Register — Program",
  description: "Choose the training program that is the closest fit.",
};

export default function Page() {
  return <ProgramStep />;
}
