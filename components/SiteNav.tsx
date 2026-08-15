/**
 * The navigation bar.
 *
 * Immersive: floats over the hero photo, then darkens once you scroll past it.
 * Classic: stays a simple cream bar at the top.
 *
 * "use client" is required because the immersive bar watches how far you
 * have scrolled — that can only happen in the browser, not on the server.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { experienceToggle, site } from "@/lib/content";

type SiteNavProps = {
  experience: "immersive" | "classic";
  /** When the immersive photo-story is on screen, keep cream type over the image. */
  overPhoto?: boolean;
  /** Where the name in the nav should go. Defaults to the matching homepage. */
  homeHref?: string;
};

export function SiteNav({ experience, overPhoto, homeHref }: SiteNavProps) {
  const pathname = usePathname();
  const [overHero, setOverHero] = useState(experience === "immersive");

  useEffect(() => {
    if (experience !== "immersive" || overPhoto !== undefined) {
      return;
    }

    const update = () => {
      setOverHero(window.scrollY < window.innerHeight - 72);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [experience, overPhoto]);

  const onPhoto =
    experience === "immersive" && (overPhoto ?? overHero);
  const toggleHref = experience === "immersive" ? "/classic" : "/";
  const toggleLabel =
    experience === "immersive"
      ? experienceToggle.toClassic
      : experienceToggle.toImmersive;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        onPhoto ? "text-cream" : "bg-cream/90 text-ink backdrop-blur-sm"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8"
        aria-label="Primary"
      >
        <Link
          href={homeHref ?? (experience === "immersive" ? "/" : "/classic")}
          className="font-display text-lg tracking-tight sm:text-xl"
        >
          {site.name}
        </Link>

        <div className="flex items-center gap-6 sm:gap-8">
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className={`text-[11px] font-medium uppercase tracking-[0.22em] transition-opacity hover:opacity-70 ${
              onPhoto ? "text-cream" : "text-olive"
            } ${pathname === "/contact" ? "underline underline-offset-4" : ""}`}
          >
            Contact
          </Link>
          <Link
            href={toggleHref}
            className={`group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] transition-opacity hover:opacity-70 ${
              onPhoto ? "text-cream" : "text-olive"
            }`}
          >
            <span>{toggleLabel}</span>
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
