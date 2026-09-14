import { render, screen } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { MotionArtwork, MotionCta } from "./motion";

describe("progressive motion", () => {
  it("keeps artwork visible in server-rendered HTML before JavaScript runs", () => {
    const html = renderToString(
      <MotionArtwork className="hero-art">
        <span role="img" aria-label="Chrome payment sculpture" />
      </MotionArtwork>,
    );
    expect(html).toContain("Chrome payment sculpture");
    expect(html).not.toMatch(/opacity:0|visibility:hidden|display:none/);
  });

  it("keeps animated calls to action as native, keyboard-accessible links", () => {
    render(<MotionCta href="#solutions">Find your solution</MotionCta>);
    const link = screen.getByRole("link", { name: "Find your solution" });
    expect(link).toHaveAttribute("href", "#solutions");
    link.focus();
    expect(link).toHaveFocus();
  });
});
