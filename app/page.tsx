/**
 * The homepage ("/") — immersive experience.
 *
 * This file only assembles pieces. The hero and intro live in their own
 * files so each section stays easy to find. Selected Work, Services, and
 * Contact will be added here later as new sections.
 */

import { ImmersiveHero } from "@/components/immersive/Hero";
import { ImmersiveIntro } from "@/components/immersive/Intro";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export default function ImmersiveHome() {
  return (
    <>
      <SiteNav experience="immersive" />
      <main>
        <ImmersiveHero />
        <ImmersiveIntro />
      </main>
      <SiteFooter experience="immersive" />
    </>
  );
}
