/**
 * The classic experience ("/classic").
 *
 * Same words as the immersive homepage, but a calmer layout with no
 * scroll animation. Linked from the nav as "Classic Experience →".
 */

import type { Metadata } from "next";
import { ClassicHero } from "@/components/classic/Hero";
import { ClassicIntro } from "@/components/classic/Intro";
import { ClassicWork } from "@/components/classic/Work";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `${site.name} — Classic`,
  description: `${site.heroLine} ${site.tagline}`,
};

export default function ClassicHome() {
  return (
    <>
      <SiteNav experience="classic" />
      <main className="bg-paper">
        <ClassicHero />
        <ClassicIntro />
        <ClassicWork />
      </main>
      <SiteFooter experience="classic" />
    </>
  );
}
