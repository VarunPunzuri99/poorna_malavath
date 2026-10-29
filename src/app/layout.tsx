import type { Metadata } from "next";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { suppliedFontClassName } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Poorna Malavath · Mountaineer, Adventurer & Mentor",
    template: "Poorna Malavath · %s",
  },
  description:
    "Official website of Poorna Malavath, mountaineer, adventurer and mentor. Explore her journey, achievements, training and school programs.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={suppliedFontClassName || undefined}>
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
