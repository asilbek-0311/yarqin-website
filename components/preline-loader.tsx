"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    HSStaticMethods?: { autoInit: () => void };
  }
}

export function PrelineLoader() {
  useEffect(() => {
    import("preline").then(() => window.HSStaticMethods?.autoInit());
  }, []);
  return null;
}

