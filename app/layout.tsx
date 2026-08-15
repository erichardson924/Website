/**
 * The layout wraps every page on the site.
 *
 * Think of it as the frame around a painting: fonts, the browser tab title,
 * and the overall page language live here so you do not repeat them.
 */

import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: `${site.heroLine} ${site.tagline}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-ink">{children}</body>
    </html>
  );
}
