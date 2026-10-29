import type { ReactNode } from "react";
import { RegistrationProvider } from "@/components/register/RegistrationProvider";

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return <RegistrationProvider>{children}</RegistrationProvider>;
}
