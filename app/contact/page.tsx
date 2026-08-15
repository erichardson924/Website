/**
 * /contact — a simple page for a consult request or a hello.
 * Shared by both experiences so the form is easy to find.
 */

import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: `Request a consult or say hi. ${site.email}`,
};

export default function ContactPage() {
  return (
    <>
      <SiteNav experience="classic" homeHref="/" />
      <main>
        <ContactPageContent />
      </main>
      <SiteFooter experience="classic" />
    </>
  );
}
