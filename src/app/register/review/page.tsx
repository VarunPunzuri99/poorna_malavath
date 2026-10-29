import type { Metadata } from "next";
import { ReviewStep } from "@/components/register/RegisterSteps";

export const metadata: Metadata = {
  title: "Register — Review",
  description: "Review the prepared registration. Submission is not connected to a registration service.",
};

export default function Page() {
  return <ReviewStep />;
}
