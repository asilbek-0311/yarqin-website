import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";
import { solutions } from "@/lib/solutions";

describe("YARQINPAY home page", () => {
  it("offers a clear route from the hero to solutions and partnership", () => {
    const { container } = render(<Home />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "More ways to move forward.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Find your solution" }),
    ).toHaveAttribute("href", "#solutions");
    expect(
      screen.getAllByRole("button", { name: "Become a partner" }).length,
    ).toBeGreaterThan(0);
    for (const id of [
      "solutions",
      "technology",
      "for-business",
      "security",
      "support",
      "partner",
    ]) {
      expect(container.querySelector(`#${id}`)).toBeInTheDocument();
    }
  });
  it("links to every product and removes unverified business metrics", () => {
    render(<Home />);
    for (const solution of solutions) {
      expect(screen.getByRole("link", { name: solution.name })).toHaveAttribute(
        "href",
        `/solutions/${solution.slug}#top`,
      );
    }
    expect(
      screen.queryByText(/99.9%|10,000\+|Illustrative prototype metrics/),
    ).not.toBeInTheDocument();
  });
});
