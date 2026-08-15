/**
 * Immersive intro — the philosophy after the photo-story.
 *
 * This is still a scrolling chapter, not a tight website block: a large
 * heading, a full-screen image that drifts as you pass, then three principles
 * given almost a full screen each.
 */

"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { intro } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function ImmersiveIntro() {
  const reduceMotion = useReducedMotion();
  const imageRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.18, 1]);

  return (
    <section id="intro" className="relative bg-cream text-ink">
      <div className="mx-auto flex min-h-[90dvh] max-w-5xl flex-col justify-center px-5 py-28 sm:px-10 sm:py-36 lg:px-16">
        <motion.p
          className="text-[11px] font-medium uppercase tracking-[0.28em] text-olive"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.9, ease }}
        >
          {intro.number} — {intro.eyebrow}
        </motion.p>

        <motion.h2
          className="mt-8 font-display text-[clamp(2.4rem,6.5vw,5.6rem)] leading-[1.08] tracking-[-0.03em]"
          initial={reduceMotion ? false : { opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1.1, ease }}
        >
          {intro.heading}
        </motion.h2>

        <div className="mt-12 max-w-2xl space-y-6 text-lg leading-relaxed text-ink/75 sm:text-xl">
          {intro.paragraphs.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.9, delay: index * 0.12, ease }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>

      <figure ref={imageRef} className="relative h-[75dvh] overflow-hidden md:h-dvh">
        <motion.div
          className="absolute inset-[-16%] will-change-transform"
          style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}
        >
          <Image
            src="/images/intro.png"
            alt="Olive branches and sage against warm plaster in morning light"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="grain absolute inset-0" aria-hidden="true" />
        <figcaption className="absolute bottom-8 left-5 z-10 text-[11px] uppercase tracking-[0.22em] text-cream sm:left-10">
          Designed to be felt, then understood.
        </figcaption>
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
          aria-hidden="true"
        />
      </figure>

      <ol className="mx-auto max-w-5xl px-5 sm:px-10 lg:px-16">
        {intro.principles.map((principle) => (
          <li
            key={principle.number}
            className="flex min-h-[85dvh] flex-col justify-center border-t border-ink/10 py-20"
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 1, ease }}
            >
              <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.28em] text-clay">
                {principle.number}
              </p>
              <h3 className="max-w-4xl font-display text-[clamp(2.2rem,6vw,5.2rem)] leading-[1.08] tracking-[-0.03em]">
                {principle.title}
              </h3>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/70 sm:text-xl">
                {principle.text}
              </p>
            </motion.div>
          </li>
        ))}
      </ol>
    </section>
  );
}
