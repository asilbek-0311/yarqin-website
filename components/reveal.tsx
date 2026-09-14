"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useAnimate, useInView, useReducedMotion } from "framer-motion";
import { motionEase } from "./motion";

export function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const [ref, animate] = useAnimate<HTMLDivElement>();
  const entered = useRef(false);
  const visible = useInView(ref, { once: true, amount: 0.12 });
  const reduced = useReducedMotion();
  useEffect(() => {
    const node = ref.current;
    if (!node || !visible || reduced || entered.current) return;
    entered.current = true;
    // Animate only after entering: server-rendered content is never hidden.
    const controls = animate(
      node,
      { opacity: [0, 1], y: [28, 0] },
      { duration: 0.8, delay, ease: motionEase },
    );
    return () => {
      controls.complete();
    };
  }, [animate, delay, reduced, ref, visible]);
  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}
