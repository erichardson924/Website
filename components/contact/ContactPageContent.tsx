/**
 * Contact page copy and layout. The form itself lives in ContactForm.tsx
 * because it needs to run in the browser.
 */

import { ContactForm } from "@/components/contact/ContactForm";
import { contact, site } from "@/lib/content";

export function ContactPageContent() {
  return (
    <article className="bg-paper px-5 pb-24 pt-28 sm:px-10 sm:pb-32 sm:pt-32 lg:px-16">
      <div className="mx-auto max-w-2xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-olive">
          {site.location}
        </p>
        <h1 className="mt-4 font-display text-5xl tracking-[-0.03em] sm:text-6xl">
          {contact.heading}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
          {contact.lede}
        </p>
        <p className="mt-4 text-sm text-ink/70">
          Or email{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-ink underline decoration-clay/70 underline-offset-4 transition-opacity hover:opacity-70"
          >
            {site.email}
          </a>
          .
        </p>

        <div className="mt-14">
          <ContactForm />
        </div>
      </div>
    </article>
  );
}
