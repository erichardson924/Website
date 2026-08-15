/**
 * Immersive intro — a short, quiet chapter after the photo-story.
 *
 * Kept compact on purpose: a heading, two paragraphs, three ways of working,
 * and one full-bleed image before the work samples.
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
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="intro" className="relative bg-cream text-ink">
      <div className="mx-auto max-w-3xl px-5 py-28 sm:px-10 sm:py-36 lg:px-16">
        <motion.p
          className="text-[11px] font-medium uppercase tracking-[0.28em] text-olive"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease }}
        >
          {intro.number} — {intro.eyebrow}
        </motion.p>

        <motion.h2
          className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.12] tracking-[-0.03em]"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease }}
        >
          {intro.heading}
        </motion.h2>

        <div className="mt-10 space-y-5 text-lg leading-relaxed text-ink/75">
          {intro.paragraphs.map((paragraph) => (
            <motion.p
              key={paragraph}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <ol className="mt-16 grid gap-10 border-t border-ink/10 pt-12 sm:grid-cols-3 sm:gap-8">
          {intro.principles.map((principle) => (
            <li key={principle.number}>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-clay">
                {principle.number}
              </p>
              <h3 className="mt-3 font-display text-2xl tracking-tight">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                {principle.text}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <figure ref={imageRef} className="relative h-[70dvh] overflow-hidden md:h-[85dvh]">
        <motion.div
          className="absolute inset-[-12%]"
          style={reduceMotion ? undefined : { y: imageY }}
        >
          <Image
            src="/images/intro.png"
            alt="Olive branches and sage against warm plaster in morning light"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <figcaption className="absolute bottom-8 left-5 z-10 text-[11px] uppercase tracking-[0.22em] text-cream sm:left-10">
          {intro.imageCaption}
        </figcaption>
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"
          aria-hidden="true"
        />
      </figure>
    </section>
  );
}
