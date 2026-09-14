import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterAll, beforeAll, expect, it, vi } from "vitest";
import { MotionArtwork, MotionProvider } from "./motion";
import { SolutionShowcase } from "./solution-showcase";

beforeAll(() => {
  vi.stubGlobal("matchMedia", (media: string) => ({
    media,
    matches: media.includes("prefers-reduced-motion"),
    onchange: null,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    dispatchEvent: () => true,
  }));
});
afterAll(() => vi.unstubAllGlobals());

it("keeps artwork stationary and solution switching immediate with reduced motion", async () => {
  const { container } = render(
    <MotionProvider>
      <MotionArtwork className="test-art"><span>Chrome artwork</span></MotionArtwork>
      <SolutionShowcase />
    </MotionProvider>,
  );
  fireEvent.click(screen.getByRole("tab", { name: "02 QR payments" }));
  await act(async () => { await new Promise(requestAnimationFrame); });
  expect(screen.getByRole("link", { name: "Explore QR payments" })).toBeVisible();
  expect(container.querySelector(".motion-art-plane")).toHaveStyle({ transform: "none" });
  expect(container.querySelector(".solution-copy")).toHaveStyle({ opacity: "1", transform: "none" });
  expect(container.querySelector(".solution-image-plane")).toHaveStyle({ opacity: "1", transform: "none" });
});
