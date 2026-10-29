import type { Metadata } from "next";
import { GuardianStep } from "@/components/register/RegisterSteps";

export const metadata: Metadata = {
  title: "Register — Guardian",
  description: "Choose how guardian communication and consent will be managed.",
};

export default function Page() {
  return <GuardianStep />;
}
