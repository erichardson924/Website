/**
 * A short close on the homepages that points people to /contact.
 */

import Link from "next/link";

export function ContactCta() {
  return (
    <section className="border-t border-ink/10 bg-cream px-5 py-24 text-center sm:px-10 sm:py-28">
      <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.03em]">
        Have a project in mind?
      </h2>
      <p className="mx-auto mt-4 max-w-md text-base text-ink/70">
        Request a consult, or just say hi.
      </p>
      <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-olive transition-opacity hover:opacity-70"
      >
        Contact
        <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
