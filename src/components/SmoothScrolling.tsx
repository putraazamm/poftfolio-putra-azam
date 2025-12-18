"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrolling() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    lenis.on("scroll", (e) => {
      // console.log(e); // Uncomment for debugging
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
