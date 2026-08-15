/**
 * A single project page. Shared by both experiences — a quiet place to
 * look at one piece of work without animation.
 */

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="bg-paper px-5 pb-24 pt-28 sm:px-10 sm:pb-32 sm:pt-32 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#work"
          className="text-[11px] font-medium uppercase tracking-[0.22em] text-olive transition-opacity hover:opacity-70"
        >
          ← All work
        </Link>

        <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.28em] text-clay">
          {project.number} — {project.category}
        </p>
        <h1 className="mt-4 font-display text-5xl tracking-[-0.03em] sm:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
          {project.summary}
        </p>
      </div>

      <div className="relative mx-auto mt-14 aspect-[16/10] max-w-5xl overflow-hidden bg-sand">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 64rem, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mx-auto mt-14 max-w-3xl space-y-5 text-lg leading-relaxed text-ink/80">
        {project.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
