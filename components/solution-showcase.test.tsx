import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SolutionShowcase, BusinessShowcase } from "./solution-showcase";
import { solutions } from "@/lib/solutions";

describe("solution journey", () => {
  it("switches content and detail destinations for every channel", () => {
    render(<SolutionShowcase />);
    solutions.forEach((solution, index) => {
      fireEvent.click(screen.getAllByRole("tab")[index]);
      expect(screen.getAllByRole("tab")[index]).toHaveAttribute(
        "aria-selected",
        "true",
      );
      expect(
        screen.getByRole("link", { name: `Explore ${solution.short}` }),
      ).toHaveAttribute("href", `/solutions/${solution.slug}#top`);
      expect(screen.getByRole("tabpanel")).toHaveTextContent(
        solution.description,
      );
    });
  });
  it("supports arrow-key focus navigation and wraps carousel controls", () => {
    render(<SolutionShowcase />);
    const tabs = screen.getAllByRole("tab");
    fireEvent.keyDown(tabs[0], { key: "ArrowRight" });
    expect(tabs[1]).toHaveFocus();
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    fireEvent.keyDown(tabs[1], { key: "End" });
    expect(tabs[4]).toHaveFocus();
    fireEvent.click(screen.getByRole("button", { name: "Next solution" }));
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    fireEvent.click(screen.getByRole("button", { name: "Previous solution" }));
    expect(tabs[4]).toHaveAttribute("aria-selected", "true");
  });
  it("connects business audiences to the relevant solution", () => {
    render(<BusinessShowcase />);
    fireEvent.click(screen.getByRole("button", { name: "Merchants" }));
    expect(
      screen.getByRole("link", { name: "Explore merchant payments" }),
    ).toHaveAttribute("href", "/solutions/pos-terminals#top");
    fireEvent.click(screen.getByRole("button", { name: "Payment agents" }));
    expect(
      screen.getByRole("link", { name: "Explore the agent network" }),
    ).toHaveAttribute("href", "/solutions/agent-network#top");
  });
});
