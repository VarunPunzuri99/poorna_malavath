import type { Metadata } from "next";
import { WhoStep } from "@/components/register/RegisterSteps";

export const metadata: Metadata = {
  title: "Register — Who",
  description: "Choose whether you are registering an individual or a school group.",
};

export default function Page() {
  return <WhoStep />;
}
