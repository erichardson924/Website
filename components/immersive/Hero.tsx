/**
 * Immersive hero — a pinned film you scroll through.
 *
 * One line of type is on screen at a time. The photograph changes behind it.
 * Lines never sit on top of each other: each one fades out completely
 * before the next one fades in.
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
import { useEffect, useRef } from "react";
import { filmStills, intro, site } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

/** Title is gone before the first line starts. Cream wash begins after the last line. */
const TITLE_END = 0.18;
const WASH_START = 0.9;

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

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.35, 0.55]);
  const creamWash = useTransform(scrollYProgress, [WASH_START, 1], [0, 1]);
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.14, TITLE_END],
    [1, 1, 0, 0],
  );
  const cueOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const still0 = useTransform(scrollYProgress, [0, 0.34, 0.42], [1, 1, 0]);
  const still1 = useTransform(
    scrollYProgress,
    [0.34, 0.42, 0.6, 0.68],
    [0, 1, 1, 0],
  );
  const still2 = useTransform(scrollYProgress, [0.6, 0.68, 1], [0, 1, 1]);
  const stillOpacities = [still0, still1, still2];

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
    <section ref={ref} className="relative h-[380vh] md:h-[460vh]">
      <div className="sticky top-0 h-dvh min-h-[560px] overflow-hidden bg-ink text-cream">
        {filmStills.map((still, index) => (
          <motion.div
            key={still.src}
            className="absolute inset-0"
            style={{ opacity: stillOpacities[index], scale: imageScale }}
          >
            <Image
              src={still.src}
              alt={still.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        ))}

        <motion.div
          className="absolute inset-0 bg-ink"
          style={{ opacity: overlay }}
          aria-hidden="true"
        />
        <div className="grain absolute inset-0 z-[1]" aria-hidden="true" />

        <div className="absolute inset-0 z-[2]">
          <motion.div
            className="absolute inset-0 flex items-center justify-center px-6"
            style={{ opacity: titleOpacity }}
          >
            <div className="max-w-4xl text-center">
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.28em] text-cream/75">
                {site.location} · {site.role}
              </p>
              <h1 className="font-display text-[clamp(2.6rem,8vw,7rem)] leading-[0.9] tracking-[-0.03em]">
                {site.firstName}{" "}
                <span className="italic font-light">{site.lastName}</span>
              </h1>
            </div>
          </motion.div>

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
          Scroll
          <span
            className="scroll-cue-line block h-10 w-px bg-cream/70"
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 z-[5] h-px w-full origin-left bg-cream/70"
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
          transition={{ duration: 1.4, delay: 0.08, ease }}
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
  children: string;
}) {
  const slice = (WASH_START - TITLE_END) / count;
  const start = TITLE_END + index * slice;
  const fadeIn = start + slice * 0.2;
  const fadeOut = start + slice * 0.7;
  const gone = start + slice * 0.88;

  const opacity = useTransform(
    progress,
    [start, fadeIn, fadeOut, gone],
    [0, 1, 1, 0],
  );

  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
    >
      <p className="max-w-3xl text-center font-display text-[clamp(1.75rem,4.4vw,3.4rem)] leading-[1.2] tracking-[-0.03em] text-cream">
        {children}
      </p>
    </motion.div>
  );
}

function StillHero() {
  return (
    <section className="relative h-dvh min-h-[640px] overflow-hidden text-cream">
      <Image
        src={filmStills[0].src}
        alt={filmStills[0].alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/50" aria-hidden="true" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.28em] text-cream/80">
          {site.location} · {site.role}
        </p>
        <h1 className="font-display text-[clamp(2.6rem,8vw,7rem)] leading-[0.9] tracking-[-0.03em]">
          {site.firstName}{" "}
          <span className="italic font-light">{site.lastName}</span>
        </h1>
        <p className="mt-8 text-lg text-cream/85">{site.heroLine}</p>
      </div>
    </section>
  );
}
