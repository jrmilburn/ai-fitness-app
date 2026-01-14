// --- FILE: app/(public)/_components/LenisProvider.tsx ---
"use client";

import * as React from "react";
import Lenis from "lenis";

type Props = {
  children: React.ReactNode;
};

/**
 * Client-only Lenis wrapper. Use it only where you want smooth scrolling.
 * This is intentionally scoped to the landing page (not the whole app).
 */
export default function LenisProvider({ children }: Props) {
  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
