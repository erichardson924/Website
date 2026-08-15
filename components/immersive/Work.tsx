/**
 * Selected work on the immersive homepage.
 *
 * Each row is a large image with a short caption. The whole row is a link
 * to a simple project page where you can look more closely.
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projects, work } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function ImmersiveWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" className="bg-cream px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-olive">
          {work.number} — {work.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.03em]">
          {work.heading}
        </h2>

        <ul className="mt-16 space-y-20 sm:space-y-28">
          {projects.map((project) => (
            <li key={project.slug}>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease }}
              >
                <Link href={`/work/${project.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-sand sm:aspect-[16/8]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-5 flex flex-wrap items-baseline justify-between gap-3 text-sm">
                    <p className="font-display text-2xl tracking-tight sm:text-3xl">
                      <span className="mr-4 text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-clay">
                        {project.number}
                      </span>
                      {project.title}
                    </p>
                    <p className="uppercase tracking-[0.18em] text-olive">
                      {project.category}
                      <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </p>
                  </div>
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
