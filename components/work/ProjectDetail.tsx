/**
 * A single project page — desktop mockup, phone mockup, an inner page,
 * and a short case study. Each client has its own color story.
 */

import Image from "next/image";
import Link from "next/link";
import { getNextProject, type Project } from "@/lib/content";

export function ProjectDetail({ project }: { project: Project }) {
  const next = getNextProject(project.slug);

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
          {project.number} — {project.category} · {project.year}
        </p>
        <h1 className="mt-4 font-display text-5xl tracking-[-0.03em] sm:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
          {project.summary}
        </p>
      </div>

      <figure className="relative mx-auto mt-14 aspect-[16/10] max-w-5xl overflow-hidden bg-ink">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          priority
          sizes="(min-width: 1024px) 64rem, 100vw"
          className="object-cover"
        />
        <figcaption className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.18em] text-cream/80">
          {project.cover.caption}
        </figcaption>
      </figure>

      <div className="mx-auto mt-16 grid max-w-5xl items-start gap-10 lg:grid-cols-12">
        <figure className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden bg-ink lg:col-span-5">
          <Image
            src={project.phone.src}
            alt={project.phone.alt}
            fill
            sizes="(min-width: 1024px) 24rem, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.18em] text-cream/80">
            {project.phone.caption}
          </figcaption>
        </figure>

        <div className="space-y-8 lg:col-span-7 lg:pt-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-olive">
              The brief
            </p>
            <p className="mt-3 text-lg leading-relaxed text-ink/80">{project.brief}</p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-olive">
              Approach
            </p>
            <p className="mt-3 text-lg leading-relaxed text-ink/80">
              {project.approach}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-olive">
              Color
            </p>
            <ul className="mt-4 flex flex-wrap gap-6">
              {project.palette.map((swatch) => (
                <li key={swatch.hex} className="flex items-center gap-3 text-sm">
                  <span
                    className="size-8 shrink-0 border border-ink/10"
                    style={{ backgroundColor: swatch.hex }}
                    aria-hidden="true"
                  />
                  <span>
                    {swatch.name}
                    <span className="ml-2 text-ink/45">{swatch.hex}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-olive">
              Pages
            </p>
            <p className="mt-3 text-base text-ink/70">{project.pages.join(" · ")}</p>
          </div>
        </div>
      </div>

      <figure className="relative mx-auto mt-16 aspect-[16/10] max-w-5xl overflow-hidden bg-ink">
        <Image
          src={project.interior.src}
          alt={project.interior.alt}
          fill
          sizes="(min-width: 1024px) 64rem, 100vw"
          className="object-cover"
        />
        <figcaption className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.18em] text-cream/80">
          {project.interior.caption}
        </figcaption>
      </figure>

      {next ? (
        <p className="mx-auto mt-20 max-w-5xl text-right">
          <Link
            href={`/work/${next.slug}`}
            className="font-display text-2xl tracking-tight transition-opacity hover:opacity-70"
          >
            Next — {next.title} →
          </Link>
        </p>
      ) : null}
    </article>
  );
}
