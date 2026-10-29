import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Whether you’re planning a school program, inviting Poorna to speak or exploring a partnership, tell the academy what you hope to make possible.",
};

export default function Page() {
  return <ContactPage />;
}
