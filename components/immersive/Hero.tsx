/**
 * Immersive hero — the full-screen opening of the site.
 *
 * Layers, from back to front:
 * 1. A photograph that slowly zooms (like a gentle film still).
 * 2. A warm dark gradient so cream-colored type stays readable.
 * 3. Your name, role, and tagline.
 * 4. A "scroll to discover" cue at the bottom.
 */

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function ImmersiveHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative h-dvh min-h-[640px] overflow-hidden text-cream">
      <div className="absolute inset-0">
        <div className={reduceMotion ? "h-full w-full" : "hero-ken-burns h-full w-full origin-center"}>
          <Image
            src="/images/hero.png"
            alt="Sunlit linen table with terracotta, olive branches, and a ceramic cup"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_70%]"
          />
        </div>
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/45"
        aria-hidden="true"
      />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-24 pt-28 sm:px-10 lg:px-16">
        <motion.p
          className="mb-6 text-[11px] font-medium uppercase tracking-[0.28em] text-cream/80"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
        >
          {site.location} · {site.role}
        </motion.p>

        <motion.h1
          className="font-display text-[clamp(2.85rem,10vw,9.5rem)] leading-[0.86] tracking-[-0.03em]"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.28, ease }}
        >
          <span className="block">{site.firstName}</span>
          <span className="block italic font-light">{site.lastName}</span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
        >
          {site.heroLine} {site.tagline}
        </motion.p>
      </div>

      <motion.a
        href="#intro"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-cream/80"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Scroll to discover
        <span
          className="scroll-cue-line block h-10 w-px bg-cream/70"
          aria-hidden="true"
        />
      </motion.a>
    </section>
  );
}
