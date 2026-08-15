/**
 * Immersive intro — the manifesto that appears after the hero.
 *
 * As you scroll, the heading, paragraphs, and three principles fade in.
 * The botanical photo is there for atmosphere, not as a project thumbnail.
 */

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { intro } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export function ImmersiveIntro() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : "hidden";

  return (
    <section id="intro" className="relative bg-cream text-ink">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <motion.div
          className="grid gap-12 lg:grid-cols-12 lg:gap-16"
          variants={stagger}
          initial={initial}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-olive lg:col-span-12"
          >
            {intro.number} — {intro.eyebrow}
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-[2.15rem] leading-[1.15] tracking-[-0.02em] sm:text-5xl lg:col-span-7 lg:text-[3.4rem]"
          >
            {intro.heading}
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg leading-relaxed text-ink/80 lg:col-span-5 lg:pt-3"
            variants={fadeUp}
          >
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>
        </motion.div>

        <motion.ul
          className="mt-20 grid gap-10 border-t border-ink/10 pt-14 sm:grid-cols-3 sm:gap-8"
          variants={stagger}
          initial={initial}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {intro.principles.map((principle) => (
            <motion.li key={principle.number} variants={fadeUp}>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-clay">
                {principle.number}
              </p>
              <h3 className="font-display text-2xl tracking-tight">
                {principle.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink/70">
                {principle.text}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.figure
          className="relative mt-24 overflow-hidden sm:mt-32"
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease }}
        >
          <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
            <Image
              src="/images/intro.png"
              alt="Olive branches and sage against warm plaster in morning light"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 text-[11px] uppercase tracking-[0.22em] text-olive">
            Designed to be felt, then understood.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
