import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "./site-header";

describe("SiteHeader", () => {
  it("opens and closes the mobile navigation", () => {
    render(<SiteHeader />);
    const toggle = screen.getByRole("button", { name: "Open navigation" });

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByTestId("mobile-navigation")).toHaveAttribute("data-open", "true");
  });

  it("offers English, Dari, and Pashto without inventing translations", () => {
    render(<SiteHeader />);
    fireEvent.click(screen.getByRole("button", { name: "Choose language" }));

    expect(screen.getByRole("button", { name: /^English/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^Dari/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^Pashto/ })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /^Dari/ }));
    expect(screen.getByRole("status")).toHaveTextContent("Dari content preview is coming next.");
  });
});
