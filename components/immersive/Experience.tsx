/**
 * Puts the immersive homepage together: smooth scrolling, the photo-story
 * hero, the philosophy chapters, and the nav that stays light over the image.
 */

"use client";

import { useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { ImmersiveHero } from "@/components/immersive/Hero";
import { ImmersiveIntro } from "@/components/immersive/Intro";
import { ImmersiveWork } from "@/components/immersive/Work";
import { SmoothScroll } from "@/components/immersive/SmoothScroll";
import { ContactCta } from "@/components/contact/ContactCta";

export function ImmersiveExperience() {
  const [overPhoto, setOverPhoto] = useState(true);

  return (
    <SmoothScroll>
      <SiteNav experience="immersive" overPhoto={overPhoto} />
      <main>
        <ImmersiveHero onOverPhotoChange={setOverPhoto} />
        <ImmersiveIntro />
        <ImmersiveWork />
        <ContactCta />
      </main>
      <SiteFooter experience="immersive" />
    </SmoothScroll>
  );
}
