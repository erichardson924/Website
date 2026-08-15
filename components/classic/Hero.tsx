/**
 * Classic hero — the same opening information, without animation.
 *
 * A smaller photo sits in the layout like a magazine still, then the name
 * and tagline follow. This version is meant to load quickly and read easily.
 */

import Image from "next/image";
import { site } from "@/lib/content";

export function ClassicHero() {
  return (
    <section className="px-5 pb-16 pt-28 sm:px-10 sm:pb-20 sm:pt-32 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.28em] text-olive">
          {site.location} · {site.role}
        </p>

        <div className="relative mb-10 aspect-[16/9] overflow-hidden">
          <Image
            src="/images/hero.png"
            alt="Sunlit linen table with terracotta, olive branches, and a ceramic cup"
            fill
            priority
            sizes="(min-width: 768px) 48rem, 100vw"
            className="object-cover object-[center_70%]"
          />
        </div>

        <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl">
          {site.firstName}{" "}
          <span className="italic font-light">{site.lastName}</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
          {site.heroLine} {site.tagline}
        </p>
      </div>
    </section>
  );
}
