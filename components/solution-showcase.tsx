"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { businessStories, solutions } from "@/lib/solutions";
import { motionEase } from "./motion";

export function SolutionShowcase() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const group = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const solution = solutions[active];
  function keyNavigate(event: KeyboardEvent, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % solutions.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + solutions.length) % solutions.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = solutions.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }
  return (
    <>
      <LayoutGroup id={group}>
        <div
          className="solution-tabs"
          role="tablist"
          aria-label="Payment solutions"
        >
          {solutions.map((item, i) => (
            <motion.button
              whileTap={reduced ? undefined : { scale: 0.96 }}
              ref={(node) => {
                tabRefs.current[i] = node;
              }}
              key={item.slug}
              id={`tab-${item.slug}`}
              role="tab"
              aria-selected={active === i}
              aria-controls="solution-panel"
              tabIndex={active === i ? 0 : -1}
              onKeyDown={(event) => keyNavigate(event, i)}
              onClick={() => setActive(i)}
            >
              {active === i ? (
                <motion.div
                  aria-hidden="true"
                  className="tab-active-background"
                  layoutId={reduced ? undefined : "active-solution"}
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              ) : null}
              <span>{item.number}</span>
              {item.short}
            </motion.button>
          ))}
        </div>
      </LayoutGroup>
      <div
        id="solution-panel"
        role="tabpanel"
        aria-labelledby={`tab-${solution.slug}`}
        tabIndex={0}
        className="solution-panel"
      >
        <motion.div
          key={`${solution.slug}-copy`}
          className="solution-copy"
          initial={{ opacity: 1, y: 0 }}
          animate={
            reduced ? { opacity: 1, y: 0 } : { opacity: [0.3, 1], y: [16, 0] }
          }
          transition={{ duration: reduced ? 0 : 0.55, ease: motionEase }}
        >
          <h3>{solution.headline}</h3>
          <p className="solution-description">{solution.description}</p>
          <Link
            className="button button-primary"
            href={`/solutions/${solution.slug}#top`}
          >
            Explore {solution.short}{" "}
            <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </motion.div>
        <div className="solution-visual">
          <motion.div
            className="solution-image-plane"
            key={solution.slug}
            initial={{ opacity: 1, scale: 1 }}
            animate={
              reduced
                ? { opacity: 1, scale: 1 }
                : { opacity: [0.25, 1], scale: [0.95, 1] }
            }
            whileHover={reduced ? undefined : { scale: 1.04 }}
            transition={{ duration: reduced ? 0 : 0.7, ease: motionEase }}
          >
            <Image
              src={solution.image}
              alt={solution.name}
              fill
              sizes="(max-width: 760px) 90vw, 48vw"
            />
          </motion.div>
          <span className="visual-index">
            {solution.number} <span>/ 05</span>
          </span>
          <div className="carousel-controls">
            <motion.button
              whileHover={reduced ? undefined : { scale: 1.1 }}
              whileTap={reduced ? undefined : { scale: 0.9 }}
              aria-label="Previous solution"
              onClick={() =>
                setActive((active - 1 + solutions.length) % solutions.length)
              }
            >
              <ArrowLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={reduced ? undefined : { scale: 1.1 }}
              whileTap={reduced ? undefined : { scale: 0.9 }}
              aria-label="Next solution"
              onClick={() => setActive((active + 1) % solutions.length)}
            >
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}

export function BusinessShowcase() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const story = businessStories[active];
  return (
    <div className="shell business-inner">
      <div className="business-intro">
        <h2>
          Your ambition.
          <br />
          Our connection.
        </h2>
        <div
          className="business-options"
          aria-label="Choose your business type"
        >
          {businessStories.map((item, index) => (
            <motion.button
              whileHover={reduced ? undefined : { x: 6 }}
              whileTap={reduced ? undefined : { scale: 0.99 }}
              aria-pressed={index === active}
              key={item.name}
              onClick={() => setActive(index)}
            >
              {item.name}
              <ArrowUpRight size={19} aria-hidden="true" />
            </motion.button>
          ))}
        </div>
      </div>
      <motion.div
        className="business-story"
        key={story.name}
        initial={{ opacity: 1, y: 0 }}
        animate={
          reduced ? { opacity: 1, y: 0 } : { opacity: [0.4, 1], y: [18, 0] }
        }
        transition={{ duration: reduced ? 0 : 0.55, ease: motionEase }}
      >
        <span className="story-number">
          0{active + 1}
          <span> / 04</span>
        </span>
        <h3>{story.title}</h3>
        <p>{story.copy}</p>
        <Link
          className="button button-white"
          href={`/solutions/${story.slug}#top`}
        >
          {story.link}
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </motion.div>
    </div>
  );
}
