"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { businessStories, solutions } from "@/lib/solutions";

export function SolutionShowcase() {
  const [active, setActive] = useState(0);
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
      <div
        className="solution-tabs"
        role="tablist"
        aria-label="Payment solutions"
      >
        {solutions.map((item, i) => (
          <button
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
            <span>{item.number}</span>
            {item.short}
          </button>
        ))}
      </div>
      <div
        id="solution-panel"
        role="tabpanel"
        aria-labelledby={`tab-${solution.slug}`}
        tabIndex={0}
        className="solution-panel"
      >
        <div key={`${solution.slug}-copy`} className="solution-copy">
          <p className="eyebrow">{solution.audience}</p>
          <h3>{solution.headline}</h3>
          <p className="solution-description">{solution.description}</p>
          <ul>
            {solution.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Link
            className="button button-primary"
            href={`/solutions/${solution.slug}#top`}
          >
            Explore {solution.short}{" "}
            <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </div>
        <div key={solution.slug} className="solution-visual">
          <span className="visual-caption">YARQINPAY / {solution.name}</span>
          <Image
            src={solution.image}
            alt={solution.name}
            fill
            sizes="(max-width: 760px) 90vw, 48vw"
          />
          <span className="visual-index">
            {solution.number} <span>/ 05</span>
          </span>
          <div className="carousel-controls">
            <button
              aria-label="Previous solution"
              onClick={() =>
                setActive((active - 1 + solutions.length) % solutions.length)
              }
            >
              <ArrowLeft size={20} />
            </button>
            <button
              aria-label="Next solution"
              onClick={() => setActive((active + 1) % solutions.length)}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function BusinessShowcase() {
  const [active, setActive] = useState(0);
  const story = businessStories[active];
  return (
    <div className="shell business-inner">
      <div className="business-intro">
        <p className="eyebrow">BUILT AROUND YOU</p>
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
            <button
              aria-pressed={index === active}
              key={item.name}
              onClick={() => setActive(index)}
            >
              {item.name}
              <ArrowUpRight size={19} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
      <div className="business-story" key={story.name}>
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
        <span className="story-bottom">
          BETTER CONNECTIONS. BIGGER POSSIBILITIES.
        </span>
      </div>
    </div>
  );
}
