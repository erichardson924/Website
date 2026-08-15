/**
 * A quiet closing bar so the page does not end abruptly after the intro.
 * Later this can hold email and social links when Contact is built.
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
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-olive sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name} · {site.location}
        </p>
        <Link href={toggleHref} className="transition-opacity hover:opacity-70">
          {toggleLabel} →
        </Link>
      </div>
    </footer>
  );
}
