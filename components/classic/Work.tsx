/**
 * Selected work on the classic homepage — desktop and phone mockups,
 * no animation. Each card still opens the project page.
 */

import Image from "next/image";
import Link from "next/link";
import { projects, work } from "@/lib/content";

export function ClassicWork() {
  return (
    <section id="work" className="border-t border-ink/10 px-5 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-olive">
          {work.number} — {work.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl tracking-[-0.02em] sm:text-4xl">
          {work.heading}
        </h2>

        <ul className="mt-12 space-y-16">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="grid grid-cols-12 items-end gap-3">
                  <div className="relative col-span-8 aspect-[16/10] overflow-hidden bg-ink">
                    <Image
                      src={project.cover.src}
                      alt={project.cover.alt}
                      fill
                      sizes="(min-width: 768px) 32rem, 70vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative col-span-4 aspect-[3/4] overflow-hidden bg-ink">
                    <Image
                      src={project.phone.src}
                      alt={project.phone.alt}
                      fill
                      sizes="(min-width: 768px) 12rem, 30vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl">
                    <span className="mr-3 text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-clay">
                      {project.number}
                    </span>
                    {project.title}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-olive">
                    {project.category} →
                  </p>
                </div>
                <p className="mt-2 text-base text-ink/70">{project.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
