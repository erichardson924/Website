/**
 * Closing bar: name, email, contact, and the experience toggle.
 */

import Link from "next/link";
import { experienceToggle, site } from "@/lib/content";

type SiteFooterProps = {
  experience: "immersive" | "classic";
};

export function SiteFooter({ experience }: SiteFooterProps) {
  const toggleHref = experience === "immersive" ? "/classic" : "/";
  const toggleLabel =
    experience === "immersive"
      ? experienceToggle.toClassic
      : experienceToggle.toImmersive;

  return (
    <footer className="border-t border-ink/10 bg-cream px-5 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-[11px] font-medium uppercase tracking-[0.22em] text-olive sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name} · {site.location}
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={`mailto:${site.email}`}
            className="normal-case tracking-normal transition-opacity hover:opacity-70"
          >
            {site.email}
          </a>
          <Link href="/contact" className="transition-opacity hover:opacity-70">
            Contact
          </Link>
          <Link href={toggleHref} className="transition-opacity hover:opacity-70">
            {toggleLabel} →
          </Link>
        </div>
      </div>
    </footer>
  );
}
