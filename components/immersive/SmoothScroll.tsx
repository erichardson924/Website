/**
 * Smooth scrolling for the immersive page.
 *
 * Ordinary websites jump in small steps when you use the mouse wheel.
 * This wraps the page so scrolling feels more like a camera move.
 * It turns itself off if someone has "reduce motion" enabled.
 */

"use client";

import { useReducedMotion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import type { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return children;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        wheelMultiplier: 0.88,
        touchMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
