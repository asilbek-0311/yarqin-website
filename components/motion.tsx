"use client";

import { useRef, type ReactNode } from "react";
import {
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export const motionEase = [0.22, 1, 0.36, 1] as const;

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.55, ease: motionEase }}
    >
      {children}
    </MotionConfig>
  );
}

export function MotionArtwork({
  children,
  className,
  travel = 24,
}: {
  children: ReactNode;
  className: string;
  travel?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const offset = useTransform(scrollYProgress, [0, 1], [travel, -travel]);
  const y = useSpring(offset, { stiffness: 85, damping: 24, restDelta: 0.1 });

  return (
    <div ref={ref} className={className}>
      <motion.div className="motion-art-plane" style={{ y: reduced ? 0 : y }}>
        <motion.div
          className="motion-art-inner"
          initial={false}
          whileHover={reduced ? undefined : { scale: 1.035, rotate: -1.5 }}
          transition={{ type: "spring", stiffness: 140, damping: 22 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

export function MotionCta({
  children,
  href,
  className = "button button-white",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const gestures = {
    whileHover: reduced ? undefined : { y: -3, scale: 1.025 },
    whileTap: reduced ? undefined : { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 350, damping: 22 },
    className,
    "data-motion": true,
  };
  return href ? (
    <motion.a href={href} {...gestures}>
      {children}
    </motion.a>
  ) : (
    <motion.button type="button" data-partner-trigger {...gestures}>
      {children}
    </motion.button>
  );
}
