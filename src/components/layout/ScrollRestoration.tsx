"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // Prevent the browser from automatically restoring scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // If it's the homepage and there is no hash in the URL, force scroll to top
    if (pathname === "/" && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
