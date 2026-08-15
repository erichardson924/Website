/**
 * Immersive hero — a pinned "film" you scroll through.
 *
 * The photograph stays full-screen while you scroll. Your name fades away,
 * then manifesto lines appear one at a time over the image. The photo slowly
 * zooms, like a camera pushing in. After the last line, the page eases into
 * the intro on cream paper.
 */

"use client";

import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { intro, site } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

type ImmersiveHeroProps = {
  onOverPhotoChange?: (overPhoto: boolean) => void;
};

export function ImmersiveHero({ onOverPhotoChange }: ImmersiveHeroProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const overlay = useTransform(scrollYProgress, [0, 0.45, 0.88], [0.28, 0.48, 0.72]);
  const creamWash = useTransform(scrollYProgress, [0.84, 1], [0, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const firstY = useTransform(scrollYProgress, [0, 0.2], [0, -70]);
  const lastY = useTransform(scrollYProgress, [0, 0.2], [0, 48]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.07], [1, 0]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (reduceMotion) {
      return;
    }
    onOverPhotoChange?.(value < 0.86);
  });

  useEffect(() => {
    if (!reduceMotion) {
      return;
    }

    const update = () => {
      onOverPhotoChange?.(window.scrollY < window.innerHeight - 72);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [onOverPhotoChange, reduceMotion]);

  if (reduceMotion) {
    return <StillHero />;
  }

  return (
    <section ref={ref} className="relative h-[360vh] md:h-[440vh]">
      <div className="sticky top-0 h-dvh min-h-[560px] overflow-hidden bg-ink text-cream">
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ scale: imageScale, y: imageY }}
        >
          <Image
            src="/images/hero.png"
            alt="Sunlit linen table with terracotta, olive branches, and a ceramic cup"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_70%]"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-ink"
          style={{ opacity: overlay }}
          aria-hidden="true"
        />
        <div className="grain absolute inset-0 z-[1]" aria-hidden="true" />

        <motion.div
          className="absolute inset-0 z-[2] flex flex-col justify-end px-5 pb-28 pt-28 sm:px-10 lg:px-16"
          style={{ opacity: titleOpacity }}
        >
          <motion.p
            className="mb-6 text-[11px] font-medium uppercase tracking-[0.28em] text-cream/80"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
          >
            {site.location} · {site.role}
          </motion.p>

          <h1 className="font-display text-[clamp(2.85rem,10vw,9.5rem)] leading-[0.86] tracking-[-0.03em]">
            <motion.span className="block" style={{ y: firstY }}>
              {site.firstName}
            </motion.span>
            <motion.span className="block italic font-light" style={{ y: lastY }}>
              {site.lastName}
            </motion.span>
          </h1>

          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease }}
          >
            {site.heroLine}
          </motion.p>
        </motion.div>

        <div className="absolute inset-0 z-[3] flex items-center justify-center px-6 sm:px-10">
          {intro.scrollBeats.map((line, index) => (
            <StoryBeat
              key={line}
              progress={scrollYProgress}
              index={index}
              count={intro.scrollBeats.length}
            >
              {line}
            </StoryBeat>
          ))}
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 z-[4] flex -translate-x-1/2 flex-col items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-cream/80"
          style={{ opacity: cueOpacity }}
        >
          Scroll to discover
          <span
            className="scroll-cue-line block h-10 w-px bg-cream/70"
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 z-[5] h-[1.5px] w-full origin-left bg-cream/75"
          style={{ scaleX: progressScale }}
          aria-hidden="true"
        />

        <motion.div
          className="absolute inset-0 z-[6] bg-cream"
          style={{ opacity: creamWash }}
          aria-hidden="true"
        />

        <motion.div
          className="pointer-events-none absolute inset-0 z-[7] bg-ink"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.7, delay: 0.1, ease }}
        />
      </div>
    </section>
  );
}

function StoryBeat({
  progress,
  index,
  count,
  children,
}: {
  progress: MotionValue<number>;
  index: number;
  count: number;
  children: ReactNode;
}) {
  const startPad = 0.18;
  const endPad = 0.1;
  const slice = (1 - startPad - endPad) / count;
  const start = startPad + index * slice;
  const fadeIn = start + slice * 0.16;
  const fadeOut = start + slice * 0.78;
  const end = start + slice + 0.015;

  const opacity = useTransform(
    progress,
    [start, fadeIn, fadeOut, end],
    [0, 1, 1, 0],
  );
  const y = useTransform(
    progress,
    [start, fadeIn, fadeOut, end],
    [40, 0, 0, -28],
  );

  return (
    <motion.p
      style={{ opacity, y }}
      className="absolute max-w-4xl text-center font-display text-[clamp(1.85rem,5vw,4rem)] leading-[1.18] tracking-[-0.03em] text-cream"
    >
      {children}
    </motion.p>
  );
}

function StillHero() {
  return (
    <section className="relative h-dvh min-h-[640px] overflow-hidden text-cream">
      <Image
        src="/images/hero.png"
        alt="Sunlit linen table with terracotta, olive branches, and a ceramic cup"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_70%]"
      />
      <div className="absolute inset-0 bg-ink/50" aria-hidden="true" />
      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-24 sm:px-10 lg:px-16">
        <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.28em] text-cream/80">
          {site.location} · {site.role}
        </p>
        <h1 className="font-display text-[clamp(2.85rem,10vw,9.5rem)] leading-[0.86] tracking-[-0.03em]">
          <span className="block">{site.firstName}</span>
          <span className="block italic font-light">{site.lastName}</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-cream/85">{site.heroLine}</p>
      </div>
    </section>
  );
}
