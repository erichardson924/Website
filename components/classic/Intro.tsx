/**
 * Classic intro — the same manifesto as the immersive page, laid out as
 * ordinary scrolling text. No fade-ins, so it is lighter on phones.
 */

import Image from "next/image";
import { intro } from "@/lib/content";

export function ClassicIntro() {
  return (
    <section id="intro" className="border-t border-ink/10 px-5 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-olive">
          {intro.number} — {intro.eyebrow}
        </p>

        <h2 className="mt-6 font-display text-3xl leading-snug tracking-[-0.02em] sm:text-4xl">
          {intro.heading}
        </h2>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
          {intro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ol className="mt-12 space-y-8">
          {intro.principles.map((principle) => (
            <li key={principle.number} className="border-t border-ink/10 pt-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-clay">
                {principle.number}
              </p>
              <h3 className="mt-2 font-display text-2xl">{principle.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink/70">
                {principle.text}
              </p>
            </li>
          ))}
        </ol>

        <figure className="mt-14">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/intro.png"
              alt="Olive branches and sage against warm plaster in morning light"
              fill
              sizes="(min-width: 768px) 48rem, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-[11px] uppercase tracking-[0.22em] text-olive">
            {intro.imageCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
